var game = new Phaser.Game(1200, 900, Phaser.AUTO, 'aquaplane');

game.state.add('Aquaplane.Preloader', Aquaplane.Preloader);
game.state.add('Aquaplane.MainMenu', Aquaplane.MainMenu);
game.state.add('Aquaplane.Game', Aquaplane.Game);

game.state.start('Aquaplane.Preloader');
