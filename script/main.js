async function init() {
    initLoadingBar();
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

function initLoadingBar() {
    let container = document.getElementById('content');
    container.innerHTML = loadingBar;
}
