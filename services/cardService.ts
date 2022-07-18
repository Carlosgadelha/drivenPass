import { Cards } from "@prisma/client";
import Cryptr from "cryptr";
import cardRepository from "../repositories/cardRepository.js";

export type CreateCardData = Omit<Cards, "id"|"createdAt"|"updatedAt">;


const cryptr = new Cryptr(process.env.CRYPTR_SECRET);

async function insert(card: CreateCardData){

    const { title, cvc, userId, password } = card;

    const isCard = await cardRepository.findByTitle(title, userId);

    if(isCard.length > 0 ) throw { type: "conflict"};

    card.cvc = cryptr.encrypt(cvc);
    card.password = cryptr.encrypt(password);

    await cardRepository.insert( card );
}

async function findById(id: number, userId: number){
    
    const card = await cardRepository.findById(id, userId);

    if(!card) throw { type: "not_found"};

    card.cvc = cryptr.decrypt(card.cvc);
    card.password = cryptr.decrypt(card.password);

    return card
    
}

async function findAll(userId: number){
    const cards = await cardRepository.findAll(userId);

    if(!cards) throw { type: "not_found"};
    
    return cards.map(card => {
        card.cvc = cryptr.decrypt(card.cvc);
        card.password = cryptr.decrypt(card.password);
        return card;
    })
    
}

async function deleteById(id: number, userId: number){

    await findById(id, userId);
    await cardRepository.deleteById(id, userId);

}

export default{
    insert,
    findById,
    findAll,
    deleteById
}