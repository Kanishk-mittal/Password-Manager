import express from 'express';
import { configDotenv } from 'dotenv';
import { pass } from './Schema/PassSchema.js';
import mg from 'mongoose'
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Define your routes and middleware here

configDotenv();
let con = await mg.connect(process.env.MONGO_URI + "/Passwords");

const port = 3000;
app.get('/', async (req, res) => {
    try {
        const passwords = await pass.find();
        res.json(passwords);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});
app.post('/add', async (req, res) => {
    const { Website, Uname, password,index } = req.body;
    const newPass = new pass({
        index,
        Website,
        Uname,
        password
    });
    await newPass.save();
    res.send('Password Saved');
});
app.post('/delete', async (req, res) => {
    const { index } = req.body;
    await pass.deleteOne({ index });
    console.log(index);
    res.send('Password Deleted');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});