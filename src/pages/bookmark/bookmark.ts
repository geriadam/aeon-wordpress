import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImgLoader } from 'ionic-image-loader';
import 'rxjs/Rx'
import {Observable} from 'rxjs/Observable';

import { StorageProvider } from '../../providers/storage.provider';

@IonicPage()
@Component({
  selector: 'page-bookmark',
  templateUrl: 'bookmark.html',
  providers: [StorageProvider]
})
export class BookmarkPage {
  pageTitle: string;
  options: any;
  posts: any;
  page: number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storageProvider: StorageProvider
  ) {
    this.fetchPost();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostListPage');
  }

  fetchPost() {
    let fetch = Observable.fromPromise(this.storageProvider.fetchBookmark());
    fetch.subscribe(res => {
      this.posts = res;
      console.log(this.posts);
    })
  }

  goToPost(id, media) {
    this.navCtrl.push(
      "PostContentPage", {
        'postId': id,
        'postMedia': media
      });
  }

  searchPost(event: any) {
    let searchOptions = {
      type: 'search',
      id: event.target.value
    }
    this.fetchPost();
    this.pageTitle = event.target.value;
  }

  // onImageLoad(imgLoader: ImgLoader){
  //   imgLoader.element.parentElement.parentElement.parentElement.className = "fade-in";
  // }
}
