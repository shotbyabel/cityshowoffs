#CITYSHOW_OFFS
###ionic 2

##CREATE PAGES

Create from the CLI

`ionic g page loginPage`

Add to **app.core.scss**

`@import "../pages/login-page/login-page.scss";`

####Make the Login Page be the root page

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

