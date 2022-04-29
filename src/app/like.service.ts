import { Injectable } from '@angular/core';
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

@Injectable({
  providedIn: 'root',
})
export class LikeService {
  private items: TPost[] = [];

  constructor() { }

  getItems(): TPost[] {
    return [...this.items];
  }

  addItem(item: TPost) {
    this.items.push(item);
  }
}
