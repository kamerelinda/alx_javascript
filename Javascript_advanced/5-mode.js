function changeMode(size, weight, transform, background, color) {
    return function (){
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.transform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
    }
}
function main() {
    // add the elements to the DOM and change the style of the page
    const divContainer = document.createElement("div");
    document.body.appendChild(divContainer);

    // title
    const headTitle = document.createElement("h1");
    headTitle.textContent = "You're browsing as a guest";
    divContainer.appendChild(headTitle);

    //paragraph
    const para = document.createElement("p");
    para.textContent = "Pages you view in this window wont appear in the browser history and they won't" +
        "leave other traces,like cookies,on the computer after you close all open guest windows." +
        "Any files you download will be preserved, however.";
    divContainer.appendChild(para);

    // change Mode
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink','green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black','white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white','black');

    // add paragraph to body  of the page with the text Welcome Holberton!
    const parag = document.createElement("p");
    parag.textContent = "Welcome Holberton!";
    document.body.appendChild(parag);

    //Add 3 buttons
    // spooky
    const spookyBtn = document.createElement("button");
    spookyBtn.textContent = "Spooky mode";
    document.body.appendChild(spookyBtn);
    spookyBtn.addEventListener('click', spooky);

    // Dark Mode
    const darkBtn = document.createElement("button");
    darkBtn.textContent = "Dark mode";
    document.body.appendChild(darkBtn);
    darkBtn.addEventListener("click", darkMode);

    // Scream Mode
    const screamBtn = document.createElement("button");
    screamBtn.textContent = "Scream mode";
    document.body.appendChild(screamBtn);
    screamBtn.addEventListener("click", screamMode);
}
main();