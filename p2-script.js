document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById("btn");
    const videos = document.querySelectorAll(".video-opacite");
    const videoOutro = document.getElementById("video-outro");
    const videoIntro = document.querySelector(".intro");



    console.log('DOMContentLoaded');

    btn.addEventListener('touchstart', function (event) {

        //fullscreen
        fullscreen();

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

    // fullscreen
var fullscreenAvailable = true;

function fullscreen() {
    if (fullscreenAvailable) {
        var el = document.documentElement,
            rfs = el.requestFullscreen
                || el.webkitRequestFullScreen
                || el.mozRequestFullScreen
                || el.msRequestFullscreen
        ;
        rfs.call(el);
    }

    fullscreenAvailable = false;
}

});
