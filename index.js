const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/problems', (req, res) => {
    res.sendFile(__dirname + '/views/problems.html');
});

app.get('/problems/:id', (req, res) => {
    const problemId = req.params.id;
    res.send(`<h1>Problem ${problemId}</h1><p>Problem statement for problem ${problemId} will be displayed here.</p>`);
});

app.get('/notes', (req, res) => {
    res.sendFile(__dirname + '/views/notes.html');
});

app.get('/profile', (req, res) => {
    res.sendFile(__dirname + '/views/profile.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
