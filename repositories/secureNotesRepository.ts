import { prisma } from "../config/database.js";
import { CreateSecureNotesData } from "../services/secureNotesService.js";


async function insert( note: CreateSecureNotesData) {
    await prisma.secureNotes.create({
        data: note
    });
}

async function findById(id: number, userId: number) {

    const result = await prisma.secureNotes.findMany({
        where: {
            id,
            userId
        }
    });

    return result[0];
}

async function findByTitle(title: string, userId: number) {

    return await prisma.secureNotes.findMany({
        where: {
            title,
            userId
        }
    });

}


async function findAll(userId: number) {
    
    return await prisma.secureNotes.findMany({
        where: {
            userId
        }
    });
    
}

async function deleteById(id: number, userId: number) {

    return await prisma.secureNotes.deleteMany({
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
    findAll,
    deleteById
}