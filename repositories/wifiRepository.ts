import { prisma } from "../config/database.js";
import { CreateWifiData } from "../services/wifiService.js";


async function insert( network: CreateWifiData) {
    await prisma.wifi.create({
        data: network
    });
}

async function findById(id: number, userId: number) {

    const result = await prisma.wifi.findMany({
        where: {
            id,
            userId
        }
    });

    return result[0];
}

async function findAll(userId: number) {
    
    return await prisma.wifi.findMany({
        where: {
            userId
        }
    });
    
}

async function deleteById(id: number, userId: number) {

    return await prisma.wifi.deleteMany({
        where: {
            id,
            userId
        }
    });
}

export default {
    insert,
    findById,
    findAll,
    deleteById
}