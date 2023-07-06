export function setupSearch(element: HTMLButtonElement) {
  element.addEventListener('click', async () => {
    let response = await fetch('http://localhost:3000/search')
    let data = await response.json()
    console.log(data)
  }, false)
}
