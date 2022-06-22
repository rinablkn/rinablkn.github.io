let doButton = document.getElementById("doButton");

doButton.onclick = function() {
    let one = Number(document.getElementById("0").value);
    let two = Number(document.getElementById("1").value);
    let three = Number(document.getElementById("2").value);
    let four = Number(document.getElementById("3").value);
    let a = Number(document.getElementById("a").innerText.replace("$", ""));
    let b = Number(document.getElementById("b").innerText.replace("$", ""));
    let c = Number(document.getElementById("c").innerText.replace("$", ""));
    let d = Number(document.getElementById("d").innerText.replace("$", ""));
    document.getElementById("total").innerText =
        Number(one * a + two * b + three * c + four * d) + "$";
}
