import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FbComponent} from "./component/fb/fb/fb.component";
import {InstaComponent} from "./component/insta/insta/insta.component";

const routes: Routes = [
  { path: 'fb', component: FbComponent },
  { path: 'insta', component: InstaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
