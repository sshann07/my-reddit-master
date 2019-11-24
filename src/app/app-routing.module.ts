import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyRedditComponent } from './my-reddit/my-reddit.component';
import { RedditCommentComponent } from './reddit-comment/reddit-comment.component';

const routes: Routes = [
  {path: 'redditcomment/:id', component:RedditCommentComponent, pathMatch: 'full'},
  { path: '', component: MyRedditComponent, pathMatch: 'full'},
  { path: 'home', component: MyRedditComponent, pathMatch: 'full'},
  { path: 'text-align:center', component: RedditCommentComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
