import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModalModule } from "ngx-bootstrap/modal";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';

@NgModule({
  declarations: [   
    AppComponent
  ],
  imports: [
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
  // entryComponents: [NgbdModal1Content, NgbdModalStacked]
})
export class AppModule { }
