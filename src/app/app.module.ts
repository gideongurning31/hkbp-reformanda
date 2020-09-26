import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { UtilsModule } from './utils/utils-module';
import { AdminModule } from './admin/admin.module';
import { RenunganModule } from './pages/renungan/renungan.module';
import { KegiatanModule } from './pages/kegiatan/kegiatan.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BerandaComponent } from './pages/beranda/beranda.component';
import { WartaComponent } from './pages/warta/warta.component';
import { InfoComponent } from './pages/info/info.component';
import { InfoFormComponent } from './pages/info/info-form/info-form.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found-component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BerandaComponent,
    WartaComponent,
    InfoComponent,
    InfoFormComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    UtilsModule,
    AdminModule,
    RenunganModule,
    KegiatanModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
