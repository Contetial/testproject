import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SignUpPage } from '../signup/signup';
import { ForgotPage } from '../forgot/forgot';
import { ResetPage } from '../reset/reset';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController){
	}
	
	goToSignUp(){
		this.navCtrl.push(SignUpPage);
	}
	
	goToForgot(){
		this.navCtrl.push(ForgotPage);
	}
	goToReset(){
		this.navCtrl.push(ResetPage);
	}

}