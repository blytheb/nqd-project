import express from 'express';
import { getCurrentUser, createUser } from '../controllers/user.controller.js';
import verifyFirebaseToken from '../middleware/auth.middleware.js';

const router = express.Router();

//protected route to get current user
router.get('/me', verifyFirebaseToken, getCurrentUser);

//Optional: register new user (after Firebase signup)
router.post('/create', verifyFirebaseToken, createUser);

export default router;