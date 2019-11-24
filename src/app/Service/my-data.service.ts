import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
import { Observable} from 'rxjs';
import { Router } from '@angular/router'
import { map } from 'rxjs/operators';
import { Post } from '../model/post';
import { Comment } from '../model/comment';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class MyDataService {

  constructor(private jsonp: Jsonp, private http: Http, private route: Router) {
  }

  fetchPosts(subreddit: string): Observable<Post[]> {
    return this.jsonp.get("https://www.reddit.com/r/" + subreddit
      + ".json?jsonp=JSONP_CALLBACK").pipe(map(data => {
        var posts: Post[] = [];
        let children = data.json().data.children;
        for (var i = 0; i < children.length; i++) {
          let post: Post = new Post();
          post.title = children[i].data.title;
          post.url = children[i].data.url;
          post.author = children[i].data.author;
          post.created = children[i].data.created;
          post.num_comments = children[i].data.num_comments;
          post.permalink = children[i].data.permalink;
          post.score = children[i].data.score;
          post.thumbnail = children[i].data.thumbnail;
          posts.push(post);
        }
        return posts;
      }));
  }

  fetchComment(redditcomment: string): Observable<Comment[]> {
    return this.http.get("https://www.reddit.com" + redditcomment
      + ".json").pipe(map(data => {
        var comments: Comment[] = [];
        let children = (data.json())[1].data.children;
        for (var i = 0; i < children.length; i++) {
          let comment: Comment = new Comment();
          comment.body = children[i].data.body;
          comments.push(comment);
        }
        return comments;
      }));
  }
}

