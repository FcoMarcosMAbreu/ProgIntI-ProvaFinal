export function setupShort(element: HTMLButtonElement) {
  let result = (document.getElementById('result') as HTMLParagraphElement)
  element.addEventListener('click', async () => {
    let response = await fetch('http://localhost:3000/short')
    result.innerText = await response.text()
  }, false)
}
