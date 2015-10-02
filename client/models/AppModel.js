// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    //When a song is clicked in the library, add the clicked song to the queue
    params.library.on('enqueue', function(song){
      this.get('songQueue').add(song);
      console.log(this.get('songQueue'));
    }, this);

   /* this.songQueue.on('dequeue', function(){
       console.log("here");
    }); //now create event listener on songqueue*/

 /*   //When a song is over, dequeue it from the queue and set current song to the next song.
    params.queue.on('onended', function(song){
      this.dequeue('songQueue');
      this.set('currentSong', song);
    }, this);

    //when the queue is play, then set current song
    params.queue.on('play', function(song){
      this.add('currentSong', song);
    }, this);*/



  }

});
