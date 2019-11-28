import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddComponentDirective } from './add-component.directive';
import { HolderComponent } from './holder/holder.component';


@NgModule({
  declarations: [
    AppComponent,
    AddComponentDirective,
    HolderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [HolderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
