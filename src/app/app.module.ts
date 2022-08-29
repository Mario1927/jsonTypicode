import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/main/posts.component';
import { PhotosComponent } from './components/photos/photos.component';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditPostComponent } from './components/posts/edit/edit-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeletePostComponent } from './components/posts/delete/delete-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PhotosComponent,
    UsersComponent,
    EditPostComponent,
    DeletePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
