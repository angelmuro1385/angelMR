import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { AppComponent } from './app/app.component';
import { FormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';



bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  providers: [
    importProvidersFrom(FormsModule), // <-- necesario para ngModel
    provideHttpClient()
  ]