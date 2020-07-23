
/*
 * Title: app.routing.ts
 * Author: Ashleigh Lyman
 * Date: 22 July 2020
 * Description: Routing file
 */

import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';


export const AppRoutes: Routes = [
  {
      path: '',
      component: SignInComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
]
