async function init() {
    showSpinner();
    await loadAllImages();
    loadContent();
}

function loadContent() {
    let container = document.getElementById('content');
    container.innerHTML = '';
    for (let imgKey in totalImageCache) {
        container.appendChild(totalImageCache[imgKey]);
    }
}

function showSpinner() {
    let container = document.getElementById('content');
    container.innerHTML = spinner;
}