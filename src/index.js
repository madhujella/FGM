import 'phaser';
import 'phaser3-plugin-isometric';
import GameScene from './scenes/game';
import config from './config/config';

class Game extends Phaser.Game {
    constructor() {
        super(config);
        this.scene.add('Game', GameScene);
        this.scene.start('Game');
        
    }
}


window.game = new Game();
