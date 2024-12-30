import { Router } from 'express';
import { registerUser, loginUser, getAllUsers } from '../controllers/userController.js';
import { authenticate } from '../middleware/authMiddleware.js'; // Import authenticate middleware

const router = Router();

router.get('/', (req,res) => {
    res.send('hello from backend');
})

// Public route for user registration
router.post('/register', registerUser);

// Public route for user login
router.post('/login', loginUser);

export default router;