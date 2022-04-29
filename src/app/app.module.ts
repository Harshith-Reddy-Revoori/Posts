import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostcomponentComponent } from './postcomponent/postcomponent.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LikeModule } from 'src/app/like.module';
import { PublishComponent } from './publish/publish.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';
/*import { AuthComponent } from './auth/auth.component';*/
import { EditComponent } from './edit/edit.component';
@NgModule({
  declarations: [
    AppComponent,
    PostcomponentComponent,
    PostsComponent,
    PostComponent,
    PublishComponent,
    PostDetailComponent,
    WelcomeComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LikeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
