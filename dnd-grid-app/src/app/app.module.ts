import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { LayoutGridComponent } from './layout-grid/layout-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    LayoutGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
