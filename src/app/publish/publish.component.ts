import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css'],
})
export class PublishComponent implements OnInit {
  postForm: FormGroup;

constructor(private fb: FormBuilder, private postService: PostService) {
  this.createPostForm();
  /*setInterval(() => { this.createPostForm() }, 5 * 1000);*/

}
  ngOnInit(): void { }
createPostForm() {
  this.postForm = this.fb.group({
    id: [null, Validators.required],
    title: ['', Validators.required],
    userId: [null, Validators.required],
    content: ['', Validators.required],
    likes: [this.generateARandomLaH(), Validators.required],
    hits: [null, Validators.required],
    categoryId: [null, Validators.required],
    imageUrl: [
      'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
      , Validators.required],
  });
  console.log(this.postForm);
  this.postForm.get('title').valueChanges.subscribe((value) => { });
}
  handleSubmit(event: MouseEvent) {
    event.preventDefault();
    if (this.postForm.invalid) {
      console.log('Invalid title value');
      return;
    }
    this.postService.addPost({ ...this.postForm.value }).subscribe((data) => {console.log(data);
    this.postForm.reset();
  });
}
generateARandomId(min: number = 21, max: number = 9999) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
generateARandomLaH(min: number = 0, max: number = 20) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
}
