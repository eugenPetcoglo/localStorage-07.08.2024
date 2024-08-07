
const body = document.body
let changeColor1 = localStorage.getItem('changeColor') === 'true'
const applyColor = () => {
   body.style.backgroundColor = changeColor1 ? 'red' : 'white'
}
applyColor()
const buton = document.querySelector('.color')
buton.addEventListener('click', () => {
   changeColor1 = !changeColor1
   localStorage.setItem('changeColor', `${changeColor1}`)
   applyColor()
})



/*localStorage.setItem('salutare', 'hello world')
const getStorage = localStorage.getItem('salutare')
console.log(getStorage)

//apasam pe buton, p se mareste cu 1, info sa ramin in localStorage
const p = document.querySelector('.counter')

const buton2 = document.querySelector('.buton2')
let count = localStorage.getItem('clickCounter')
p.textContent = count
buton2.addEventListener('click', () => {
    p.textContent = count++
 localStorage.setItem('clickCounter', `${p.textContent}`)

})*/
