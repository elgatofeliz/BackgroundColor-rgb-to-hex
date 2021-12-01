let i = 0
let out = document.getElementById("demo")
let out2 = document.getElementById("colorId")
let out3 = document.getElementById("hex")

let changeHandle = () => {
    let red = document.getElementById("rot").value
    let green = document.getElementById("grun").value
    let blue = document.getElementById("blau").value
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    i++
    out.innerHTML = `Die Farbe wurde ${i} mal geändert`
    out2.innerHTML = `rgb(${red}, ${green}, ${blue})`

    let rgbToHex = (x) => {
        if (x.length == 1) {
            console.log("works=1")
            return "0" + (x * 1).toString(16)
        } else {
            console.log("works=2")
            return (x * 1).toString(16)
        }
    }
    out3.innerHTML = `#${rgbToHex(red)}${rgbToHex(green)}${rgbToHex(blue)}`
}

let changeBackground = (x) => {
    document.body.style.backgroundColor = x
}