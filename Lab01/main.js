alert('Hi boi');
let h1 = document.querySelector('.header1');
function h1click(msg) {
    alert('h1click');
    let a = prompt(msg)
    h1.innerText = a;
}
h1.onclick = h1click
// h1.onclick = () => h1click('Codecamp Acadeny 01');
// h1.onclick = function(){ 
//     h1click('Codecamp Acadeny 01');
// } 