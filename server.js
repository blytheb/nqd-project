require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const admin = require('./config/firebase');

const app = express();

app.use(cors());
app.use(express.json());

//firebase middleware
const verifyFirebaseToken = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    try{
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = decodedToken;
        next();
    } catch (err){
        console.error(err);
        res.status(401).json({message: "invalid token"});
    }
};

//example protected route
app.get('/protected', verifyFirebaseToken, (req, res) => {
    res.json({ message: `Hello ${req.user.email}!` });
});

//DB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB")
        app.listen(process.env.PORT, () => 
            console.log(`Server is running on port ${process.env.PORT}!`)
        );
    })
    .catch (err => console.error("DB connection error:", err));