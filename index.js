import { gsap, Power2, Power4 } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();

gsap.registerPlugin(ScrollTrigger);
const homepageAnimation = () => {
    gsap.set(".slidesm", {
        scale: 5
    })

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2,
            // markers : true
        },
    })
    tl.to(".vdodiv", {
        "--clip": "0%",
        ease: Power2,
    }, "a")
        .to(".slidesm", {
            scale: 1,
            ease: Power2,
        }, "a")
        .to(".slide-lft", {
            xPercent: -6,
            ease: Power4,
            stagger: .03
        }, 'b')
        .to(".slide-rgt", {
            xPercent: 6,
            ease: Power4,
            stagger: .3
        }, 'b')
}

const teamAnimation = () => {
    document.querySelectorAll(".listitem").forEach((ele, idx) => {
        ele.addEventListener('mousemove', function (dets) {

            gsap.to(this.querySelector('.picture'), {
                opacity: 1,
                x: gsap.utils.mapRange(0, window.innerWidth, -150, 150, dets.clientX),
                duration: 0.5
            })
            gsap.to(this.querySelector('.blueback'),{
                height:100,
                ease : Power2
            })
        })
        ele.addEventListener('mouseover', function (dets) {

            gsap.to(this.querySelector('.picture'), {
                opacity: 1,
                x: gsap.utils.mapRange(0, window.innerWidth, -150, 150, dets.clientX),
                duration: 0.5
            })
            gsap.to(this.querySelector('.blueback'),{
                height:100,
                ease : Power2
            })
        })
        ele.addEventListener('mouseleave', function (dets) {
            gsap.to(this.querySelector('.picture'), {
                opacity: 0,
                duration: 0.5
            })
            gsap.to(this.querySelector('.blueback'),{
                height:0,
                ease : Power2
            })
        })
    })
}

const slideAnimation = ()=>{
    gsap.to(".slide",
        {
            scrollTrigger: {
                trigger : ".real",
                start: "top top",
                end: "bottom bottom",
                scrub: 2,
                markers : false,
            },
            xPercent: -200
        }
    )
}

const reviewAnimation = ()=>{
    let clutter = '';
    document.querySelector(".textpara").innerText.split("").forEach(el => {
        if(el === " ") clutter += '<span>&nbsp;</span>'
        else clutter += `<span>${el}</span>`
    });
    
    document.querySelector(".textpara").innerHTML = clutter;
    gsap.to(".textpara span", {
        scrollTrigger : {
            trigger : ".review",
            start : "top 60%",
            end:  "bottom bottom",
            scrub : 2,
            markers : false,
            
        },
        opacity: 1,
        stagger: 0.3,
        ease : Power4
    })

}

const capsuleAnimation = ()=>{
    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger : {
            trigger : ".capsules",
            start : "top 70%",
            end : "bottom bottom",
            scrub : 1,
            markers : false,
        },
        y : 0,
        ease : Power4
    })
    
}

document.querySelectorAll(".section").forEach((e)=>{
    ScrollTrigger.create({
        trigger : e,
        start : "top 40%",
        end : "bottom bottom",
        scrub : 1,
        markers : false,
        onEnter : function(){
            document.body.setAttribute("theme", e.dataset.theme);
        },
        onEnterBack : function(){
            document.body.setAttribute("theme", e.dataset.theme);
        }
    })
})


homepageAnimation();
teamAnimation();
slideAnimation();
reviewAnimation();
capsuleAnimation();