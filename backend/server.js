const express = require("express");
const { errorHandler } = require("./middlewares/errorMiddleware");
const dotenv = require('dotenv');
const connectDb = require("./config/config");
const productRoutes = require('./routes/productRoutes');
const userRoutes = require("./routes/userRoute");
const orderRoutes = require("./routes/orderRoute"); 

//dotnv configure
dotenv.config();

//connect to mongodb
connectDb();

const app = express();

//middleware bodyparser
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Node Server</h1>');
});

app.use('/api', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.use(errorHandler);

//app.use('/images', express.static('public/images'));

const PORT = 8080;
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server Running in ${process.env.NODE_ENV} Mode on Port ${process.env.PORT}`
    );
});