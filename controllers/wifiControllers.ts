import { Request, Response } from 'express';
import wifiService, { CreateWifiData } from '../services/wifiService.js';

export async function newNetwork(req: Request, res: Response) {

    const userId = parseInt(res.locals.userId);
    const network: CreateWifiData = {...req.body, userId};
    
    await wifiService.insert(network);
    
    return res.sendStatus(201);
}

export async function getNetworkById(req: Request, res: Response){
        
        const id = parseInt(req.params.id);
        const userId = parseInt(res.locals.userId);
        
        const network = await wifiService.findById(id, userId);
        
        return res.send(network);
}

export async function getNetworks(req: Request, res: Response){
        
        const userId = parseInt(res.locals.userId);
        
        const networks = await wifiService.findAll(userId);
        
        return res.send(networks);
}

export async function deleteNetworkById(req: Request, res: Response){
        
        const id = parseInt(req.params.id);
        const userId = parseInt(res.locals.userId);
        
        await wifiService.deleteById(id, userId);
        
        return res.sendStatus(200);
}