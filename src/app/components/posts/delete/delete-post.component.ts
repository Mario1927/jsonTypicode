import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/interface/Post';
import { PostService } from 'src/app/service/post.services';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {

  @Input() id: number;

  @Output() closeEvent = new EventEmitter<boolean>();

  closeModal() { this.closeEvent.emit(false) }

  onDelete(id: number) {
    this.postService.deletePost(id).subscribe({
      next: () => alert("Post deleted"),
      error: (e: HttpErrorResponse) => console.log(e.message)
    });

    this.closeModal();
  }

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

}
