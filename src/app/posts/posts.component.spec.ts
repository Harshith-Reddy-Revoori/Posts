//import { ComponentFixture, TestBed } from '@angular/core/testing';

//import { PostsComponent } from './posts.component';

//describe('PostsComponent', () => {
//  let component: PostsComponent;
//  let fixture: ComponentFixture<PostsComponent>;

//  beforeEach(async () => {
//    await TestBed.configureTestingModule({
//      declarations: [ PostsComponent ]
//    })
//    .compileComponents();
//  });

//  beforeEach(() => {
//    fixture = TestBed.createComponent(PostsComponent);
//    component = fixture.componentInstance;
//    fixture.detectChanges();
//  });

//  it('should create', () => {
//    expect(component).toBeTruthy();
//  });
//});
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { PostService } from '../post.service';
import { LikeService } from 'src/app/like.service';
import { PostsComponent } from './posts.component';
import { PostComponent } from '../post/post.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [PostsComponent, PostComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
  //it(`should render 'No records found'`, () => {
  //  const noRecord = debugElement.query(By.css('#no-records'));
  //  expect(noRecord).toBeTruthy();
  //  expect(noRecord.nativeElement.textContent).toEqual('No record found');
  //  const appPost = debugElement.query(By.css('app-post'));
  //  expect(appPost).toBeNull();
  //});

  

  //it(`should render [app-post] comp`, fakeAsync(() => {
  //  const service = debugElement.injector.get(PostService);
  
  //  component.ngOnInit();
  //  tick(1)

  //  fixture.detectChanges();
  //  expect(debugElement.query(By.css('#no-records'))).toBeNull();
  //  const appProduct = debugElement.queryAll(By.css('app-post'));
  //  expect(appProduct).toBeTruthy();
  //  expect(appProduct.length).toBe(2);
  //  expect(appProduct[0].query(By.css('.post__title')).nativeElement.textContent).toContain('Post 1');
  //}));

  

  //  fixture.detectChanges();
  //  const appProduct = debugElement.query(By.css('app-post'));
  //  const handleProductDeleteSpy = spyOn(component, 'handlePostDelete');
  //  appProduct.triggerEventHandler('postDelete', 11);
  //  expect(handleProductDeleteSpy).toHaveBeenCalled();
  //  expect(handleProductDeleteSpy).toHaveBeenCalledTimes(1);
  //  expect(handleProductDeleteSpy).toHaveBeenCalledWith(11);
  //});

