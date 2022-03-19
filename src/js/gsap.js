window.onload = function() {document.body.scrollTop = document.documentElement.scrollTop = 0;};

console.log('work')


let fade = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro",
        start: "center center",
        end: "+=10vh center",
        scrub: true,
        markers: false
    }
});

fade.to(".indicator", {
    opacity: '0', ease: Power0.linear, duration: 1
})


let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro",
        start: "center center",
        end: "2500vh center",
        scrub: true,
        markers: false
    }
});

tl.to(".hero", {
   fontSize:'64px', ease: Power0.linear, duration: 1
})
tl.to(".giro", {
    display: 'flex', ease: Power0.linear, duration: 1
})

let fadeOut = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro",
        start: "2000vh center",
        end: "2000vh center",
        scrub: true,
        markers: true
    }
});



fadeOut.to(".hero", {
    opacity: "0", ease: Power1.easeInOut, duration: 1
})

let fadeIn = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro",
        start: "2100vh center",
        end: "2100vh center",
        scrub: true,
        markers: true
    }
});


fadeIn.to("#three", {
    opacity: "1", ease: Power1.easeInOut, duration: 1
})

fadeIn.to(".text", {
    opacity: "1", ease: Power0.linear, duration: 2
})

fadeIn.to(".cta", {
    opacity: "1", ease: Power0.linear, duration: 2
})





