import 'phaser';
import IsoPlugin from 'phaser3-plugin-isometric';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'Game',
            mapAdd: { isoPlugin: 'iso' }
        })
    }

    preload() {
        this.load.image('conv', 'assets/tile.svg',);
        this.load.scenePlugin({
            key: 'IsoPlugin',
            url: IsoPlugin,
            sceneKey: 'iso'
        })
    }

    create() {
        
        this.isoGroup = this.add.group();
        this.iso.projector.origin.setTo(0.5, -0.05);
        for(let x = 0; x < this.sys.canvas.width; x+=60){
            for(let y = 0; y < this.sys.canvas.width; y+=60){
                this.add.isoSprite(x, y, 0, 'conv', this.isoGroup);

            }
        }
        
    }
}