import admin from '../firebase.js';

const verifyFirebaseToken = async (req, res, next) => {
    const token = req.headers.authorization?.split("Bearer ")[1];

    if (!token) {
        return res.status(401).json({ message: 'Missing token' });
    }

    try{
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = decodedToken;
        next();
    } catch (err){
        console.error(err);
        res.status(401).json({message: "invalid token", error: err.message});
    }
};

export default verifyFirebaseToken;