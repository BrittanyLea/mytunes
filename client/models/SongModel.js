// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

 /* defaults: function(){
    url: 'My URL',
    title: 'My Song Title',
    artist: 'My artist',
  },
*/

  initialize: function(){
    console.log("Song Model is initialized.");
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  }

  //anything else??

});
