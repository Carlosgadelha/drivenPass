import { Credentials } from "@prisma/client";
import Cryptr from "cryptr";

import credentialRepository from "../repositories/credentialRepository.js";

export type CreateCredentialData = Omit<Credentials, "id"|"createdAt"|"updatedAt">;
export type GetCredentialData = Credentials

const cryptr = new Cryptr(process.env.CRYPTR_SECRET);



async function insert(credential: CreateCredentialData){

    const { title, url, email, password, userId } = credential;
    

    const credentials = await credentialRepository.findByTitle(title, userId);
    const credentialsUrl = await credentialRepository.findByUrl(url, userId);

    if(credentials.length > 0 || credentialsUrl.length > 1) throw { type: "conflict"};

    await credentialRepository.insert(
                                    {
                                        title,
                                        url, 
                                        email, 
                                        password: cryptr.encrypt(password),
                                        userId

                                    }
                                );
}

async function findById(id: number, userId: number){
    const credential = await credentialRepository.findById(id, userId);

    if(!credential) throw { type: "not_found"};

    credential.password = cryptr.decrypt(credential?.password);

    return credential
    
}

async function findAll(userId: number){
    const credentials = await credentialRepository.findAll(userId);

    if(!credentials) throw { type: "not_found"};
    
    return credentials.map(credential => {
        credential.password = cryptr.decrypt(credential?.password);
        return credential;
    })
    
}

async function deleteById(id: number, userId: number){

    await findById(id, userId);
    await credentialRepository.deleteById(id, userId);

}

export default{
    insert,
    findById,
    findAll,
    deleteById
}