import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PostService } from './post.service';
import { environment } from 'src/environments/environment';


describe('PostService', () => {
  let service: PostService;
  let httpMock: HttpTestingController;
  const baseUrl: string = environment.apiUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PostService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be GET call', () => {
    service.fetchAll().subscribe(data => { });

    const mockCall = httpMock.expectOne({
      url: `${baseUrl}/posts`,
      method: 'GET'
    })

    expect(mockCall.cancelled).toBeFalsy();
    expect(mockCall.request.responseType).toBe('json');
  })

  it('should be POST call', () => {
    service.addPost({
      id: 10,
      title: 'Post 1',
      userId: 10,
      content: 'Post content',
      likes: 10,
      hits: 10,
      categoryId: 10,
      imageUrl: 'https://unsplash.com/random',
      
    }).subscribe(data => { });

    const mockCall = httpMock.expectOne({
      url: `${baseUrl}/posts`,
      method: 'POST'
    })

    expect(mockCall.cancelled).toBeFalsy();
    expect(mockCall.request.responseType).toBe('json');
  })
});
