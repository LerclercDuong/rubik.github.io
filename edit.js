var pow = document.getElementById('pow')
console.log(pow)
pow.classList.add('red')
setInterval(() => {
    pow.classList.toggle('red')
}, 1000)