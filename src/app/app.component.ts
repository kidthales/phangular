import { Component } from '@angular/core';

import { environment } from '../environments/environment';

/**
 * Application component.
 */
@Component({
  selector: 'app-root',
  template: `<phaser-component [gameConfig]="gameConfig" (gameReady)="onGameReady($event)"></phaser-component>`
})
export class AppComponent {
  /**
   * Game instance.
   */
  public game: Phaser.Game;

  /**
   * Game configuration.
   */
  public readonly gameConfig: GameConfig = {
    title: environment.title,
    version: environment.version,
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: {
      create: function () {
        this.cameras.main.startFollow(this.add.text(0, 0, 'Just what do you think you\'re doing, Dave?').setOrigin(0.5), false);
      }
    }
  };

  /**
   * Instantiate application component.
   */
  public constructor() { }

  /**
   * Game ready event handler.
   *
   * @param game Game instance.
   */
  public onGameReady(game: Phaser.Game): void {
    this.game = game;
  }
}
