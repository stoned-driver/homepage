window.addEventListener('DOMContentLoaded', (event) => {
    const jsConfetti = new JSConfetti()
    const tl = gsap.timeline();
    const intFrameWidth = window.innerWidth;
    const resume = document.querySelector('.resume')
    const { width } = resume.getBoundingClientRect()
    const margin = (intFrameWidth - width) / 2
    const marginFix = margin < 0 ? 0 : margin


    gsap.to(".resume", {marginLeft:  marginFix + 100, duration: 2, onComplete: () => {
            gsap.to(".resume", {marginLeft: marginFix, duration: 1, ease: "elastic", onComplete: async() => {

                   await jsConfetti.addConfetti({emojis: ['🌈', '🦄️', '💥', '💫', '🌸']})
                    tl
                        .to(".contact-info__avatar", {scale: 1.4})
                        .to(".contact-info__avatar", {scale: 1})
            }
            })
        }} )
});
