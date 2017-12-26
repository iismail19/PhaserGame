// name of game is demo
var demo = {};
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#4dff4d';
        console.log('state0');
        //add event listener
        // add(listener,listenerContext, priority, args)
        // the 'listener' -> the args, are the arguemnts going into the listener
        // Event listeners are local to the state they are made in
        addChangeStateEventListeners();

    },
    update: function(){}
};
// the i is other information from Phaser
// this information includes duration etc... passed in as 'i'
function changeState(i, stateNum){
    console.log(i);
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

