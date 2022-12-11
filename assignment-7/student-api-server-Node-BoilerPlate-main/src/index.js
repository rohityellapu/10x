const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080
app.use(express.urlencoded());
const studentArray = require('./InitialData')
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here

let studentsData = [...studentArray]

app.get('/api/student/', (req, res) => {

    res.json({
        status: "Success",
        studentsData
    });
})
app.get('/api/student/:id', (req, res) => {
    const { id } = req.params;

    let found = false;
    for (let student of studentsData) {
        if (student.id == id) {
            res.json({
                status: "Success",
                student
            });
            found = true;
        }
    }

    if (!found) res.status(404).json({
        status: 'Failed',
        message: 'Student not found with that id.'
    })


})
app.post('/api/student', (req, res) => {
    let newStd = req.body;
    if (!newStd.name || !newStd.currentClass || !newStd.division) res.status(404).json({
        status: 'Failed',
        message: 'Invalid request data.'
    })

    else {

        newStd.id = studentsData[studentsData.length - 1].id + 1;
        studentsData.push(newStd);
        res.json({
            status: 'Success',
            NewStudentid: newStd.id
        })
    }
})
app.put('/api/student/:id', (req, res) => {
    const { name, currentClass, division } = req.body;
    const { id } = req.params;
    if (!name || !currentClass || !division) res.status(400).json({
        status: 'Failed',
        message: 'Invalid request data.'
    })
    else {

        let found = false;
        for (let i in studentsData) {
            if (studentsData[i].id == id) {
                let student = { id, name, currentClass, division }
                found = true;
                studentsData[i] = student;
                res.json({
                    status: "Success",
                    message: "Students details has been updated",
                    student
                });
            }
        }
        if (!found) res.status(400).json({
            status: 'Failed',
            message: 'Student not found with that id.'
        })
    }

})
app.delete('/api/student/:id', (req, res) => {
    const { id } = req.params;
    let found = false;
    for (let student of studentsData) {
        if (student.id == id) {
            found = true;
        }
    }
    if (!found) res.status(404).json({
        status: 'Failed',
        message: 'Student not found with that id.'
    })

    studentsData = studentsData.filter(student => {
        return student.id != id;
    })

    res.json({
        status: 'Success.',
        message: `Student has been removed with id: ${id}`
    })


})



app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   