const   express = require('express');
const   router = express.Router();


//http://localhost:5000/api/register
router.post('/register', (req, res) => {
    res.send('register Endpoint');
}
);

router.post('/login',(req,res)=> {
    res.send('login Endpoint');
}),

module.exports = router;// Route to handle GET requests




