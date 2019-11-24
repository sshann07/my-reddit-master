import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyRedditComponent } from './my-reddit/my-reddit.component';
import { RedditCommentComponent } from './reddit-comment/reddit-comment.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule,JsonpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    MyRedditComponent,
    RedditCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    BrowserAnimationsModule,
    HttpModule,
    JsonpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
