// name of game is demo
var demo = {};
var centerX = 1500 / 2;
var centerY = 1000 / 2;
var adam;
var speed = 6;
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        //game.load.image('adam', 'assets/sprites/adam.png');
        game.load.spritesheet('adam', 'assets/spritesheets/adamSheet.png', 240, 370);
        game.load.image('tree', 'assets/backgrounds/treeBG.png');
    },
    create: function(){
        // when using physics, should be first line of code
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        game.stage.backgroundColor = '#800020';
        console.log('state0');
        //add event listener
        // add(listener,listenerContext, priority, args)
        // the 'listener' -> the args, are the arguemnts going into the listener
        // Event listeners are local to the state they are made in
        addChangeStateEventListeners();
        game.world.setBounds(0, 0, 2813, 1000);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        // to manipulate sprite set it to a variable
        var treeBG = game.add.sprite(0, 0, 'tree');
        adam = game.add.sprite(centerX, centerY, 'adam');
        // centers the character
        //adam.anchor.x = 0.5;
        //adam.anchor.y = 0.5;
        // or do this in one line = 
        adam.anchor.setTo(0.5, 0.5);
        adam.scale.setTo(0.7, 0.7);
        game.physics.enable(adam);
        adam.body.collideWorldBounds = true;
        
        game.camera.follow(adam);
        game.camera.deadzone = new Phaser.Rectangle(centerX-300, 0, 600, 1000);
        adam.animations.add('walk', [0,1,2,3,4]);
          
    },
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            adam.x += speed;
            // Face right by 0.7, when negative turns face other way
            adam.scale.setTo(0.7, 0.7);
            // name of animation, frameRate, Loop = true
            adam.animations.play('walk', 14, true);
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            adam.x -= speed;
            // to make character look other way when left is pressed
            adam.scale.setTo(-0.7, 0.7);
            adam.animations.play('walk', 14, true);
        }
        else{
            adam.animations.stop('walk');
            adam.frame = 0;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            adam.y -= speed;
            if(adam.y < 395){
                adam.y = 395;
            }
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            adam.y += speed;
        }
    }
};
// the i is other information from Phaser
// this information includes duration etc... passed in as 'i'
function changeState(i, stateNum){
    game.state.start('state' + stateNum);
}

function addKeyCallback(key, fn, args){
     game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
    
}

function addChangeStateEventListeners(){
        addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
        addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
        addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
        addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
        addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
        addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
        addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
        addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
        addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
        addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
}

