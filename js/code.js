window.onload = function() {
    saludo();
}

function ListRandom() {
    buttonOpacity();
    galleryRandom(0, 17, null, null);
}

function saludo() {
    var hoy = new Date();
    var hora = hoy.getHours();
    if (hora < 7 || hora > 17) {
        const h1 = document.getElementById('saludo');
        let HTMLString = '<h1>¡Buenas noches!</h1>'
        h1.innerHTML = HTMLString;
        document.body.style.backgroundColor = "#3E3730"

    } else {
        const h1 = document.getElementById('saludo');
        let HTMLString = '<h1>¡Buenos dias!</h1>'
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
    var array = [];
    for (let i = 0; i < n; i++) {
        var num = getRndInteger(min, max);
        if (array.includes(num)) {
            i--
        } else {
            array.push(num);
        }
    }
    return array;
}

function galleryRandom(min, max, img, listRandom) {
    img = document.getElementsByTagName("img");
    listRandom = getListRandom(17, 1, 17);
    for (let i = min; i < max; i++) {
        img[i].setAttribute("src", "./img/IMG_" + listRandom[i] + ".PNG");
    }
    return img;
}