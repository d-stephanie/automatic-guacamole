const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {
    accordion.onclick = function() {
        this.classList.toggle("is-open");

        let content = this.nextElementSibling;
        console.log(content);

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            console.log(content.style.maxHeight);
        };

    };
});


document.getElementById("guessing").addEventListener("click", function(event) {

    const question = prompt("Kompakysymys loppuun, mikä on virossa ja ruotsissa, mutta ei saksassa ja suomessa?", "vastaus...")

    if (question == "S-kirjain") {
        document.getElementById("guess").innerHTML = "OIKEIN!";
    } else if (question == "s-kirjain") {
        document.getElementById("guess").innerHTML = "OIKEIN!";
    } else {
        document.getElementById("guess").innerHTML = "Väärin... oikea vastaus olisi ollut S-kirjain.";
    };

    setTimeout(function() {
        document.getElementById("guess").innerHTML = "";
    }, 1000);
});
