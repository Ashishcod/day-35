const box = document.getElementById("box")
document.body.onpointermove = event =>{
    const {clientX,clientY} = event;
    box.animate({
        left:`${clientX}px`,
        top:`${clientY}px`
    },{duration:3000, fill:'forwards'})
}