/**
 ***** Syntax for creating environment variable in command Prompt:
 Windows: set USERNAME="<theNameYouPrefer>"
 Unix or Mac : export USERNAME="<theNameYouPrefer>"
 ***** Syntax for powershell(windows):
 $env USERNAME="<theNameYouPrefer>"
 */

let username = process.env.USERNAME;
console.log(`Hello ${username}`)
