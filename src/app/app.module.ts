import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { SignUpPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
import { ForgotPage } from '../pages/forgot/forgot';
import { ResetPage } from '../pages/reset/reset';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
	SignUpPage,
	ForgotPage,
	ResetPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	SignUpPage,
	ForgotPage,
	ResetPage
  ],
  providers: []
})
export class AppModule {}
