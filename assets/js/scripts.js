
var intro = document.querySelector(".intro");

var typewriter = new Typewriter(intro, {
    loop: true
});

typewriter.typeString('Web Developer')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Ui/Ux Designer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Graphic Designer')
    .pauseFor(2500)
    .start();

// Move to top button
topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//displaying the button when scrolling down
window.onscroll = () => {
    scrollFunction();
}

scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

//tilt the section id project when srolling
VanillaTilt.init(document.querySelectorAll(".project"), {
    max: 25,
    speed: 300
});


//use the scrollReveal library to animate the sections
ScrollReveal().reveal('.project', {
    delay: 500,
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    interval: 200
});




