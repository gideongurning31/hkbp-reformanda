import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BerandaComponent } from './pages/beranda/beranda.component';
import { RenunganComponent } from './pages/renungan/renungan.component';
import { WartaComponent } from './pages/warta/warta.component';
import { KegiatanComponent } from './pages/kegiatan/kegiatan.component';
import { InfoComponent } from './pages/info/info.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BerandaComponent,
    RenunganComponent,
    WartaComponent,
    KegiatanComponent,
    InfoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
