// const getNotes = function (){
//     return 'Your notes...'
// }

// const yargs = require("yargs")

const getNotes = () => {
    return 'Your notes...'
}

module.exports = getNotes

// Challenge: Define and use a function in a new file 

// 1. Create a new file called notes.js
// 2. Create getNotes function that returns "Your notes..."
// 3. Export getNotes function
// 4. From app.js load in and call that function printing message to console

// Challenge: Use the chalk library in your project

// 1. Install chalk library using npm: npm install chalk
// 2. Import chalk library into your app.js file
// 3. Use chalk to change the color of the message printed to console
// 4. Use chalk to change the font style of the message printed to console
// 5. Use chalk to underline the message printed to console
// 6. Use it to print the "Success!" to the console in green, bold, and underlined
// 7. Test your work

// Argument parsing with yargs

// Challenge: Add two new command

// 1. Setup to support "list" command (print placeholder message for the now)
// 2. Setup to support "read" command (print placeholder message for the now)
// 3. Test your work by running both command and ensure correct output

// Challengs: Add an option to yargs

// 1. Set a body option for the add command
// 2. Configure a description, make it required, and for it to be a string
// 3. Log the body value in the handler function
// 4. Test your work!


// Challengs: Setup command option and function

// 1. Set the remove command to take a required "--title" option
// 2. Create and export a removeNote function from notes.js
// 3. Call removeNote in remove command handler
// 4. Have removeNote log the title of thr note to be removed
// 5. Test your work using: node app.js remove --title="some title"

// Challengs: Write up removeNote

//  1. Load existing notes.
//  2. Use array filter method to remove the matching note (if any)
//  3. Save the newly created array
//  4. Test your work with a title that exists and a title that dosn't exist

// Challengs: Use chalk to provide useful log for remove

// 1. If a note is removed, print "Note removed!" with a green background
// 2. If no note is removed, print "No note found!" with red background

