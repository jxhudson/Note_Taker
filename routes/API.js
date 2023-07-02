const router = require('express').Router();
const fs = require('fs');

router.get('/api/notes', async (req, res) => {
    const data = await JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    res.json(data);
});

// Post Note
router.post('/api/notes', (req, res) => {
    const data = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    const newPost = {
        title: req.body.title,
        text: req.body.text,
    };
    data.push(newPost);
    fs.writeFileSync('db/db.json', JSON.stringify(data));
    res.json(data);
});

// Delete Note
router.delete('/api/notes/:id', (req, res) => {
    let data = fs.readFileSync('db/db.json', 'utf8');
    const dataJSON = JSON.parse(data);
    const newPosts = dataJSON.filter((note) => {
        return note.id !== req.params.id;
    });
    fs.writeFileSync('db/db.json', JSON.stringify(newPosts));
    res.json('Deleted Post');
});

module.exports = router;