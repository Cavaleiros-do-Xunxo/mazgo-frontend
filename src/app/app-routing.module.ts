import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShelfComponent } from './shelf/shelf.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    component: ShelfComponent,
    path: 'teste'
  },
  {
    component: AppComponent,
    path: '',
    pathMatch: 'full'
  },
  {
    component: AppComponent,
    path: '**'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
