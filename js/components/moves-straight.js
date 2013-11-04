define(["crafty"], function(Crafty) {
    Crafty.c("MovesStraight", {
        _targetVector: null,
        _speed: 0,

        init: function() {
            this.requires("2D")
                .bind("EnterFrame", this._move);
        },
        
        movesStraight: function(targetX, targetY, speed) {
            var xLine = targetX - this.x;
            this._targetVector = new Crafty.math.Vector2D(targetX - this.x, targetY - this.y).normalize();
            this._speed = speed;
            
            return this;
        },

        _move: function() {
            this.shift(this._targetVector.x * this._speed, this._targetVector.y * this._speed);
        }
    });
});