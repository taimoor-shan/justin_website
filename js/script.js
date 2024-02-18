
const words = ['Hello', "Nelson", 'Taimoor', 'Here']
gsap.to('#cursor', {opacity:0, repeat:-1, yoyo:true, duration:0.5, ease:"power2.inOut"});

let tlMaster = gsap.timeline({repeat:-1});
words.forEach((word)=>{
    let tlText = gsap.timeline({repeat: 1, yoyo:true});
    tlText.to('#animatedText', {duration:1,text:word});
    tlMaster.add(tlText)
})

gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll(".reveal-type");

splitTypes.forEach((char, i) => {
  const bg = "rgba(255,255,255, 0.5)";
  const fg = "#ffffff";

  const text = new SplitType(char, { types: "chars" });

  gsap.fromTo(
    text.chars,
    {
      color: bg
    },
    {
      color: fg,
      duration: 0.3,
      stagger: 0.2,
      opacity: 1,
      scrollTrigger: {
        trigger: char,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
        toggleActions: "play play reverse reverse"
      }
    }
  );
});

gsap.utils.toArray(".wrap").forEach(section => {
    gsap.fromTo(section, {
        opacity: 0.1 // Starting opacity
    }, {
        scrollTrigger: {
            trigger: section,
            scrub: true,
            start: "top 50%"
        },
        opacity: 1 // Ending opacity
    });
});

