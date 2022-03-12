// import { Engine, Loader, DisplayMode } from 'excalibur'
// import { LevelOne } from './scenes/level-one/level-one'
// import { Player } from './actors/player/player'
// import { Resources } from './resources'
// import { NPC } from './actors/npc/npc'
// import { TiledResource } from '@excaliburjs/excalibur-tiled'

// /**
//  * Managed game class
// //  */
// class Game extends Engine {

//     private player: Player;
//     private npc: NPC;

//     private levelOne: LevelOne;

//     constructor() {
//         super({ displayMode: DisplayMode.FillScreen });
//     }

//     public start() {

//         // Create new scene with a player
//         this.levelOne = new LevelOne();
//         this.player = new Player();
//         this.npc = new NPC()
//         this.levelOne.add(this.player);
//         this.levelOne.add(this.npc)

//         game.add('levelOne', this.levelOne);

//         const loader = new Loader(Object.values(Resources));

//         return super.start(loader);
//     }
// }

// const game = new Game();
// game.start().then(() => {
//     game.goToScene('levelOne');
    
// });

import { Actor, CollisionType, Color, Engine, vec } from "excalibur"

const game = new Engine({
    width: 800,
    height: 600
})

const paddle = new Actor({
    x: 150,
    y: game.drawHeight - 40,
    width: 200,
    height: 20,
    // Let's give it some color with one of the predefined
    // color constants
    color: Color.Chartreuse,
  });

paddle.body.collisionType = CollisionType.Fixed;

game.input.pointers.primary.on("move", (evt) => {
    paddle.pos.x = evt.worldPos.x;
  });

// Create a ball at pos (100, 300) to start
const ball = new Actor({
    x: 100,
    y: 300,
    // Use a circle collider with radius 10
    radius: 10,
    // Set the color
    color: Color.Red,
  });
  
  // Start the serve after a second
  setTimeout(() => {
    // Set the velocity in pixels per second
    ball.vel = vec(100, 100);
  }, 1000);

// Wire up to the postupdate event
ball.on("postupdate", () => {
    // If the ball collides with the left side
    // of the screen reverse the x velocity
    if (ball.pos.x < ball.width / 2) {
      ball.vel.x *= -1;
    }
  
    // If the ball collides with the right side
    // of the screen reverse the x velocity
    if (ball.pos.x + ball.width / 2 > game.drawWidth) {
      ball.vel.x *= -1;
    }
  
    // If the ball collides with the top
    // of the screen reverse the y velocity
    if (ball.pos.y < ball.height / 2) {
      ball.vel.y *= -1;
    }
  });

ball.body.collisionType = CollisionType.Passive

game.add(paddle)
game.add(ball)

game.start()