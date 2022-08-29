import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/Post';
import { PostService } from '../../../service/post.services';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts: Post[] = [];  
  
  public post: Post;

  public id: number;

  faPenToSquare = faPenToSquare;
  faTrashCan = faTrashCan;

  isModalOpen = false;
  isDeleteModalOpen = false;

  editSwitcher(status: boolean, id: number) { this.isModalOpen = status; if(status) this.post = this.posts.filter(p => p.id === id)[0] }
  deleteSwitcher(status: boolean, id: number) { this.isDeleteModalOpen = status; this.id = id}

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe({ 
      next: (response: Post[]) => this.posts = response, 
      error: (e: HttpErrorResponse) => console.log(e.message)
    });
  }

}
