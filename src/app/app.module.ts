import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivaComponent } from './components/directiva/directiva.component';
import { DirectivaPersonalizadaDirective } from './directives/directiva-personalizada.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivaComponent,
    DirectivaPersonalizadaDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
