const counter = document.getElementById('counter')
const pause = document.getElementById('pause')
const body = document.querySelector('body')
counter.innerText = 0
const counterInterval = setInterval(() => { counter.innerText++ }, 1000)

const minus = document.getElementById('minus')
minus.addEventListener('click', handleMinus)
function handleMinus() {
    counter.innerText--
}
const plus = document.getElementById('plus')
plus.addEventListener('click', handlePlus
)
function handlePlus() {
    counter.innerText++
}

const heart = document.getElementById('heart')
let countHeart
setInterval(() => { countHeart = 0 }, 1000)

// heart.addEventListener('click', () => {
//     countHeart++
//     const mutationObserver= new MutationObserver(()=>{
//         if(countHeart>0){
//             const p=document.createElement('p')
//             console.log(`${counter.innerText-1}has been liked ${countHeart}times`)

//         }
//     })
//     mutationObserver.observe(counter,{characterData: false, attributes: false, childList: true, subtree: false })
// })

heart.addEventListener('click', () => {
    countHeart++
    const ul = document.createElement('ul')
    const li = document.createElement('li')

    if (countHeart === 1) {
        pause.after(ul)
        li.innerHTML = `
        ${counter.innerText}has been liked <span id='times'> 1 </span> time
        `
        ul.append(li)
    }

    else if (countHeart > 1) {
        const times = document.getElementById('times')
        times.innerText = countHeart
    } else { }
})




setInterval(() => {

}, 1000)

// below is pause event
pause.addEventListener('click', pauseEvent
)
function pauseEvent() {
    if (pause.innerText === "pause") {
        clearInterval(counterInterval)
        minus.removeEventListener('click', handleMinus)
        plus.removeEventListener('click', handlePlus)
        pause.innerText = 'resume'
    } else {
        pause.removeEventListener('click', () => {
            pause.innerText = 'pause'
        })
    }
}

