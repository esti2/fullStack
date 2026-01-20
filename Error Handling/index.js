// exe1

function safeJsonParse(jsonString) {
    try {
        return JSON.parse(jsonString)

    } catch (error) {
        return "Invalid JSON format"
    }
}


console.log(safeJsonParse('{"name": "John"}'));
// Output: { name: "John" }

console.log(safeJsonParse('invalid json'));
// Output: "Invalid JSON format"


// exe2
const fs = require('fs');
function readFileWithErrorHandling(filePath, callback) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === `ENOENT`) {
                callback(`File not found: ${filePath}`);
            }
            else if (err.code === `EISDIR`) {
                callback(`Is a directory, not a file:  ${filePath}`);
            }
            else {
                callback(`Error reading file: ${err.message}`);
            }

        }
        else {
            // הצלחה - מחזירים גודל הקובץ בבייטים
            callback(`File read successfully. Size: ${data.length} bytes`);
        }
    })
}



readFileWithErrorHandling('existing.txt', (result) => {
    console.log(result);
    // Success: "File read successfully. Size: 150 bytes"
    // Or error: "File not found: existing.txt"
});
