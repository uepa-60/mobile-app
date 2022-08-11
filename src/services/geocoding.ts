export async function obterGeocoding(endereco: string) {
  const url = `https://api.tomtom.com/search/2/structuredGeocode.json${endereco}?key=6v0EaulVAadbVtwBJZaGN6IDsYEAPsaQ&limit=1`
  const response = await fetch(url)
  const json = await response.json()

  // const coordenadas = {
  //   latitude: json.data[0].latitude,
  //   longitude: json.data[0].longitude
  // }

  console.log('coord: ', json.results[0])

  const coordenadas = {
    latitude: -1.4673457,
    longitude: -48.4645869
  }

  return coordenadas
}
