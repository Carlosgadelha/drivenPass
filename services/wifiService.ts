import { Wifi } from "@prisma/client";
import Cryptr from "cryptr";
import wifiRepository from "../repositories/wifiRepository.js";

export type CreateWifiData = Omit<Wifi, "id"|"createdAt"|"updatedAt">;


const cryptr = new Cryptr(process.env.CRYPTR_SECRET);

async function insert(network: CreateWifiData){

    network.password = cryptr.encrypt(network.password);

    await wifiRepository.insert( network );
}

async function findById(id: number, userId: number){
    
    const network = await wifiRepository.findById(id, userId);

    if(!network) throw { type: "not_found"};

    network.password = cryptr.decrypt(network.password);

    return network
    
}

async function findAll(userId: number){
    const networks = await wifiRepository.findAll(userId);

    if(!networks) throw { type: "not_found"};
    
    return networks.map(network => {
        network.password = cryptr.decrypt(network.password);
        
        return network;
    })
    
}

async function deleteById(id: number, userId: number){

    await findById(id, userId);
    await wifiRepository.deleteById(id, userId);

}

export default{
    insert,
    findById,
    findAll,
    deleteById
}