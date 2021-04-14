// const apiKey = "A9v28lxAbchrUmXq2udJdsq3Wjuh5UJRqJgbSDxD"

function getPopularImages() {
    const baseUrl = 'https://images-assets.nasa.gov/popular.json'
    return fetch(baseUrl)
}

export { getPopularImages }