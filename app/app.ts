import { Component, ViewChild } from '@angular/core';
import { App, ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { LoginPagePage } from './pages/login-page/login-page';
import { SignupPagePage } from './pages/signup-page/signup-page';
import { ConfirmPaymentPage } from './pages/confirm-payment/confirm-payment';
import { UserProflePage } from './pages/user-profle/user-profle';
import { DestinationsPagePage } from './pages/destinations-page/destinations-page';
import { ShowoffProfilePage } from './pages/showoff-profile/showoff-profile';
import { ContactBookingPage } from './pages/contact-booking/contact-booking';


import { Page1 } from './pages/page1/page1';
import { Page2 } from './pages/page2/page2';


@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;
//FIRST PAGE
  rootPage: any = LoginPagePage;

  pages: Array<{title: string, component: any}>

  constructor(private platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Page uno', component: Page1 },
      { title: 'Page dos', component: Page2 },
      { title: 'Login', component: LoginPagePage },
      { title: 'Sign Up', component: SignupPagePage },
      { title: 'Profile', component: UserProflePage },
      { title: 'Destinations', component: DestinationsPagePage },
      { title: 'Showoffs Profiles', component: ShowoffProfilePage},
      { title: 'Contact Showoff', component: ContactBookingPage},
      { title: 'Confirm Payment', component: ConfirmPaymentPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
//HAMBURGER BUTTON
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
