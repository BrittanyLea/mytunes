// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

   // this._queue = []

/*    this.model.on({
      'enqueue' : this.enqueue(),
      'dequeue' : this.remove()
    });
*/

  },

  playFirst: function(){
    this.set('currentSong', q.remove);
  },

  enqueue: function(){
    //queue.push(song); //Adds a song to the end of the queue
  },

  remove: function(){
    //queue.shift(); //Removes a song from the beginning of the queue
  }

});

