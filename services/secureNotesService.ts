import { SecureNotes } from "@prisma/client";
import Cryptr from "cryptr";

import credentialRepository from "../repositories/credentialRepository.js";
import secureNotesRepository from "../repositories/secureNotesRepository.js";

export type CreateSecureNotesData = Omit<SecureNotes, "id"|"createdAt"|"updatedAt">;


const cryptr = new Cryptr(process.env.CRYPTR_SECRET);



async function insert(note: CreateSecureNotesData){

    const { title, content, userId } = note;
    

    const notes = await secureNotesRepository.findByTitle(title, userId);

    if(notes.length > 0 ) throw { type: "conflict"};

    await secureNotesRepository.insert(
                                    {
                                        title,
                                        content: cryptr.encrypt(content),
                                        userId

                                    }
                                );
}

async function findById(id: number, userId: number){
    const note = await secureNotesRepository.findById(id, userId);

    if(!note) throw { type: "not_found"};

    note.content = cryptr.decrypt(note.content);

    return note
    
}

async function findAll(userId: number){
    const notes = await secureNotesRepository.findAll(userId);

    if(!notes) throw { type: "not_found"};
    
    return notes.map(note => {
        note.content = cryptr.decrypt(note.content);
        return note;
    })
    
}

async function deleteById(id: number, userId: number){

    await findById(id, userId);
    await secureNotesRepository.deleteById(id, userId);

}

export default{
    insert,
    findById,
    findAll,
    deleteById
}