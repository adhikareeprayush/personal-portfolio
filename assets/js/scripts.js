
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


