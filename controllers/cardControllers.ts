import { Request, Response } from 'express';
import cardService, { CreateCardData } from '../services/cardService.js';

export async function newCard(req: Request, res: Response) {

    const userId = parseInt(res.locals.userId);
    
    const card: CreateCardData = {...req.body, userId};
    
    await cardService.insert(card);
    
    return res.sendStatus(201);
}

export async function getCardById(req: Request, res: Response){
        
        const id = parseInt(req.params.id);
        const userId = parseInt(res.locals.userId);
        
        const card = await cardService.findById(id, userId);
        
        return res.send(card);
}

export async function getCards(req: Request, res: Response){
        
        const userId = parseInt(res.locals.userId);
        
        const cards = await cardService.findAll(userId);
        
        return res.send(cards);
}

export async function deleteCardById(req: Request, res: Response){
        
        const id = parseInt(req.params.id);
        const userId = parseInt(res.locals.userId);
        
        await cardService.deleteById(id, userId);
        
        return res.sendStatus(200);
}