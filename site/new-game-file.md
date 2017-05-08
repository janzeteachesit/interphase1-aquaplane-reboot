# Step \# New game.js file
1. rename "game.js" to "aquaplane.js"
2. create new 'game.js' file with the following contents:
   ```
   var game = new Phaser.Game(640, 480, Phaser.AUTO, 'Aquaplane');
   game.state.add('aquaplane', aquaplane.js);
   ```
3. edit "index.html" to add in the header, after the linw with "game.js" the line:
   ```
       <script type="text/javascript" src="js/aquaplane.js"></script>
   ```


