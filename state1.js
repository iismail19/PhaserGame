// name of game is demo
// The JavaScript prototype property also allows you to add new methods to an existing prototype:

var demo = {};
demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        console.log('state1');
    },
    update: function(){}
};