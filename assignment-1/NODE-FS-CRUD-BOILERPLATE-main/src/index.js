const fs = require('fs/promises')
const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(fileName, fileContent, { encoding: 'utf-8' })
		.catch(err => console.log(err));
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	try {

		let dat = await fs.readFile(fileName, { encoding: 'utf-8' })
		return dat;
	}
	catch (err) {
		console.log(err);
	}
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile(fileName, fileContent, { encoding: 'utf-8' })
		.catch(err => console.log(err));
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(fileName)
		.catch(err => console.log(err));
}


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }