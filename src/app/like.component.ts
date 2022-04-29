import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
type TPost = {
    id: number;
    title: string;
    userId: number;
    content: string;
    likes: number;
    hits: number;
    categoryId: number;
    imageUrl: string;
};

import { LikeService } from 'src/app/like.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent implements OnInit {
  likeItems: TPost[];
  dislikeItems: TPost[];
  @Input() public post: TPost;
  @Output() public postDislike: EventEmitter<number> = new EventEmitter();

  constructor(private likeService: LikeService) { }

  ngOnInit(): void { }

  getLikeItems() {
    this.likeItems = this.likeService.getItems();
  }
 
  handleDislike() {
    this.postDislike.emit(this.post.id);
    /*this.dislikeItems = this.postService.dislikePost(this.post.id);*/
  }
}
