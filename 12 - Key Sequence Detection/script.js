
const pressed = [];
const secretCode = "ram";

window.addEventListener('keyup', (e) => {
    console.log( e.key );
    pressed.push( e.key );
    // Array<string>.splice(start: number, deleteCount?: number | undefined)    
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    console.log(pressed.join(''));
    if (pressed.join('').includes(secretCode)) {
        console.log('Hare Krishna Hare Ram');
        cornify_add();
    }
    console.log( pressed );
});

