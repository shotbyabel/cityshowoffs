import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page1 } from '../page1/page1';

@Component({
  templateUrl: 'build/pages/login-page/login-page.html',
})
export class LoginPagePage {
  constructor(private nav: NavController) {}
  
//go to Page1
  //go to the Home-List view

    goToPage1(){
      this.nav.push(Page1);
      console.log("go to page 1");
    
  }


}
