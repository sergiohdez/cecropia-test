import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';
import { HttpModule } from '@angular/http';

import { ReviewComponent } from './reviews/review.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';
import { ReviewService } from './reviews/review.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    ReviewDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdGridListModule,
    HttpModule
  ],
  providers: [
    ReviewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
