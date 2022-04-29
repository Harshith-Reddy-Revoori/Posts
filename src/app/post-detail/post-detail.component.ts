import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LikeService } from '../like.service';
import { PostService } from '../post.service';
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
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  public post: TPost;

  constructor(private route: ActivatedRoute, private postService: PostService, private likeService: LikeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const postId = params.id;
      this.postService.getPostDetailById(+postId).subscribe((data) => { this.post = data });
    });
  }
  handlePostLike(post: TPost) {
    this.likeService.addItem(post);
  }
}
