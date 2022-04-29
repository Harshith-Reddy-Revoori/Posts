import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { LikeService } from 'src/app/like.service';
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
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: TPost[];
  alert: { type: string, message: string } = { type: 'alert-success', message: '' }

  constructor(private postService: PostService, private likeService: LikeService) { }

  ngOnInit(): void {
    const observable = this.postService.fetchAll();
    observable.subscribe((data) => {
      this.alert.type = 'alert-success';
      this.alert.message = 'Post list fetched successfully';
      this.posts = data;
    }, (error) => {
      this.alert.type = 'alert-danger';
      this.alert.message = 'Error while fetching the posts. ' + error.message;
      console.error('Error while fetching the posts', error);
    });
  }

  handlePostLikes(post: TPost) {
    this.likeService.addItem(post);
  }

  handlePostDelete(id: number) {
    this.postService.removePost(id).subscribe((data) => {
      this.posts = this.posts.filter(post => post.id !== data.id);
    });
  }
} 
