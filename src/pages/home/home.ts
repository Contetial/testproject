import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SignUpPage } from '../pages/signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
	  
 <ion-content>
  <ion-list>
    <button block ion-button (click)="openSignUpPage()" icon-left>
    </button>
  </ion-list>
</ion-content>
    
  }

}