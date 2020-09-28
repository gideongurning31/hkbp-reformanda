import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';
import { UtilsModule } from './utils/utils-module';
import { AdminModule } from './admin/admin.module';
import { RenunganModule } from './pages/renungan/renungan.module';
import { KegiatanModule } from './pages/kegiatan/kegiatan.module';

import { AppComponent } from './app.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BerandaComponent } from './pages/beranda/beranda.component';
import { WartaComponent } from './pages/warta/warta.component';
import { InfoComponent } from './pages/info/info.component';
import { InfoFormComponent } from './pages/info/info-form/info-form.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found-component';
import { SpinnerCloakComponent } from './utils/components/spinner-cloak/spinner-cloak.component';
import { SpinnerCloakService } from './utils/components/spinner-cloak/spinner-cloak.service';
import { AuthenticationService } from './service/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    NavbarComponent,
    BerandaComponent,
    WartaComponent,
    InfoComponent,
    InfoFormComponent,
    FooterComponent,
    NotFoundComponent,
    SpinnerCloakComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    UtilsModule,
    AdminModule,
    RenunganModule,
    KegiatanModule,
  ],
  providers: [SpinnerCloakService, AuthenticationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
