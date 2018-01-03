// The JavaScript prototype property also allows you to add new methods to an existing prototype:

demo.state1 = function(){};

var cursors;
var vel = 500;
var rocks;
var grass;

demo.state1.prototype = {
    preload: function(){
        // arguments (key, path, null, Phaser.TILED_JASON)
        // Phaser.TILED_JASON telling phaser it is a CSV file
        // the null is a json object you can pass to it currently not important
        game.load.tilemap('field', 'assets/tilemaps/field.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('grassTiles', 'assets/tilemaps/grassTiles.png');
        game.load.image('rockTiles', 'assets/tilemaps/rockTiles.png');
        game.load.image('adam', 'assets/sprites/adam.png');
        
    },
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        addChangeStateEventListeners();
        
        var map = game.add.tilemap('field');
        map.addTilesetImage('grassTiles');
        map.addTilesetImage('rockTiles');
        // order matters, grass layer then the rock layer
        grass = map.createLayer('grass');
        rocks = map.createLayer('rocks');
        
        // look at Json and find collision numbers
        // 1 - 9 and set true, then name = 'rocks'
        map.setCollisionBetween(1, 9, true, 'rocks');
        map.setCollision(11, true, 'grass');
        
        adam = game.add.sprite(200, 200, 'adam');
        adam.scale.setTo(0.2, 0.2);
        game.physics.enable(adam);
        
        // this creates the left, right, up, down keys
        cursors = game.input.keyboard.createCursorKeys();
        
    },
    update: function(){
        // last arguemnt is option callback function
        game.physics.arcade.collide(adam, rocks, function(){console.log('hitting rocks');});
        game.physics.arcade.collide(adam, grass, function(){console.log('hitting grass');});
        // velocity makes character move
        // we need an else to make them stop
        
        // we used velocity becasue it lets us collide with map
        if(cursors.up.isDown){
            adam.body.velocity.y = -vel;
        }
        else if(cursors.down.isDown){
            adam.body.velocity.y = vel;
        }
        else{
            adam.body.velocity.y = 0;
        }
        if(cursors.left.isDown){
            adam.body.velocity.x = -vel;
        }
        else if(cursors.right.isDown){
            adam.body.velocity.x = vel;
        }
        else{
            adam.body.velocity.x = 0;
        }
    }
};