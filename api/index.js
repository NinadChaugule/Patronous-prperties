import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.routes.js';
import dotenv from 'dotenv';
import userAuth from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import listingRouter from './routes/listing.route.js';
import path from 'path';
dotenv.config();



mongoose.connect(process.env.MONGO).then(()=> {
    console.log("Server is connected brooo");
})
.catch((err)=>{
    console.log(err);
});

const __dirname = path.resolve();

const app=express();
app.use(express.json());
app.use(cookieParser());


app.listen(3000,()=>{
    console.log('Server is running on 3000');
});

app.use('/api/user', userRouter);
app.use('/api/auth', userAuth);
app.use('/api/listing', listingRouter);

app.use(express.static(path.join(__dirname, '/real-estate/dist')));

app.get('*', (req,res,next)=>{
    res.sendFile(path.join(__dirname, 'real-estate','dist','index.html'));

})


app.use((err,req,res,next)=> {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Error hai bhaiii";

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,

    });

});
