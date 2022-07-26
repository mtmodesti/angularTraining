import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormDataComponent } from './components/form-data/form-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* material angular imports */
import {MatTooltipModule} from '@angular/material/tooltip'
import {CdkAccordionModule} from '@angular/cdk/accordion'
import { ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

//import {MatSelectInfiniteScrollModule} from 'ng-mat-select-infinite-scroll';
/* fim material angular */

@NgModule({
  declarations: [AppComponent, FormDataComponent, HeaderComponent, MainComponent, HeroesComponent, HeroDetailComponent],
  imports: [
    BrowserModule,
    MatInputModule,
    CdkAccordionModule,
    MatButtonModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    MatDatepickerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
