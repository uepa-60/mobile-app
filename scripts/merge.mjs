import { writeFileSync } from 'fs'
import services from '../aaa.json' assert {type: "json"}
import onlyCoordinates from '../eee.json' assert {type: "json"}

async function run() {
  for (const city in services) {
    const newCity = services[city].map(element => {
      const { coordenadas } = onlyCoordinates.find(elem => elem.nome === element.nome) || { coordenadas: null }

      return {
        ...element,
        coordenadas
      }
    })

    try {
      writeFileSync(`./${city}.json`, JSON.stringify({ [city]: newCity }, null, 2))
      console.log('done')
    } catch {
      console.log('shit')
    }
  }
}

run()