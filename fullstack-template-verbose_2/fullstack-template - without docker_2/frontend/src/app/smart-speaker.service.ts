/**
 * An angular service for smart speaker based on artyom.js
 * 
 * In order to use it:
 *  - install artyom.js (npm i artyom.js)
 *  - add this file in src/app
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Artyom from '../../node_modules/artyom.js/build/artyom';
import { environment } from 'src/environments/environment';
import { TVVoteDoneService } from 'src/app/global/services/TVVoteDOne/TVVoteDone.service';

@Injectable({
  providedIn: 'root'
})
export class SmartSpeakerService {

  private artyom: any;

  constructor(private TVVoteDoneService: TVVoteDoneService) {
    this.artyom = new Artyom();
  }

  /**********************/

  private initializeArtyom() {
    this.artyom.fatality();

    setTimeout(() => {
      this.artyom.initialize({
        lang: 'en-GB',
        continuous: true,// Artyom will listen forever
        listen: true, // Start recognizing
        debug: false, // Show everything in the console
        speed: 1, // talk normally
        //name: 'Bot' //set a key phrase to say before each command
      }).then(function () {
        console.log('Smart Speaker is ready');
      });
    }, 250);

  }

  /**********************/

  /**
   * Speak the given text
   * 
   * @param text 
   * @param onSpeakEnded called when the speech ends
   */
  speak(text: string, onSpeakEnded?: () => any) {
    this.artyom.say(text, {
      onStart: () => {
        //in case you would like to run code when speak starts
      },
      onEnd: () => {
        if (onSpeakEnded)
          onSpeakEnded();
      }
    });
  }

  /**********************/

  /**
   * Set a command that you would like to be recognized 
   * 
   * @param text a phrase/word or multiple phrases/words to be recognized
   * @param onVoiceRecognition a callback that is triggered whenever the system recognizes the given text
   */
  addCommand(text: string | string[], onVoiceRecognition: (i, wildcard) => any) {
    var command = typeof (text) === 'string' ? [text] : text;

    var newCommand = {
      smart:true,
      indexes: command,
      action: (i, wildcard) => {
        onVoiceRecognition(i, wildcard);
      }
    };

    this.artyom.addCommands(newCommand);
    this.initializeArtyom();
  }

  /**********************/

  /**vote a player with voice command */
  public voteVoiceCommand(){
    this.addCommand('Vote for *' ,(i, wildcard)=>{
      /**if the second argument (wildcard) is valid vote this player */
      if(wildcard == 'Cody' || wildcard == 'Kevin' || wildcard == 'Nicole A.'){
        this.TVVoteDoneService.votePlayer(wildcard+".jpg", " " + wildcard).subscribe();
      } else {
        console.log('Wrong name');
      }
    })
  }
}
