var tl = gsap.timeline();
gsap.to(".custom-music", {
  rotate: 360,
  duration: 4,
  repeat: -1,
  ease: "linear",
});
tl.from(".custom-hero", {
  y: -300,
  delaY: 0.5,
  duration: 1,
  ease: "bounce",
});
tl.from(".custom-head", {
  x: -400,
  ease: "back.out(4)",
});
tl.from(".custom-para", {
  x: 400,
  ease: "back.out(4)",
});
tl.from(".custom-price", {
  x: -400,
  ease: "back.out(4)",
});
tl.from(".custom-button", {
  x: 400,
  ease: "back.out(4)",
});
tl.from(".custom-cancel", {
  x: -400,
  ease: "back.out(4)",
});



