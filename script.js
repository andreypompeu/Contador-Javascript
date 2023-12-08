const countButton = document.getElementById('countButton')
const resetButton = document.getElementById('resetButton')
 
countButton.addEventListener('click', () => {});
resetButton.addEventListener('click', () => {});

async function contar() {
    let display = document.getElementById('display');
    display.innerHTML = '';
 
    for (let i = 1; i <= 100; i= i+1) {
        display.innerHTML += i + ' ';
        await new Promise(resolve => setTimeout(resolve, 500));
    }
}
 
function reset() {
    let display = document.getElementById('display');
    display.innerHTML = '...';
}

countButton.addEventListener('click', contar);
resetButton.addEventListener('click', reset);
