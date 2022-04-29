import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LikeComponent } from 'src/app/like.component';
import { PublishComponent } from 'src/app/publish/publish.component';
import { PostDetailComponent } from 'src/app/post-detail/post-detail.component';
import { PostsComponent } from 'src/app/posts/posts.component';
import { WelcomeComponent } from 'src/app/welcome/welcome.component';
import { AuthGuard } from 'src/app/common/auth.guard';
import { EditComponent } from './edit/edit.component';
const routes: Routes = [
  { path: 'publish', component: PublishComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'like', component: LikeComponent, canActivate: [AuthGuard] },
  { path: 'home', component: WelcomeComponent },
  {
    path: 'posts/edit/:id',
    component: EditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('src/app/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
