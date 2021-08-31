const handsfree = new Handsfree({
    showDebug: true,
    weboji: {
        enabled: true,
    },
})

handsfree.start();
handsfree.plugin.facePointer.enable();

// handsfree.plugin.facePointer.pointer.speed = {
//     x: 0.1,
//     y: 0.1
// }
// handsfree.plugin.facePointer.pointer.offset = {
//     x: 1000,
//     y: 600
// }

document.addEventListener('handsfree-data', (event) => {
    const data = event.detail
    if (paddleWidth / 2 > data.weboji.pointer.x) {
        paddleX = 0;
    } else if (canvas.width - data.weboji.pointer.x < paddleWidth / 2) {
        paddleX = canvas.width - paddleWidth;
    } else {
        paddleX = data.weboji.pointer.x - paddleWidth / 2;
    }
})