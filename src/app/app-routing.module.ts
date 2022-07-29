import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormDataComponent } from './components/form-data/form-data.component';

const routes: Routes = [
 {path:'teste', component: FormDataComponent},
  //{path:'training', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
