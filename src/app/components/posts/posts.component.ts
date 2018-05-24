import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost = {
    id: 0,
    title: '',
    body: '',
  };
  isEdit = false;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
  onNewPost(post: Post) {
    this.posts.unshift(post);
  }
  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }
  onUpdatedPost(post: Post) {
    this.posts.forEach((cur, index) => {
      if (post.id === cur.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost = {
          id: 0,
          title: '',
          body: '',
        };
      }
    });
  }
}
