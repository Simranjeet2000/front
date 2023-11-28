import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HttpClientModule } from '@angular/common/http';
import { ToastComponent } from './toast/toast.component';
import { NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    DashboardComponent,
    CalendarComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FullCalendarModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
