import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { KegiatanModule } from './pages/kegiatan/kegiatan.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BerandaComponent } from './pages/beranda/beranda.component';
import { RenunganComponent } from './pages/renungan/renungan.component';
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
    RenunganComponent,
    ArtikelComponent,
    WartaComponent,

    InfoComponent,
    InfoFormComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    KegiatanModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
