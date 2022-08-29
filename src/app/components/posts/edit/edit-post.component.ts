import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from '../../../interface/Post';
import { PostService } from '../../../service/post.services';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  @Input() post: Post;

  @Output() closeEvent = new EventEmitter<boolean>();

  closeModal() { this.closeEvent.emit(false) }

  public editForm = new FormGroup({ title: new FormControl(""), body: new FormControl("") });

  constructor(private postService: PostService) { }

  onSubmit(values: any, id: number) { 
    this.postService.updatePost({...values, id: id}).subscribe({ 
    next: () => alert("Post updated"), 
    error: (e: HttpErrorResponse) => console.log(e.message)
    }); 
    
    this.closeModal(); 
    
    this.editForm.reset() 
  }

  ngOnInit(): void {
  }

}
