var animation;

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

gsap.set("#motionSVG", { scale: 1, autoAlpha: 1 });
gsap.set("#rocket", {transformOrigin: "0% 100%"});

animation = gsap.to("#rocket", {
  scrollTrigger: {
    trigger: "#motionPath",
    start: "top 50%",
    end: "bottom 50%",
    scrub: 1,
    //markers: true,
    onUpdate: self => {
      gsap.to("#rocket", {rotation: () => self.direction === 1 ? 0 : -180, overwrite: 'auto'});
    }
  },
  duration: 100,
  ease: "none",
  immediateRender: true,
  motionPath: {
    path: "#motionPath",
    align: "#motionPath",
    alignOrigin: [0.5, 0.5],
    autoRotate: 90,
  }
});