//consts
const body = document.querySelector('body')
const header = document.querySelector('header')
const input = document.getElementById('input')
const main = document.querySelector('main')
const del = document.querySelector('.del')
const red = document.querySelector('.red')
const reset = document.querySelector('.reset')

// for theme
const range = document.getElementById('range')
range.addEventListener('click', function(){
    if(range.value == 1 ){
        body.style.backgroundColor = 'rgb(31, 25, 65)'
        header.style.color = '#fff'
        input.style.color = '#fff'
        input.style.backgroundColor = 'rgb(12, 9, 29)'
        main.style.backgroundColor = 'rgb(12, 9, 29)'
        del.style.backgroundColor = 'rgb(31, 25, 65)'
        reset.style.backgroundColor = 'rgb(31, 25, 65)'
        red.style.backgroundColor = 'red'
    }
    else if(range.value == 2 ){
        body.style.backgroundColor = 'rgb(227, 225, 238)'
        header.style.color = '#000'
        input.style.color = '#000'
        input.style.backgroundColor = '#fff'
        main.style.backgroundColor = 'rgb(196, 193, 193)'
        del.style.backgroundColor = '#317873'
        reset.style.backgroundColor = '#317873'
        red.style.backgroundColor = 'orangered'
    }
    else if(range.value == 3){
        body.style.backgroundColor = 'rgb(34, 7, 49'
        header.style.color = 'yellow'
        input.style.color = 'yellow'
        input.style.backgroundColor = 'rgb(48, 9, 80)'
        main.style.backgroundColor = 'rgb(48, 9, 80)'
        del.style.backgroundColor = 'rgb(110, 19, 158)'
        reset.style.backgroundColor = 'rgb(110, 19, 158)'
        red.style.backgroundColor = '#00FA9A'
        red.style.boxsha
    }
})