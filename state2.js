demo.state2 = function(){};
var barrel;
var bullets;
var velocity = 1000;
var nextFire = 0;
var fireRate = 200;
var enemy;
var bullet;
var enemyGroup;
demo.state2.prototype = {
    preload: function(){
        game.load.image('base', 'assets/sprites/cannonBase.png');
        game.load.image('barrel', 'assets/sprites/cannonBarrel.png');
        game.load.image('bullet', 'assets/sprites/bullet.png');
    },
    create: function(){
        game.stage.backgroundColor = '#80ff80';
        addChangeStateEventListeners();
        
        var base = game.add.sprite(centerX, centerY, 'base');
        base.anchor.setTo(0.5);
        base.scale.setTo(0.4);
        
        
        bullets = game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(50, 'bullet');
        // check if bullet is in bounds
        bullets.setAll('checkWorldBounds', true);
        // once bullet is out of bounds it is dead, and recycled
        bullets.setAll('outOfBoundsKill', true);
        bullets.setAll('anchor.y', 0.5);
        bullets.setAll('scale.x', 0.85);
        bullets.setAll('scale.y', 0.85);
        barrel = game.add.sprite(centerX, centerY, 'barrel');
        barrel.scale.setTo(0.5);
        barrel.anchor.setTo(0.3, 0.5);
        
        enemy = game.add.sprite(100, 200, 'adam');
        game.physics.enable(enemy);
        
        enemyGroup = game.add.group();
        // this will enable the enemyGroup to use physcis
        enemyGroup.enableBody = true;
        enemyGroup.physicsBodyType = Phaser.Physics.ARCADE;
        
        // use a for loop to create an enemy
        for(var i = 0; i < 3; i++){
            // x, y, picture
            enemyGroup.create(1300, 350 * i + 100, 'adam');
        }
        
        enemyGroup.setAll('anchor.y', 0.5);
        enemyGroup.setAll('anchor.x', 0.5);
        enemyGroup.setAll('scale.x', 0.5);
        enemyGroup.setAll('scale.y', 0.5);
        
    },
    update: function(){
        barrel.rotation = game.physics.arcade.angleToPointer(barrel);
        
        if(game.input.activePointer.isDown){
            this.fire();
        }
        
        game.physics.arcade.overlap(bullets, enemy, this.hitEnemy);
        
        game.physics.arcade.overlap(bullets, enemyGroup, this.hitGroup);
    },
    fire: function(){
        if(game.time.now > nextFire){
            
            nextFire = game.time.now + fireRate;
            console.log('firing');
            bullet = bullets.getFirstDead();
            bullet.reset(barrel.x, barrel.y);

            game.physics.arcade.moveToPointer(bullet, velocity);

            bullet.rotation = game.physics.arcade.angleToPointer(bullet);
           }

    },
    hitEnemy: function(){
        console.log('hit');
        enemy.kill();
        bullet.kill();
    },
    // since this is a group we must specify what we want to kill
    // use b for bullet, e for enemy
    hitGroup: function(b, e){
        b.kill();
        e.kill();
    }
};