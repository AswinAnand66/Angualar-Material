import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { ButtonComponent } from './button/button.component'
import { ButtonModule } from './button/button.module';
import { MaterialModule } from './material/material.module';
import { TypographyModule } from './typography/typography.module';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { IconsModule } from './icons/icons.module';
import { BadgesComponent } from './badges/badges.component';
import { BadgesModule } from './badges/badges.module';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerModule } from './spinner/spinner.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TypographyComponent,
    IconsComponent,
    BadgesComponent,
    SpinnerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ButtonModule,
    TypographyModule,
    MaterialModule,
    IconsModule,
    BadgesModule,
    SpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
