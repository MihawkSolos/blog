import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getComments(req, res) {
    
}

export async function createComment(req,res){

}


export default {getComments, createComment}