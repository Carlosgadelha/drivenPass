import { Request, Response } from 'express';
import secureNotesService, { CreateSecureNotesData } from '../services/secureNotesService.js';

export async function newNote(req: Request, res: Response) {

    const userId = parseInt(res.locals.userId);
    
    const note: CreateSecureNotesData = {...req.body, userId};
    
    await secureNotesService.insert(note);
    
    return res.sendStatus(201);
}

export async function getNoteById(req: Request, res: Response){
        
        const id = parseInt(req.params.id);
        const userId = parseInt(res.locals.userId);
        
        const note = await secureNotesService.findById(id, userId);
        
        return res.send(note);
}

export async function getNotes(req: Request, res: Response){
        
        const userId = parseInt(res.locals.userId);
        
        const notes = await secureNotesService.findAll(userId);
        
        return res.send(notes);
}

export async function deleteNoteById(req: Request, res: Response){
        
        const id = parseInt(req.params.id);
        const userId = parseInt(res.locals.userId);
        
        await secureNotesService.deleteById(id, userId);
        
        return res.sendStatus(200);
}