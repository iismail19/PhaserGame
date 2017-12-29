// name of game is demo
var demo = {};
var centerX = 1500 / 2;
var centerY = 1000 / 2;
var adam;
var speed = 4;
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        game.load.image('adam', 'assets/sprites/adam.png');
    },
    create: function(){
        game.stage.backgroundColor = '#800020';
        console.log('state0');
        //add event listener
        // add(listener,listenerContext, priority, args)
        // the 'listener' -> the args, are the arguemnts going into the listener
        // Event listeners are local to the state they are made in
        addChangeStateEventListeners();
        
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        // to manipulate sprite set it to a variable
        adam = game.add.sprite(centerX, centerY, 'adam');
        // centers the character
        //adam.anchor.x = 0.5;
        //adam.anchor.y = 0.5;
        // or do this in one line = 
        adam.anchor.setTo(0.5, 0.5);
        
    },
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            adam.x += speed;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            adam.x -= speed;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            adam.y -= speed;
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

