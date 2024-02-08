function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const newX = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const newY = Math.random() * (window.innerHeight - noBtn.clientHeight);

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
}
