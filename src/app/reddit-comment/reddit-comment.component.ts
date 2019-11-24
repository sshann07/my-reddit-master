import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyDataService } from '../Service/my-data.service';
import { Comment } from '../model/comment';

@Component({
  selector: 'app-reddit-comment',
  templateUrl: './reddit-comment.component.html',
  styleUrls: ['./reddit-comment.component.css']
})
export class RedditCommentComponent implements OnInit {
  id: any;
  private sub: any;
  comment: Comment[];
  constructor(private data: MyDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.data.fetchComment(this.id).subscribe(
        posts => {
          this.comment = posts;
        });
   });
  }

}
