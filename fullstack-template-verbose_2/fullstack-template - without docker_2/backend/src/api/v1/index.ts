import * as express from 'express';
import { ResourceController } from '../shared';
import { ITask, TaskModel } from '@app/models';
import { FilesController } from './files/files.controller';
import { SocketEventsController } from './socket-events/socket-events.controller';
import { ExampleController } from './example/example.controller';
import { TVController } from './TV/TV.controller';
import { TVHomeController } from './TVHome/TVHome.controller';
import { TVLivestreamsController } from './TVLivestreams/TVLivestreams.controller';
import { TVHighlightsController } from './TVHighlights/TVHighlights.controller';
import { TVTwitterController } from './TVTwitter/TVTwitter.controller';
import { TVPlayersController } from './TVPlayers/TVPlayers.controller';
import { TVProfileController } from './TVProfile/TVProfile.controller';
import { TVVoteController } from './TVVote/TVVote.controller';
import { TVPollsController } from './TVPolls/TVPolls.controller';
import { TVRulesController } from './TVRules/TVRules.controller';
import { HomepageSmartphoneController } from './homepageSmartphone/homepageSmartphone.controller';
import { SmartphonePlayersController } from './smartphonePlayers/smartphonePlayers.controller';
import { TwitterSmartphoneController } from './twitterSmartphone/twitterSmartphone.controller';
import { VoteSmartphoneController } from './voteSmartphone/voteSmartphone.controller';
import { SmartableHomeController } from './smartableHome/smartableHome.controller';
import { SmartableVideosController } from './smartableVideos/smartableVideos.controller';


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

  .use(
    '/TV',
    new TVController().applyRoutes()
  )

  .use(
    '/TVHome',
    new TVHomeController().applyRoutes()
  )

  .use(
    '/TVLivestrams',
    new TVLivestreamsController().applyRoutes()
  )

  .use(
    '/TVHighlights',
    new TVHighlightsController().applyRoutes()
  )

  .use(
    '/TVTwitter',
    new TVTwitterController().applyRoutes()
  )

  .use(
    '/TVPlayers',
    new TVPlayersController().applyRoutes()
  )

  .use(
    '/TVProfile',
    new TVProfileController().applyRoutes()
  )

  .use(
    '/TVVote',
    new TVVoteController().applyRoutes()
  )

  .use(
    '/TVPolls',
    new TVPollsController().applyRoutes()
  )

  .use(
    '/TVRules',
    new TVRulesController().applyRoutes()
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
  )
  
  // smartable home
  .use(
    '/smartableHome',
    new SmartableHomeController().applyRoutes()
  )
  
  // smartable videos
  .use(
    '/smartableVideos',
    new SmartableVideosController().applyRoutes()
  );

export { apiV1Router };

