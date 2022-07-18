import { Request, Response } from 'express';
import usersService, { CreateUserData } from '../services/usersService.js';

export async function newUser(req: Request, res: Response) {
    
    const user: CreateUserData = req.body;
    
    const result = await usersService.findByEmail(req.body.email);
    await usersService.insert(user);
    
    return res.sendStatus(201);
}

export async function login(req: Request, res: Response) {

    const user = await usersService.findByEmailAndPassword(req.body.email, req.body.password);
        
    return res.send(user);
}