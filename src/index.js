import Phaser from "phaser"

function main() {
    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 900,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: {y: 0}
            }
        },
        scene: {preload, create, update}
    };

    new Phaser.Game(config);
}

function preload() {
    console.log('preload')
}

function create() {
    console.log('create')
}

function update() {
    console.log('update')
}


main();