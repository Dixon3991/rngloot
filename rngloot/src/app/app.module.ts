import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundpageComponent } from './pages/notfoundpage/notfoundpage.component';
import { MenuComponent } from './pages/menu/menu.component';
import { LootdetailsComponent } from './pages/lootdetails/lootdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NotfoundpageComponent,
    MenuComponent,
    LootdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
