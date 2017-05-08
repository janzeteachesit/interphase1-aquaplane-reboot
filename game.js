var game = new Phaser.Game(800, 600);

game.state.add('Aquaplane', Aquaplane.js);

game.state.start('Aquaplane');
