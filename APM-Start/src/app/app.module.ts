import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductListComponent} from './products/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    // CommonModule is a module that provides all kinds of services and directives one
    // usually wants to use in an Angular2 application like ngIf.
    // CommonModule is platform-independent.
    // BrowserModule exports CommonModule and provides a few services specific
    // to the browser platform (in contrary to ServerModule or ServiceWorkerModule).
    // BrowserModule should only be imported in AppModule, CommonModule can be imported everywhere.
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
