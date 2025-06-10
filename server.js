const express = require('express');
const morgan = require('morgan');
const cors = require('cors'); 
const {readdirSync} = require('fs'); 
const bodyParse = require('body-parser');
const connectDB = require('./Config/db');
const app = express();

// const productRoutes = require('./Routes/product');  
// const AuthRoutes = require('./Routes/auth'); 
connectDB(); // Connect to MongoDB
app.use(morgan('dev')); // Middleware for logging requests
app.use(cors()); // Middleware for enabling CORS
app.use(bodyParse.json({limit: '5mb'})); // Middleware for parsing JSON bodies

/** Route 1 */
// app.get('/product', (req, res) => {
//     res.send('Hello Endpoint');
// }
// );

/** Route 2 */
// app.use('/api', productRoutes); // Use the product routes
// app.use('/api', AuthRoutes); // Use the auth routes

/** Route 3 */
readdirSync('./Routes').map((r) => app.use('/api', require('./Routes/'+r)));
    
app.listen(5000, () =>  console.log('Server is running on http://localhost:5000'));
