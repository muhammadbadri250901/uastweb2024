const changeBgBtn = document.getElementById('change-bg-btn');

changeBgBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue';
    console.log('Background berubah!');
});
