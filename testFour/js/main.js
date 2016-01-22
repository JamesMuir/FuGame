var Main = function(game) {

};

Main.prototype = {

	create: function() {
        // Sets background color
        this.game.stage.backgroundColor = "#333333";
        
        // Sets up using the p2 physics engine
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        
        // Sets the gravity 
        this.game.physics.p2.gravity.y = 1000;
        
        // Creates collision groups 
        // TODO: Figure out what and how exactly this works
        this.playerCollisionGroup = this.game.physics.p2.createCollisionGroup();
	},

	update: function() {
	  
	},
	    
};