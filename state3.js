demo.state3 = function(){};
demo.state3.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#4dff4d';
        console.log('state3');
        addChangeStateEventListeners();
    },
    update: function(){}
};