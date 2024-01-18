import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CameraComponent } from './camera/camera.component';
import { ScreenreaderComponent } from './screenreader/screenreader.component';


@NgModule({
  declarations: [AppComponent, LoginComponent,RegisterComponent,DashboardComponent,CameraComponent,ScreenreaderComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
