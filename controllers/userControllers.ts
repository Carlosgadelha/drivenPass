import { Request, Response } from 'express';

export async function newUser(req: Request, res: Response) {
    
    const { username, password } = req.body;
    // const user = await User.create({
    //     email: email,
    //     password: password
    // });
    // return user;
}