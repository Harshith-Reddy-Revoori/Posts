import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
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
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() public post: TPost;
  @Input() public isDetailView: boolean;
  @Output() public postDelete: EventEmitter<number> = new EventEmitter();
  @Output() public postLike: EventEmitter<TPost> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void { }

  handleDelete() {
    this.postDelete.emit(this.post.id);
  }
  handleLikes() {
    this.postLike.emit(this.post);
  }
  showDetails() {
    this.router.navigateByUrl(`/posts/${this.post.id}`, {})
  }
}
