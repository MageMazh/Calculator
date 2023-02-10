const handleBtnClick = (el) => {
    const target = document.getElementById("display").innerHTML;
    var coma = false;

    //switch theme
    if (el.id == "slider") {
        const tes = getComputedStyle(el)
        const shdw = document.getElementsByClassName("shadow")
        if (tes.backgroundColor != "rgb(40, 9, 107)") {
            document.body.style.backgroundColor = 'white';
            document.getElementsByClassName("tes")[0].style.backgroundColor = "black"
            document.getElementsByClassName("tes")[0].style.border = "4px solid black";
            document.getElementsByClassName("dis")[0].style.backgroundColor = "black";
            document.getElementsByClassName("container")[0].style.boxShadow = "2px 4px 10px 5px rgba(0, 0, 0, 0.35)";
            for (let i = 0; i < shdw.length; i++) {
                shdw[i].style.boxShadow = "2px 2px 4px #FFFFFF"
            }

        } else {
            document.body.style.backgroundColor = '#3C3232';
            document.getElementsByClassName("tes")[0].style.backgroundColor = "#F5F5F5"
            document.getElementsByClassName("tes")[0].style.border = "4px solid #F5F5F5";
            document.getElementsByClassName("dis")[0].style.backgroundColor = "#F5F5F5";
            document.getElementsByClassName("container")[0].style.boxShadow = "2px 4px 10px 5px rgba(255, 255, 255, 0.25)";
            for (let i = 0; i < shdw.length; i++) {
                shdw[i].style.boxShadow = "2px 2px 4px #000000"
            }
        }
        return
    }

    //delete
    if (el.innerHTML == "DEL") {
        let hsl = target.split("");
        hsl.pop()
        hsl = hsl.join("")
        if (hsl.length != 0) {
            document.getElementById("display").innerHTML = hsl;
        } else {
            document.getElementById("display").innerHTML = "0";
        }
        return
    }

    //koma
    if (el.innerHTML == ".") {
        for (let i of target) {
            if (i == ".") {
                coma = true
            } else if (i.charCodeAt(0) < 48) {
                coma = false
            }
        }
        if (target[target.length - 1].charCodeAt(0) < 48) {
            coma = true
        }
        if (coma == false) {
            document.getElementById("display").innerHTML += el.innerHTML;
        }
        return
    }


    //clear
    if (el.innerHTML == "CE") {
        document.getElementById("display").innerHTML = "0";
        document.getElementById("history").innerHTML = "";
        return
    }

    //operasi
    if (el.id == "operator") {
        if (document.getElementById("display").innerHTML != "0" && (target[target.length - 1].charCodeAt(0) < 48)) {
            hsl = ''
            console.log("tesfasa")
            if (target[target.length - 1].charCodeAt(0) != 40 && target[target.length - 1].charCodeAt(0) != 41) {
                for (let i of target) {
                    if (i != target[target.length - 1]) {
                        console.log("if")
                        hsl += i
                    } else {
                        hsl += el.innerHTML
                    }
                }
                document.getElementById("display").innerHTML = hsl
            } else {
                document.getElementById("display").innerHTML += el.innerHTML
            }

            return
        }
    }

    //hasil
    if (el.id == "result") {
        result = ''
        for (let i of target) {
            if (i == "x") {
                result += "*"
            } else {
                result += i
            }
        }
        document.getElementById("display").innerHTML = eval(result);
        document.getElementById("history").innerHTML = target
        return
    }

    //masukkan nilai
    console.log("tes")
    if (document.getElementById("display").innerHTML == "0") {
        document.getElementById("display").innerHTML = el.innerHTML;
    } else {
        document.getElementById("display").innerHTML += el.innerHTML;
    }
}