const { Router } = require('express');
const router = Router();

const fecth =  require('node-fetch');

router.get('/', async (req, res) => {
    const response = await fecth('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    res.json(users);
    res.send('users');
});

module.exports = router;