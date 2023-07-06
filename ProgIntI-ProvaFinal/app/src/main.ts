import './style.css'
import { setupShort } from './short.ts'
import { setupSearch } from './search.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Encurtador de URL da Prova Final</h1>
    <form>
      <label for="url">URL:</label>
      <input type="text" name="url" placeholder="URL" required />
      <button #id="short" type="submit">Encurtar</button>
    </form>
    <p id="result"></p>
    <br><br>
    <form>
      <label for="search">Buscar por URL:</label>
      <input type="text" name="search" placeholder="URL curta" required />
      <button #id="search" type="submit">Buscar</button>
    </form>
    <p id="search-result"></p>

  </div>
`

setupShort(document.querySelector<HTMLButtonElement>('#short')!)
setupSearch(document.querySelector<HTMLButtonElement>('#search')!)
