// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  initialize: function(){
    console.log("");
    console.log("Song Collection initialized!");
    console.log(this);
  }

});
