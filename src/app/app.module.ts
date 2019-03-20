import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { StorageServiceModule } from 'angular-webstorage-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieExploreComponent } from './movies/movie-explore/movie-explore.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { ApiKeyInterceptor } from './common/api-key-interceptor';
import { MovieCardComponent } from './movies/movie-card/movie-card.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuard } from './common/auth-guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    MovieExploreComponent,
    MovieDetailComponent,
    MovieCardComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StorageServiceModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiKeyInterceptor,
    multi: true
  },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
