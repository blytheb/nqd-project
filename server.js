import express from 'express';
import dotenv from 'dotenv'; 
import mongoose from 'mongoose';
import cors from 'cors';

import childRoutes from './routes/child.routes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/children', childRoutes);


//DB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB")
        app.listen(process.env.PORT, () => 
            console.log(`Server is running on port ${process.env.PORT}!`)
        );
    })
    .catch (err => console.error("DB connection error:", err));