
// Javascript per dare l'effetto di cambio colore e trasparenza alla navabar durnate lo scroll.

let navbar = document.querySelector('#navbar')
let navbarBrand = document.querySelector('#navbarBrand')
let navbarCTAScroll = document.querySelector('#navbarCTAScroll')


if(window.innerWidth > 576) {

    document.addEventListener('scroll', ()=> {

        if(window.pageYOffset > 20) {
            navbar.classList.remove('bg-transparent')
            navbar.classList.add('bg-white', 'shadow')
            navbarBrand.src = "./media/gelatoonline.png"
        } else {
            navbar.classList.remove('bg-white', 'shadow')
            navbar.classList.add('bg-transparent')
            navbarBrand.src = "./media/gelatoonline.png"
        }

        if(window.pageYOffset > window.innerHeight) {
            navbarCTAScroll.classList.remove('d-none')
        } else {
            navbarCTAScroll.classList.add('d-none')
        }
    
    })

} else {
    navbar.classList.add('bg-white')
}



// Javascript per far si che il timer si afunzionante.

let final = new Date('January 5, 2025')
let giorniMancanti = document.querySelector('#giorniMancanti')
let oreMancanti = document.querySelector('#oreMancanti')
let minutiMancanti = document.querySelector('#minutiMancanti')
let secondiMancanti = document.querySelector('#secondiMancanti')


function timer() {

    let today = new Date()
    let diff = final - today

    let secondi = Math.floor( diff / 1000 % 60 ) 
    let minuti = Math.floor( (diff / (1000 * 60) ) % 60)
    let ore = Math.floor( (diff / (1000 * 60 * 60) ) % 24)
    let giorni = Math.floor( (diff / (1000 * 60 * 60 * 24) ))

    giorniMancanti.innerHTML = (giorni > 9) ? giorni : "0" + giorni
    oreMancanti.innerHTML = (ore > 9) ? ore : "0" + ore
    minutiMancanti.innerHTML = (minuti > 9) ? minuti : "0" + minuti
    secondiMancanti.innerHTML = (secondi > 9) ? secondi : "0" + secondi

}

setInterval(timer,1000)