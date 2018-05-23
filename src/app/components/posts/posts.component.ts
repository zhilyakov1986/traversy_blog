import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
