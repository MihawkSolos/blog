import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export function authenticate(req, res, next) {
    const authHeader = req.header('Authorization');
    console.log("Authorization Header:", authHeader);

    if (!authHeader) {
        return res.status(401).json({ message: 'No Authorization header provided' });
    }

    const token = authHeader.replace('Bearer ', ''); // Remove 'Bearer ' prefix
    if (!token) {
        return res.status(401).json({ message: 'Token missing from Authorization header' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        console.log("Decoded token:", decoded); // Log the decoded token
        req.user = decoded;
        next();
    });
}


