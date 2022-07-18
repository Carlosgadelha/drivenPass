import { prisma } from "../config/database.js";
import { CreateUserData } from "../services/usersService.js";


async function insert(user: CreateUserData) {
    await prisma.users.create({
        data: user
    });
}

async function findById(id: number) {

    return await prisma.users.findUnique({
        where: {
            id
        }
    });

}

async function findByEmail(email: string) {

    return await prisma.users.findUnique({
        where: {
            email
        }
    });

}

export default {
    insert,
    findById,
    findByEmail
}