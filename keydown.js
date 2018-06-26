window.addEventListener("keydown", event => {
    let override;
    if (event.keyCode === 32) {
        override = 'Spacebar'
    }
    document.getElementById("pressed").innerHTML = override || event.key;
    document.getElementById("instructions").innerHTML = "You've pressed"
});
