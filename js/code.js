window.onload = function() {
    saludo();
}

function ListRandom() {
    buttonOpacity();
    galleryRandom(0, 10, null, null);
}

function saludo() {
    var hoy = new Date();
    var hora = hoy.getHours();
    if (hora < 7 || hora > 17) {
        const h1 = document.getElementById('saludo');
        let HTMLString = '<h1>Buenas noches</h1>'
        h1.innerHTML = HTMLString;
        document.body.style.backgroundColor = "#3E3730"

    } else {
        const h1 = document.getElementById('saludo');
        let HTMLString = '<h1>Buenos dias</h1>'
        h1.innerHTML = HTMLString;
        document.body.style.backgroundColor = "rgb(238, 107, 47)"
    }
}

function buttonOpacity() {
    if (document.getElementById("pokeball").style.opacity == "1") {
        document.getElementById("pokeball").style.opacity = "0.5";
    } else {
        document.getElementById("pokeball").style.opacity = "1";
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function getListRandom(n, min, max) {
    var arr = [];
    for (let i = 0; i < n; i++) {
        var numr = getRndInteger(min, max);
        if (arr.includes(numr)) {
            i--
        } else {
            arr.push(numr);
        }
    }
    return arr;
}

function galleryRandom(min, max, images, listRnd) {
    images = document.getElementsByTagName("img");
    listRnd = getListRandom(10, 1, 10);
    for (let i = min; i < max; i++) {
        images[i].setAttribute("src", "./img/IMG_" + listRnd[i] + ".PNG");
        console.log(images[i]);
    }
    return images;
}