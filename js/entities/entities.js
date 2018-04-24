/**
 * Player Entity
 */
game.PlayerEntity = me.Entity.extend({
  /**
   * constructor
   */
  init: function(x, y, settings) {
    // call the constructor
    this._super(me.Entity, "init", [x, y, settings])

    // set the default horizontal & vertical speed (accel vector)
    this.body.setVelocity(1, 1)

    // define a basic walking animation (using all frames)
    this.renderable.addAnimation("leftWalk", [3, 4])
    this.renderable.addAnimation("rightWalk", [1, 2])
    this.renderable.addAnimation("upWalk", [8, 9, 8, 10])
    this.renderable.addAnimation("downWalk", [5, 6, 5, 7])

    // define a standing animation (using the first frame)
    this.renderable.addAnimation("stand", [5])
    this.renderable.addAnimation("standLeft", [3])
    this.renderable.addAnimation("standRight", [1])
    this.renderable.addAnimation("standUp", [8])

    // set the standing animation as default
    this.renderable.setCurrentAnimation("stand")
  },

  /**
   * update the entity
   */
  update: function(dt) {
    if (me.input.isKeyPressed("left")) {
      // update the entity velocity
      this.body.vel.x -= this.body.accel.x * me.timer.tick

      // change to the walking animation
      if (!this.renderable.isCurrentAnimation("leftWalk")) {
        this.renderable.setCurrentAnimation("leftWalk")
      }
    } else if (me.input.isKeyPressed("right")) {
      // update the entity velocity
      this.body.vel.x += this.body.accel.x * me.timer.tick

      // change to the walking animation
      if (!this.renderable.isCurrentAnimation("rightWalk")) {
        this.renderable.setCurrentAnimation("rightWalk")
      }
    } else if (me.input.isKeyPressed("up")) {
      // update the entity velocity
      this.body.vel.y -= this.body.accel.y * me.timer.tick

      // change to the walking animation
      if (!this.renderable.isCurrentAnimation("upWalk")) {
        this.renderable.setCurrentAnimation("upWalk")
      }
    } else if (me.input.isKeyPressed("down")) {
      // update the entity velocity
      this.body.vel.y += this.body.accel.y * me.timer.tick

      // change to the walking animation
      if (!this.renderable.isCurrentAnimation("downWalk")) {
        this.renderable.setCurrentAnimation("downWalk")
      }
    } else {
      this.body.vel.x = 0
      this.body.vel.y = -1

      // change to the standing animation
      // this.renderable.setCurrentAnimation("stand")
    }

    // apply physics to the body (this moves the entity)
    this.body.update(dt)

    // handle collisions against other shapes
    me.collision.check(this)

    // return true if we moved or if the renderable was updated
    return (
      this._super(me.Entity, "update", [dt]) ||
      this.body.vel.x !== 0 ||
      this.body.vel.y !== 0
    )
  },

  /**
   * colision handler
   * (called when colliding with other objects)
   */
  onCollision: function(response, other) {
    // Make all other objects solid
    return true
  },
})
