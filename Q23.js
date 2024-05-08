const fs = require('fs');

// Asynchronous file reading
fs.readFile('Q1.html', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('Asynchronous File Content:', data);
});

// Synchronous file reading
try {
    const syncData = fs.readFileSync('Q1.html', 'utf8');
    console.log('Synchronous File Content:', syncData);
} catch (err) {
    console.error('Error reading file synchronously:', err);
}

// Asynchronous file writing
const contentToWrite = 'Hello, Asynchronous World!';
fs.writeFile('Q1.html', contentToWrite, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('File written asynchronously!');
});

// Synchronous file writing
const syncContentToWrite = 'Hello, Synchronous World!';
try {
    fs.writeFileSync('Q1.html', syncContentToWrite);
    console.log('File written synchronously!');
} catch (err) {
    console.error('Error writing to file synchronously:', err);
}
