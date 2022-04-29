import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { PostService } from '../post.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  postForm: FormGroup;
  postId: number;
  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router) {
      this.createPostForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.postId = params.id;
      this.postService
        .getPostDetailById(+this.postId)
        .subscribe((data) => {
          this.postForm.controls['title'].patchValue(data.title);
          /*this.postForm.controls['userId'].patchValue(data.userId);*/
          this.postForm.controls['content'].patchValue(data.content);
          //this.postForm.controls['likes'].patchValue(data.likes);
          //this.postForm.controls['hits'].patchValue(data.hits);
          //this.postForm.controls['categoryId'].patchValue(data.categoryId);
          //this.postForm.controls['image'].patchValue(data.imageUrl);
        });
    });
}
  createPostForm() {
    this.postForm = this.fb.group({
      id: [null, Validators.required],
      title: ['', Validators.required],
      userId: ['', Validators.required],
      content: ['', Validators.required],
      likes: [null, Validators.required],
      hits: [null, Validators.required],
      categoryId: [null, Validators.required],
      imageUrl: [
        'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
        , Validators.required],
    });
    this.postForm.get('title').valueChanges.subscribe((value) => { });
  }

  handleSubmit(event: MouseEvent) {
    event.preventDefault();
    if (this.postForm.invalid) {
      console.log('Invalid title value');
      return;
    }
    this.postService
      .editPost(this.postId, { ...this.postForm.value })
      .subscribe((data) => {
        console.log(data);
        this.postForm.reset();
        this.router.navigateByUrl('/posts');
      });
  }

}
