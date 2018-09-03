import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductListComponent} from './products/product-list.component';
import {FormsModule} from "@angular/forms";
import {ConvertToSpacesPipe} from './shared/convert-to-spaces.pipe';
import {StarComponent} from './shared/star.component';
import {HttpClientModule} from "@angular/common/http";
import {ProductDetailComponent} from './products/product-detail.component';
import {RouterModule} from "@angular/router";
import {WelcomeComponent} from "./home/welcome.component";
import {ProductDetailGuard} from './products/product-detail-guard.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    // CommonModule is a module that provides all kinds of services and directives one
    // usually wants to use in an Angular2 application like ngIf.
    // CommonModule is platform-independent.
    // BrowserModule exports CommonModule and provides a few services specific
    // to the browser platform (in contrary to ServerModule or ServiceWorkerModule).
    // BrowserModule should only be imported in AppModule, CommonModule can be imported everywhere.
    BrowserModule,
    // ngModel
    FormsModule,
    HttpClientModule,
    // Routes using hash, don't need to use url rewriting
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductDetailGuard]},
      {path: 'welcome', component: WelcomeComponent},
    ], {useHash: true})
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
