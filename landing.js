const textEl = document.getElementById('text');
const text = `Hi, I'm Paulina`;
let index = 1;

writeText();

function writeText() {
    textEl.innerText = text.slice(0, index)
    index++

    setTimeout(writeText, 100)
}