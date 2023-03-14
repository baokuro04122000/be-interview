import {Request, Response} from 'express'

export const register = (app: any) => {
    app.get('/_healthcheck', (req: Request, res: Response) => {
        res.status(200).json({
            now: new Date(),
            uptime: process.uptime()
        });
    });
};
