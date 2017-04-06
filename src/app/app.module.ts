import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CategoryListPage } from '../pages/category-list/category-list';
import { PostContentPage } from '../pages/post-content/post-content';
import { TagListPage } from '../pages/tag-list/tag-list';
import { PostListPage } from '../pages/post-list/post-list';
import { CommentListPage } from '../pages/comment-list/comment-list';

import { IonicImageLoader, ImageLoader, ImageLoaderConfig } from 'ionic-image-loader';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoryListPage,
    PostContentPage,
    TagListPage,
    PostListPage,
    CommentListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicImageLoader
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoryListPage,
    PostContentPage,
    TagListPage,
    PostListPage,
    CommentListPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, 
  IonicImageLoader,
  ImageLoader, 
  ImageLoaderConfig,
  File,
  Transfer
  ]
})
export class AppModule {}
