import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Consumo de API';

  showPosts: boolean = false;
  showPhotos: boolean = false;
  showUsers: boolean = false;

  switcher(type: string) {
    switch (type) {
      case "posts":
        this.showPosts = !this.showPosts;
        this.showPhotos = false;
        this.showUsers = false;
        break;
      case "photos":
        this.showPhotos = !this.showPhotos;
        this.showPosts = false;
        this.showUsers = false;
        break;
      case "users":
        this.showUsers = !this.showUsers;
        this.showPhotos = false;
        this.showPosts = false;
        break;
      default:
        break;
    }
  }
}
