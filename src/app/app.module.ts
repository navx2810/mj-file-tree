import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalContainerComponent } from './components/modal-container/modal-container.component';
import { ModalComponent } from './components/modal-container/modal/modal.component';
import { ModalService } from './services/modal/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    ModalContainerComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
