(() => {
    'use strict'

    const title       = document.querySelector('h1')
    const buttons     = document.querySelectorAll('button')
    const textArea    = document.querySelector('.keyboard__text')
    const toggleBtn   = document.querySelector('.toggle')
    const choose      = document.querySelector('.choose')
    const redColor    = document.querySelector('.red')
    const greenColor  = document.querySelector('.green')

    toggleBtn.addEventListener('click', () => {
        toggleBtn.classList.toggle('toggled')

        buttons.forEach(btn => {
            btn.classList.toggle('led')

            if(!btn.classList.contains('led')) {
                btn.classList.remove('led-red')
                btn.classList.remove('led-green')
            }
        })

        choose.classList.toggle('show-choose')
        
    })

    redColor.addEventListener('click', () => {
        buttons.forEach(btn => {
            btn.classList.toggle('led-red')
            
            if(btn.classList.contains('led-green')) {
                btn.classList.remove('led-green')
            }
        })
    })

    greenColor.addEventListener('click', () => {
        buttons.forEach(btn => {
            btn.classList.toggle('led-green')

            if(btn.classList.contains('led-red')) {
                btn.classList.remove('led-red')
            }
        })
    })

    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            buttons.forEach(btn => {
                btn.classList.remove('pressed')
            })
            let keyValue = e.target.value
            e.target.classList.add('pressed')
            textArea.innerHTML += keyValue
        })
    })
   
    function typingEffect(element) {
        const textArray = element.innerHTML.split('')
        element.innerHTML = ''
        textArray.forEach((letter, i) => {
            setTimeout(() => {
                element.innerHTML += letter
            }, 75 * i)
        })
    }

    typingEffect(title)
})()