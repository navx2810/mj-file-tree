import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TagTreeComponent } from './components/tag-tree/tag-tree.component';
import { TagNodeComponent } from './components/tag-tree/tag-node/tag-node.component';
import { ContentNodeComponent } from './components/tag-tree/content-node/content-node.component';

@NgModule({
  declarations: [
    AppComponent,
    TagTreeComponent,
    TagNodeComponent,
    ContentNodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
