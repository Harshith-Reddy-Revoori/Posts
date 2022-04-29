import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsComponent } from 'C:/Users/hr67250/products/src/app/posts/posts.component';
import { PostComponent } from 'C:/Users/hr67250/products/src/app/post/post.component';

@NgModule({
    declarations: [PostsComponent, PostComponent],
    imports: [CommonModule],
    exports: [PostsComponent]
})
export class PostsModule { }