const   express = require('express');
const   router = express.Router();



router.get('/auth', (req, res) => {
    res.send('Auth Endpoint');
}
);


module.exports = router;// Route to handle GET requests




