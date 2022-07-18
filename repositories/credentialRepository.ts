import { prisma } from "../config/database.js";
import { CreateCredentialData, GetCredentialData } from "../services/credentialService.js";


async function insert(credential: CreateCredentialData) {
    await prisma.credentials.create({
        data: credential
    });
}

async function findById(id: number, userId: number) {

    const result = await prisma.credentials.findMany({
        where: {
            id,
            userId
        }
    });

    return result[0];
}

async function findByTitle(title: string, userId: number) {

    return await prisma.credentials.findMany({
        where: {
            title,
            userId
        }
    });

}

async function findByUrl(url: string, userId: number) {
    
        return await prisma.credentials.findMany({
            where: {
                url,
                userId
            }
        });
    
}

async function findAll(userId: number) {
    
    return await prisma.credentials.findMany({
        where: {
            userId
        }
    });
    
}

async function deleteById(id: number, userId: number) {

    return await prisma.credentials.deleteMany({
        where: {
            id,
            userId
        }
    });
}

export default {
    insert,
    findById,
    findByTitle,
    findByUrl,
    findAll,
    deleteById
}