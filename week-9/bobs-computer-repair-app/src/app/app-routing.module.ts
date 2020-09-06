import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { ServicesComponent } from './services/services.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
{
  path: 'home',
  component: HomeComponent
},

  {
      path: 'services',
      component: ServicesComponent
  },
  {
    path: 'order',
    component: OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
