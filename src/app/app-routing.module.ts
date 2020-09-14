import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageTwoComponent } from './components/page-two/page-two.component';
import { PageOneComponent } from './components/page-one/page-one.component';


const routes: Routes = [
  { path: 'page-one', component: PageOneComponent },
  { path: 'page-two', component: PageTwoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'page-two' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

