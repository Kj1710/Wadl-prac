const express = require('express');
const app = express();

// Sample data
const names = ['Alice', 'Bob', 'Charlie', 'David'];

// Endpoint to serve client HTML
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Print Names to HTML</title>
        </head>
        <body>
            <h1>Names List</h1>
            <div id="namesList"></div>
            <script>
                function renderNames(names) {
                    var namesList = document.getElementById('namesList');
                    var html = '<ul>';
                    names.forEach(function(name) {
                        html += '<li>' + name + '</li>';
                    });
                    html += '</ul>';
                    namesList.innerHTML = html;
                }
                var dataURL = '/api/names';
                fetch(dataURL)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Failed to fetch data');
                        }
                        return response.json();
                    })
                    .then(data => {
                        renderNames(data.names);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            </script>
        </body>
        </html>
    `);
});

// Endpoint to serve names data
app.get('/api/names', (req, res) => {
    res.json({ names: names });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
