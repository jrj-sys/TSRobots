var Player = /** @class */ (function () {
    function Player(message) {
        this.greeting = message;
    }
    Player.prototype.greet = function () {
        return "Hello, ".concat(this.greeting);
    };
    return Player;
}());
var greeter = new Player("world");
