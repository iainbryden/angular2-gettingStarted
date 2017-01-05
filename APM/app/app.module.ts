import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
//import { WelcomeComponent }  from './home/welcome.component';
import { HpeWelcomeComponent }  from './hpeHome/hpeWelcome.component';
import { TopNav }  from './nav/nav.component';
import { Footer }  from './footer/footer.component';
import { ProductModule } from './products/product.module';
import { SearchModule } from './search/search.module';

@NgModule({
  imports: [ 
    BrowserModule, 
    HttpModule ,
    RouterModule.forRoot([
      {path: 'welcome', component: HpeWelcomeComponent},
      {path: '', redirectTo:'welcome', pathMatch:'full'},
      {path: '**', redirectTo:'welcome', pathMatch:'full'},
    ], {useHash: false}),
    SearchModule,  
    ProductModule,
  ],
  declarations: [ 
      AppComponent, 
      Footer,
      HpeWelcomeComponent,
      TopNav
    ],
  bootstrap: [ AppComponent, Footer]
})
export class AppModule { }