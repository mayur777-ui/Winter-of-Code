let popUp = () =>{
    let pop_box = document.createElement('div');
    pop_box.classList.add('pop');
    pop_box.innerHTML = '<h1>Pop Up</h1><p>This is a pop up</p><button onclick="closePop()">Close</button>';
    document.body.appendChild(pop_box);
    let notshow = document.querySelector('.btn');
    notshow.style.display = 'none';
}

let closePop = () =>{
    let pop_box = document.querySelector('.pop');
    pop_box.remove();
    let notshow = document.querySelector('.btn');
    notshow.style.display = 'block';
}
