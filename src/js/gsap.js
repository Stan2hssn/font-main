import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro",
        start: "center center",
        end: "300px center",
        scrub: true,
        markers: false
    }
});

tl.to(".intro", {
    fontSize: '200vw', ease: Power0.linear, duration: 1
})