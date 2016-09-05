#CITYSHOW_OFFS
###ionic 2

##CREATE PAGES

Create from the CLI

`ionic g page loginPage`

Add to **app.core.scss**

`@import "../pages/login-page/login-page.scss";`

###Make the Login Page be the root page

1. go to **app.ts**

`  rootPage: any = LoginPagePage;`

```javascript
.
..
...
class MyApp {
  @ViewChild(Nav) nav: Nav;
//FIRST PAGE
  rootPage: any = LoginPagePage;

  pages: Array<{title: string, component: any}>

  constructor(private platform: Platform) {
    this.initializeApp();
..
...
....
.....
}


```
<br>

2. NEXT I want to have temporary/quick access to the sideMenu contant scaffoled by the ionic 2 app generator so I code a simple button that will take me from the Login Page back to "Page1" and access to the Side Menu.

3, create the button **login-page.html **

`(click)="goToPage1()"`

```html

<ion-content padding class="login-page">
	<button primary round (click)="goToPage1()">Page 1</button>  
</ion-content>


```

4. Let's make this click event GO TO Page1 **login-page.ts**

First we have to make sure that the following are `import` ed into our file

`import { NavController } from 'ionic-angular';`
`import { Page1 } from '../page1/page1';`

**NEXT** we use `nav.push` to route

```javascript

export class LoginPagePage {
  constructor(private nav: NavController) {}
  
    goToPage1(){
      this.nav.push(Page1);
    
  }
}
```

LAST: I want the temp button at the bottom of the page and in the center. I set up some master classes and ID in the **app.core.scss**

```css

.btn-center{
  margin: 0 auto;
  text-align: center;
}

#btn-bottom{
position: absolute; 
bottom: 10px; 
width: 100%    

}

```

I did this so that I can have access to the sideMenu while I work on the other static pages for the app

###Add new Pages to SideMenu

1. create the page

`ionic g page showoff Profile`

2. add the `<ion-navbar>`

in the **showoff-profile.html**

```html

<ion-navbar *navbar>

  <button menuToggle>
    <ion-icon name="menu"></ion-icon>
  </button>

  <ion-title>showoffs profile</ion-title>
</ion-navbar>

```

#####Show in the sideMenu & link them

3. Go over to the **app.ts** file and we need to..

IMPORT the `ShowoffProfilePage` class from **showoff-profile.ts**

ADD the `ShowoffProfilePage` component into the SideMenu

` { title: 'Showoffs Profiles', component: ShowoffProfilePage},`

**app.ts** SAMPLE

```javascript

import { Component, ViewChild } from '@angular/core';
import { App, ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { ShowoffProfilePage } from './pages/showoff-profile/showoff-profile';

@Component({
  templateUrl: 'build/app.html'
})

class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPagePage;

  pages: Array<{title: string, component: any}>

  constructor(private platform: Platform) {
    this.initializeApp();

    this.pages = [
      { title: 'Showoffs Profiles', component: ShowoffProfilePage},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
  
  openPage(page) {
   this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);


```
