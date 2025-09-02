let startbtn = document.querySelector('#start');
let welcome = document.querySelector('.welcome');
let terminal = document.getElementById('terminal');

startbtn.addEventListener('click', start);

const messeges = [
    'Initialising Hacking',
    'Reading your files',
    'Password files Detected',
    'Sending all files to the Server',
    'Cleaning up'
]



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function randomInt(min, max) {
    return Math.ceil(Math.random() * (max - min * 1)) + min;
}



function createLine(text) {
    const p = document.createElement("p");
    p.className = 'line';
    p.textContent = text;


    // create blinking dots
    const dots = document.createElement('span');

    dots.style.marginLeft = '20px';
    dots.className = 'dots';

    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dots.appendChild(dot);
    }

    p.appendChild(dots);
    return p;
}

async function start() {
    welcome.style.display = 'none';
    startbtn.style.display = 'none';
    terminal.style.display = 'flex';
    terminal.style.flexDirection = 'column';
    const allDots = [];

    for (let msg of messeges) {

        const line = createLine(msg);
        terminal.appendChild(line);
        terminal.scrollTop = terminal.scrollHeight;

        const dots = line.querySelectorAll('.dot');
        dots.forEach(dot => allDots.push(dot));

        const delay = randomInt(1000, 5000);
        await sleep(delay);
        allDots.forEach(dot => dot.style.animation = 'none');

    }

    const final = document.createElement('p');
    final.className = 'line';
    final.textContent = 'Process Complete 💀'
    terminal.appendChild(final);
}