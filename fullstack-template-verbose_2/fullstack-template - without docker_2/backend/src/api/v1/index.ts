import * as express from 'express';
import { ResourceController } from '../shared';
import { ITask, TaskModel } from '@app/models';
import { FilesController } from './files/files.controller';
import { SocketEventsController } from './socket-events/socket-events.controller';
import { ExampleController } from './example/example.controller';
import { TVHomeController } from './TVHome/TVHome.controller';
import { TVLivestreamsController } from './TVLivestreams/TVLivestreams.controller';
import { HomepageSmartphoneController } from './homepageSmartphone/homepageSmartphone.controller';
import { SmartphonePlayersController } from './smartphonePlayers/smartphonePlayers.controller';
import { TwitterSmartphoneController } from './twitterSmartphone/twitterSmartphone.controller';
import { VoteSmartphoneController } from './voteSmartphone/voteSmartphone.controller';


const apiV1Router = express.Router();


apiV1Router
  // Sockets events routes
  .use(
    '/socket-events',
    new SocketEventsController().applyRoutes()
  )

  // Sockets events routes
  .use(
    '/files',
    new FilesController().applyRoutes()
  )

  // Task routes
  .use(
    '/tasks',
    new ResourceController<ITask>(TaskModel).applyRoutes()
  )

  // Example routes
  .use(
    '/example',
    new ExampleController().applyRoutes()
  )
  
  // TV home routes
  .use(
    '/TVHome',
    new TVHomeController().applyRoutes()
  )

  .use(
    '/TVLivestrams',
    new TVLivestreamsController().applyRoutes()
  )
  
  // smartphone home routes
  .use(
    '/homepageSmartphone',
    new HomepageSmartphoneController().applyRoutes()
  )
  
  // smartphone players routes
  .use(
    '/smartphonePlayers',
    new SmartphonePlayersController().applyRoutes()
  )
  
  // twitter smartphone routes
  .use(
    '/twitterSmartphone',
    new TwitterSmartphoneController().applyRoutes()
  )
  
  // vote smartphone routes
  .use(
    '/voteSmartphone',
    new VoteSmartphoneController().applyRoutes()
  );

export { apiV1Router };

