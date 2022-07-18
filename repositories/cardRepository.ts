import { prisma } from "../config/database.js";
import { CreateCardData } from "../services/cardService.js";


async function insert( card: CreateCardData) {
    await prisma.cards.create({
        data: card
    });
}

async function findById(id: number, userId: number) {

    const result = await prisma.cards.findMany({
        where: {
            id,
            userId
        }
    });

    return result[0];
}

async function findByTitle(title: string, userId: number) {

    return await prisma.cards.findMany({
        where: {
            title,
            userId
        }
    });

}


async function findAll(userId: number) {
    
    return await prisma.cards.findMany({
        where: {
            userId
        }
    });
    
}

async function deleteById(id: number, userId: number) {

    return await prisma.cards.deleteMany({
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