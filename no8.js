const toggleButton = document.getElementById('toggleButton');
const sidebar = document.getElementById('sidebar');

toggleButton.addEventListener('click', () => {
    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block';
    } else {
        sidebar.style.display = 'none';
    }
});
