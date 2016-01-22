var Preload = function(game){};

Preload.prototype = {

	preload: function(){ 
	    this.game.load.image("spikes", "assets/Spikes.png");
        this.game.load.physics("spikes_physics", "assets/spikes.json");
        this.game.load.image("playerSprite","assets/playerSpriteTwo.png");
        this.game.load.image("tileset", "assets/tilesetMkI.png");
        this.game.load.tilemap("tilemap", "assets/testMapTwo.json", null, Phaser.Tilemap.TILED_JSON);
},

	create: function(){
		this.game.state.start("Main");
	}
}