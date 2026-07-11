// fly tracks cursor
$(document).mousemove(function (e) {

  $("#cursor-fly").stop().animate({ left: e.pageX, top: e.pageY });
  
  $("#cursor-fly").stop().animate({ right: e.pageX}).css("transform", "scaleX(-1)");$(document).mousemove(function (e) {
  const $fly = $("#cursor-fly");
  const direction = e.pageX < $fly.offset().left + $fly.width() / 2 ? -1 : 1;

  $fly.css("transform", `scaleX(${direction})`);
  $fly.stop().animate({
    left: e.pageX - $fly.width() / 2,
    top: e.pageY - $fly.height() / 2
  }, 80);
});
});


// play buzzing sound
 function playBuzz() {
   document.getElementById("buzz").play();
  }

  function stopBuzz() {
     document.getElementById("buzz").pause();
  }

// bible verses 
const verses = [
    // Leviticus 18:22
    "You shall not lie with a <i>male as with a woman;</i> it is an abomination <br> Leviticus 18:22",
    // Leviticus 20:13
    "If a man has <i>sexual relations with a man</i> as one does with a woman, both of them have done what is detestable. They are to be put to death; their blood will be on their own heads. <br> Leviticus 20:13",
    // Romans 1:26-27
    "Because of this, God gave them over to shameful lusts. Even their women exchanged natural sexual relations for <i>unnatural</i> ones. In the same way the men also abandoned natural relations with women and were inflamed with lust for one another. Men committed <i>shameful acts with other men</i>, and received in themselves the due penalty for their error. <br> Romans 1:26-27",
    // Corinthians 6:9-10
    "Or do you not know that the unrighteous will not inherit the kingdom of God? Do not be deceived: neither the <i>sexually immoral</i>, nor idolaters, nor adulterers, nor men who practice <i>homosexuality</i>, nor thieves, nor the greedy, nor drunkards, nor revilers, nor swindlers will inherit the kingdom of God. <br> Corinthians 6:9-10",
    // Timothy 1:9-10
    "For example, a person must realize that those laws are not intended for people who have God’s approval. Laws are intended for lawbreakers and rebels, for ungodly people and sinners, for those who think nothing is holy or sacred, for those who kill their fathers, their mothers, or other people. Laws are intended for people involved in sexual sins, for <i>homosexuals</i>, for kidnappers, for liars, for those who lie when they take an oath, and for whatever else is against accurate teachings. <br> Timothy 1:9-10",
    // Jude 1:7
    "What happened to Sodom and Gomorrah and the cities near them is an example for us of the punishment of eternal fire. The people of these cities suffered the same fate that God’s people and the angels did, because they committed sexual sins and engaged in <i>homosexual</i> activities. <br> Jude 1:7"
]

function randomVerse() {
    const random = Math.floor(Math.random() * verses.length);
    document.getElementById("bible-verse").innerHTML = verses[random];
}


// testomonial carousel 
document.addEventListener("DOMContentLoaded", () => {
const carouselItems = document.querySelectorAll(".testimonial");
let i = 1; // select all testimonial divs


setInterval(() => { // timer
    Array.from(carouselItems).forEach((item,index) => {
        if (i < carouselItems.length) {
            item.style.transform = `translateX(-${i*100}%)`
        } // move carousel item 100% to the left if i < the number of remaining carousel items
    })
    if (i < carouselItems.length) {
        i++;
    } else {
        i = 0;
    }
}, 8000)
})


function toggleNav() {
    const mobileNav = document.getElementById("mobile-nav");

    if (!mobileNav) return;

    mobileNav.classList.toggle("is-open")

    if (mobileNav.classList.contains("is-open")) {
        mobileNav.ariaHidden = "false"; mobileNav.ariaExpanded = "true"
    } else {
        mobileNav.ariaHidden = "true"; mobileNav.ariaExpanded = "false"
    }
}