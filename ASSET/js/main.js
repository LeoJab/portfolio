document.addEventListener('DOMContentLoaded', () => {
    console.log('JS Chargé !');

    let body = document.querySelector("#body");

    console.log(body);

    document.addEventListener('mousemove', (event) => {

        let x = event.clientX + "px";
        let y = event.clientY + "px";

        body.style.background = 'radial-gradient(circle at ' + x + ' ' + y + ', rgba(255,255,255,0.2049194677871149) 0%, rgba(27,27,27,1) 100%);';

        //console.log(x);
        //console.log(y);
    })
})