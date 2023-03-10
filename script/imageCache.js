let totalImageCache = {};

const loadSingleImage = path => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'Anonymous' // to avoid CORS if used with Canvas
    img.src = path
    img.onload = () => {
      resolve(img)
    }
    img.onerror = e => {
      reject(e)
    }
  })
}

async function loadAllImages() {
  for (let i = 0; i < imageCacheData.length; i++) {
    const path = imageCacheData[i];
    try {
      const img = await loadSingleImage(path);
      totalImageCache[path] = img;
    } catch (e) {
      console.log(`Problem with path: ${path}`)
      console.log(e)
    }
  }
}
