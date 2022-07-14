gsap.registerPlugin(ScrollTrigger);

// gsap.from("#logo", {duration: 1, y: '-150%', ease: 'bounce', opacity: 0});
// gsap.from(".fab", {duration: 1, y: -100, opacity: 0, delay: 1.5});

//Start a timeline

const timeline = gsap.timeline({defaults: {duration: 1}});
timeline
    .from("#logo", {duration: 1, y: '-150%', ease: 'bounce', opacity: 0})
    .from(".intro", {duration: 1, x: '-100%', y: '-100%', opacity: 0 })
    .from(".html5", {duration: 1, y: '-100%', opacity: 0})
    .from(".css3", {duration: 1, y: '-100%', opacity: 0})
    .from(".jScript", {duration: 1, y: '-100%', opacity: 0})




    
    // click div to do and reverse animation
// console.clear();
// let targets = gsap.utils.toArray("#logo");

// targets.forEach((obj) => {
//   obj.anim = gsap.to(obj, { height: 200 }).reversed(true);
//   obj.addEventListener("click", doCoolStuff);
// });

// function doCoolStuff() {
//   this.anim.reversed(!this.anim.reversed());
// }