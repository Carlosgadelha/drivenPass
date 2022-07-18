import { Request, Response } from 'express';
import credentialService, { CreateCredentialData } from '../services/credentialService.js';

export async function newCredential(req: Request, res: Response) {

    const userId = parseInt(res.locals.userId);
    
    const credential: CreateCredentialData = {...req.body, userId};
    
    await credentialService.insert(credential);
    
    return res.sendStatus(201);
}

export async function getCredentialById(req: Request, res: Response){
        
        const id = parseInt(req.params.id);
        const userId = parseInt(res.locals.userId);
        
        const credential = await credentialService.findById(id, userId);
        
        return res.send(credential);
}

export async function getCredentials(req: Request, res: Response){
        
        const userId = parseInt(res.locals.userId);
        
        const credentials = await credentialService.findAll(userId);
        
        return res.send(credentials);
}

export async function deleteCredentialById(req: Request, res: Response){
        
        const id = parseInt(req.params.id);
        const userId = parseInt(res.locals.userId);
        
        await credentialService.deleteById(id, userId);
        
        return res.sendStatus(200);
}