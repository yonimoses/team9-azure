import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// layouts
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';

// admin views
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { MapsComponent } from './views/admin/maps/maps.component';
import { SettingsComponent } from './views/admin/settings/settings.component';
import { TablesComponent } from './views/admin/tables/tables.component';

// auth views
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';

// no layouts views
import { IndexComponent } from './views/index/index.component';
import { LandingComponent } from './views/landing/landing.component';
import { ProfileComponent } from './views/profile/profile.component';

// components for views and layouts

import { AdminNavbarComponent } from './components/navbars/admin-navbar/admin-navbar.component';
import { AuthNavbarComponent } from './components/navbars/auth-navbar/auth-navbar.component';
import { CardBarChartComponent } from './components/cards/card-bar-chart/card-bar-chart.component';
import { CardLineChartComponent } from './components/cards/card-line-chart/card-line-chart.component';
import { CardPageVisitsComponent } from './components/cards/card-page-visits/card-page-visits.component';
import { CardProfileComponent } from './components/cards/card-profile/card-profile.component';
import { CardSettingsComponent } from './components/cards/card-settings/card-settings.component';
import { CardSocialTrafficComponent } from './components/cards/card-social-traffic/card-social-traffic.component';
import { CardStatsComponent } from './components/cards/card-stats/card-stats.component';
import { CardTableComponent } from './components/cards/card-table/card-table.component';
import { FooterAdminComponent } from './components/footers/footer-admin/footer-admin.component';
import { FooterComponent } from './components/footers/footer/footer.component';
import { FooterSmallComponent } from './components/footers/footer-small/footer-small.component';
import { HeaderStatsComponent } from './components/headers/header-stats/header-stats.component';
import { IndexNavbarComponent } from './components/navbars/index-navbar/index-navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxSpinnerModule} from 'ngx-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SelectDropDownModule} from 'ngx-select-dropdown';
import {CardWelcomeComponent} from './components/cards/card-stats/card-welcome.component';
import {CardNotFoundComponent} from './components/cards/card-stats/card-not-found.component';
import {FormatNumberPipe} from './components/cards/card-stats/format.number.pipe';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [
    FormatNumberPipe,
    AppComponent,
    DashboardComponent,
    CardBarChartComponent,
    CardLineChartComponent,
    SidebarComponent,
    FooterComponent,
    FooterSmallComponent,
    FooterAdminComponent,
    CardPageVisitsComponent,
    CardProfileComponent,
    CardSettingsComponent,
    CardSocialTrafficComponent,
    CardNotFoundComponent,
    CardStatsComponent,
    CardWelcomeComponent,
    CardTableComponent,
    HeaderStatsComponent,
    AuthNavbarComponent,
    AdminNavbarComponent,
    IndexNavbarComponent,
    AdminComponent,
    AuthComponent,
    MapsComponent,
    SettingsComponent,
    TablesComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    LandingComponent,
    ProfileComponent,
  ],
    imports: [
      SelectDropDownModule,BrowserModule,NgxSpinnerModule,BrowserAnimationsModule
      ,HttpClientModule, AppRoutingModule, FormsModule, NgSelectModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
