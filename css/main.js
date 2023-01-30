
function toggleMe() {
    let x = document.getElementsByClassName("hide");
    let y = document.getElementsByClassName("show");

    for (let i = 0; i < x.length; i++) {
        x[i].classList.toggle("show");
    }

}

