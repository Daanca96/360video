/* global AFRAME */
AFRAME.registerComponent('dani', {
  init: function () {
    var videoEl = this.el.getAttribute('material').src;
       // const music = new Video('video.mp4');
   
   // music.play();          // Reproduce desde el inicio
    videoEl.play();

  }

});


    