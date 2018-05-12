import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { InfoComponent } from './info/info.component';
import { CarinfoComponent } from './carinfo/carinfo.component';
import {DropdownDirective} from './dropdown';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { RedirectComponent } from './redirect/redirect.component';
import {HttpModule} from '@angular/http';

const appRoutes: Routes =  [
  {path: '', component: HomeComponent},
  {path: 'info', component: InfoComponent},
  {path: 'home', component: HomeComponent},
  {path: 'userinfo', component: UserinfoComponent},
  {path: 'redirect', component: RedirectComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    InfoComponent,
    CarinfoComponent,
    DropdownDirective,
    HomeComponent,
    UserinfoComponent,
    RedirectComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
