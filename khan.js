const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "teal"];
let chang = 0;

function changeColor() {
    document.body.style.backgroundColor = colors[chang];
    chang = (chang + 1) % colors.length;
}







function handleClick(belal, isDoubleAlert = false) {
    if (isDoubleAlert) {
        alert("Board Update Successfuly  "); // First alert
        alert("Congrates!! You have completed all the current task "); // Second alert
    } else {
        alert("Board Update Successfully ");
    }

    let button = document.getElementById(belal);
    button.disabled = true; // Disable the button

    // Remove the previous button colors
    button.classList.remove("btn-primary",
        "btn-success",
        "btn-error",
        "btn-warning",
        "btn-info",
        "btn-secondary");

    // Add the gray color when disabled
    button.classList.add("bg-gray-400", "text-red-600", "font-bold", "cursor-not-allowed", "border-yellow-500");


    //

    let decreaseElem = document.getElementById("decrease");
    let increaseElem = document.getElementById("increase");


    let logElem = document.getElementById("log");
    const taitle = document.getElementById('p-taitle').innerText;

    let decreaseValue = parseInt(decreaseElem.textContent); //[akha id dhore ana hoyece]
    let increaseValue = parseInt(increaseElem.textContent);

    if (decreaseValue > 0) { //[akhane sub and add ar kaj kore ]
        decreaseElem.textContent = decreaseValue - 1;
        increaseElem.textContent = increaseValue + 1;
    }



    const d = new Date();
    document.getElementById('month').innerHTML = d;


    let now = new Date();
    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric', ///akhane day mont year second minit hour ar kaj kore 
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    let date = now.toLocaleString(options);

    const container = document.getElementById('history');
    const p = document.createElement("p");
    p.innerText = `
     You have completed the task
      ${taitle} 
      at ${date} 
     
     `
    container.appendChild(p);
}







document.getElementById("btn").addEventListener('click', function() {

    const btnBu = document.getElementById('log').style.display = 'none';
})






document.getElementById('newPage').addEventListener('click', function() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('main2').style.display = 'block';
})
document.getElementById('back').addEventListener('click', function() {
    document.getElementById('main').style.display = 'block';
    document.getElementById('main2').style.display = 'none';
})