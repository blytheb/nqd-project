import User from '../models/user.models.js'

export const getCurrentUser = async (req, res) => {
    try{
        const user = await User.findOne({ uid: req.user.uid });
        if (!user) return res.status(404).json({message: 'User not found'});
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
};

export const createUser = async (req, res) => {
    const {uid, email, username } = req.body;

    try{
        const existingUser = await User.findOne( { uid });
        if (existingUser) return res.status(400).json({ message: 'User already exists'});

        const newUser = new User({ uid, email, username});
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};