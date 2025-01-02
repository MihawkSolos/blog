import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getAllPosts(req, res) {
    try {
        const posts = await prisma.post.findMany({
            include: {user:true},
        });
        res.json(posts);
    } catch (error){
        console.error("Error fetching posts: ", error);
        res.status(500).json({error: "Error occurred while fetching posts."})
    }
}

export async function createPost(req, res) {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({ error: "Title and content are required." });
        }

        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized. User data not found." });
        }

        console.log("Authenticated user:", req.user);  // Ensure req.user is logged correctly

        const { userId, username } = req.user;  // Correctly access userId and username from the decoded token

        // Create a new post in the database
        await prisma.post.create({
            data: {
                title,
                content,
                userId: userId,  // Pass userId as the foreign key
            },
        });

        res.status(201).json({ message: 'Post created successfully' });
    } catch (error) {
        console.error("Error creating post:", error.message);  // Log the specific error message
        res.status(500).json({ error: "Error occurred while creating post." });
    }
}

export async function getMyPosts(req, res) {
    try {

        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized. User data not found." });
        }

        console.log("Authenticated user:", req.user);
        
        const { userId } = req.user;

        const myPosts = await prisma.post.findMany({
            where: {
                userId,
            }
        })
        res.json(myPosts);

    } catch (error) {
        console.error('Error retrieving user posts', error.message);
        res.status(500).json({ error: "Error occurred while retrieving user post." });
    }
}



export default { getAllPosts, createPost, getMyPosts }