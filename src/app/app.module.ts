import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PhaserModule } from 'phaser-component-library';

import { AppComponent } from './app.component';

/**
 * Application module.
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PhaserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  /**
   * Instantiate application module.
   *
   * @param appRef Application reference, needed for [HMR](../hmr.ts).
   */
  public constructor(public appRef: ApplicationRef) { }
}
