import { Request, Response, NextFunction, Router } from 'express';
import { NotFound, BadRequest } from 'http-errors';
import { DIContainer, MinioService, SocketsService } from '@app/services';
import { logger } from '../../../utils/logger';

export class WallHomeController {

    /**
     * Apply all routes for example
     *
     * @returns {Router}
     */
    public applyRoutes(): Router {
        const router = Router();

        router.post('/wallHome');
        router.post('/playVideo', this.playVideo);
        router.post('/pause_play', this.pause_play);
        return router;
    }
    
    public playVideo(req: Request, res: Response) {
        const message: string = req.body.message;
        const event: string = req.body.event;
        console.log('wall will play video');

        // sending a broadcast message to all clients
        const socketService = DIContainer.get(SocketsService);
        socketService.broadcast(event, message);
    }

    public pause_play(req: Request, res: Response) {
        const message: string = req.body.message;
        const event: string = req.body.event;
        console.log('video will pause or play');

        // sending a broadcast message to all clients
        const socketService = DIContainer.get(SocketsService);
        socketService.broadcast(event, message);
    }
}
