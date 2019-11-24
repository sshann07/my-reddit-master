import { Component, OnInit, Input } from '@angular/core';
import { MyDataService } from '../Service/my-data.service';
import { Post } from '../model/post';
import { Router, NavigationExtras } from '@angular/router'
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { Comment } from '../model/comment';

@Component({
  selector: 'app-my-reddit',
  templateUrl: './my-reddit.component.html',
  styleUrls: ['./my-reddit.component.css'],
  providers: [MyDataService]
})
export class MyRedditComponent implements OnInit {

  @Input('subreddit') subreddit: string = "Sweden";
  public gridView: GridDataResult;
  public buttonCount = 5;
  public info = true;
  public type: 'numeric' | 'input' = 'numeric';
  public pageSizes = true;
  public previousNext = true;
  public pageSize = 10;
  public skip = 0;
  posts: Post[];
  comment: Comment[];
  subredditArray = [
    'Sweden',
    'India',
    'Space',
    'Europe',
    'MySql'
  ];

  constructor(private data: MyDataService,
    private route: Router) {
  }

  ngOnInit() {
    this.data.fetchPosts(this.subreddit.toLowerCase()).subscribe(
      posts => {
        this.posts = posts;
        this.loadItems();
      }
    );
  }

  protected pageChange({ skip, take }: PageChangeEvent): void {
    this.skip = skip;
    this.pageSize = take;
    this.loadItems();
  }

  private loadItems(): void {
    this.gridView = {
      data: this.posts.slice(this.skip, this.skip + this.pageSize),
      total: this.posts.length
    };
  }

  public onSubRedditChanged(newSubReddit: any) {
    this.subreddit = newSubReddit;
    this.ngOnInit();
  }

  public fetchcomment(redditcomment: string){
    this.route.navigate(['redditcomment', redditcomment]); 
  }
}
