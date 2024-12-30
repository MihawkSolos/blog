import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET; 

export async function registerUser(req, res) {
  const { username, password } = req.body;

  // Check if username already exists
  const existingUser = await prisma.user.findUnique({
      where: { username }
  });
  if (existingUser) {
      return res.status(400).json({ error: 'Username already taken' });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save new user to the database
  const user = await prisma.user.create({
      data: {
          username,
          password: hashedPassword
      }
  });

  res.status(201).json({ message: 'User created successfully' });
}

export async function loginUser(req, res) {
  const { username, password } = req.body;

  // Find the user by username
  const user = await prisma.user.findUnique({
      where: { username }
  });

  if (!user) {
      return res.status(400).json({ error: 'Invalid username or password' });
  }

  // Check if the password matches
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid username or password' });
  }

  // Generate JWT token
  const token = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET, {
      expiresIn: '1h' // Token expires in 1 hour
  });

  res.json({ token });
}

export async function getAllUsers(req, res) {
    try {
        // Get all users from the database
        const users = await prisma.user.findMany();
        
        // Send the users back as a JSON response
        res.json(users);
      } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'An error occurred while fetching users' });
      }const users = await prisma.user.findMany();

    console.log(users);

    return users;
}


export default { registerUser, loginUser, getAllUsers, }