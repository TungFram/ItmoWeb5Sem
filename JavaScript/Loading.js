// import 'animejs/lib/anime.min.js';


const wrapperEl = document.querySelector('.wrapper');
wrapperEl.remove();
const numberOfEls = 120;
const duration = 6000;
const delay = duration / numberOfEls;


let tl = anime.timeline({
    duration: delay,
    complete: function() { tl.restart(); }
});

function createEl(i) {
    let el = document.createElement('div');
    const rotate = (360 / numberOfEls) * i;
    const translateY = -50;
    const hue = Math.round(360 / numberOfEls * i);
    el.classList.add('el');
    el.style.backgroundColor = 'hsl(' + hue + ', 100%, 100%)';
    el.style.transform = 'rotate(' + rotate + 'deg) translateY(' + translateY + '%)';
    tl.add({
        begin: function() {
            anime({
                targets: el,
                backgroundColor: ['hsl(' + hue + ', 60%, 60%)', 'hsl(' + hue + ', 80%, 90%)'],
                rotate: [rotate + 'deg', rotate + 10 +'deg'],
                translateY: [translateY + '%', translateY + 10 + '%'],
                scale: [1.2, 1.6],
                easing: 'easeInOutSine',
                direction: 'alternate',
                duration: duration * .13
            });
        }
    });
    wrapperEl.appendChild(el);
}


for (let i = 0; i < numberOfEls; i++) createEl(i);
