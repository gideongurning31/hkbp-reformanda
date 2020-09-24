import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RenunganModule } from './pages/renungan/renungan.module';
import { KegiatanModule } from './pages/kegiatan/kegiatan.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BerandaComponent } from './pages/beranda/beranda.component';
import { ArtikelComponent } from './pages/artikel/artikel.component';
import { WartaComponent } from './pages/warta/warta.component';
import { InfoComponent } from './pages/info/info.component';
import { InfoFormComponent } from './pages/info/info-form/info-form.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BerandaComponent,
    ArtikelComponent,
    WartaComponent,
    InfoComponent,
    InfoFormComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    RenunganModule,
    KegiatanModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
