import { Router } from 'express';
import { registerUser, loginUser, getAllUsers } from '../controllers/userController.js';
import { getAllPosts, createPost, getMyPosts } from '../controllers/postController.js';
import { authenticate } from '../middleware/authMiddleware.js'; // Import authenticate middleware
import {getComments, createComment} from '../controllers/commentsController.js'


const router = Router();

router.get('/', (req,res) => {
    res.send('hello from backend');
})

// Public route for user registration
router.post('/register', registerUser);
// Public route for user login
router.post('/login', loginUser);

router.get('/posts', getAllPosts);
router.post('/posts', authenticate, createPost);
router.get('/my-posts', authenticate, getMyPosts);

router.get('/comments', getComments);
router.post('/comments', createComment);

export default router;