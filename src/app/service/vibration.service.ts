import { Injectable } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';

@Injectable({
  providedIn: 'root'
})
export class VibrationService {

  constructor(private vibration: Vibration) { }

  error(){
    this.vibration.vibrate([750,0,750]);
  }

  success(){
    this.vibration.vibrate([500,0]);
  }
}
