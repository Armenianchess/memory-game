let boxes = document.getElementsByClassName('box')
let arr = ['red', 'blue', 'green', 'orange', 'purple']
let pairColor = '';


for (let elem of boxes) {
    elem.addEventListener('click', function () {
        let randomIdx = Math.floor(Math.random() * arr.length)
        let color = arr[randomIdx]
        elem.style.backgroundColor = color
        console.log(arr)

        if (pairColor.length == 0) {
            pairColor = color
        } else {
            if (pairColor == color) {
                arr.splice(randomIdx, 1)
                pairColor = ''
            } else {
                pairColor = ''
            }
        }


        /*
        if the two boxes colors match the two boxes 
        will remain that color ALSO!! we need to 
        mutate the color 
        if the two boxes dont match then they will 
        turn white again 
        */

    })
}