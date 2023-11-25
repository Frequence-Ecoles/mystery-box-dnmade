document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById("btn");
    const videos = document.querySelectorAll(".video-opacite");
    const videoOutro = document.getElementById("video-outro");
    const videoIntro = document.querySelector(".intro");



    console.log('DOMContentLoaded');

    btn.addEventListener('touchstart', function (event) {

        event.preventDefault();
        console.log('touchstart');
        videoIntro.classList.add('flou');
        const timerId = setTimeout(lancerVideoAleatoire, 2000);
        btn.dataset.timerId = timerId;
    });

    btn.addEventListener('touchend', function () {
        clearTimeout(btn.dataset.timerId);
        videoIntro.classList.remove('flou');
    });



    function testVideoInitial() {
        for(videoAleatoire = 0;videoAleatoire = 5; videoAleatoire = videoAleatoire + 1){
        videoIntro.pause();
        videoAleatoire.play();
        videoIntro.play();
    }
    }



    function lancerVideoAleatoire() {
        stopperToutesLesVideos();
        

        const videoAleatoire = videos[Math.floor(Math.random() * videos.length)];
        videoAleatoire.style.opacity = '1';
        videoAleatoire.play();
        videoIntro.pause();
        videoAleatoire.addEventListener('ended', function () {
            videoBonus();
        });
    }

    function stopperToutesLesVideos() {
        videos.forEach(video => {
            video.pause();
            video.currentTime = 0;
            video.style.opacity = '0';
        });
    }

    function videoBonus() {
        stopperToutesLesVideos();

        videoOutro.style.opacity = '1';
        videoOutro.play();

        videoOutro.addEventListener('ended', function () {
            videoOutro.style.opacity = '0';
            videoIntro.currentTime = 0;
            videoIntro.play();
        });
    }

    let fullscreenAvailable = true;

    var elem = document.body;
    document.addEventListener('click', function() {
      if (fullscreenAvailable) {
        requestFullScreen(elem);
        fullscreenAvailable = false;
      }
    })
    
    function requestFullScreen(element) {
    
      // Supports most browsers and their versions.
      var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
    
      if (requestMethod) { // Native full screen.
        requestMethod.call(element);
      } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
          wscript.SendKeys("{F11}");
        }
      }
    }
    
    function closeFullscreen() {
    
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
    }

});
