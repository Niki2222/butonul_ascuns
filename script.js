let winningNo = Math.floor(Math.random() * 3) + 1;

function checkWinOrLoose() {
    let buttonNo = parseInt(document.activeElement.innerHTML);
    if (buttonNo === winningNo) {
        alert(`YOU WON!!! Button ${buttonNo} is a winning button!`);
    } else {
        alert(`Button ${buttonNo} is a loosing button. Try again!`);
    }
}

function generateButtons() {
    let buttonsNo = parseInt(document.getElementById('buttonsNumber').value);
    winningNo = Math.floor(Math.random() * buttonsNo) + 1;
    for (let i = 1; i <= buttonsNo; ++i) {
        document.getElementById('showButtons').innerHTML += `
        <button type="button" class="btn btn-primary" onclick="checkWinOrLoose()">${i}</button>
        `;
    }
}
