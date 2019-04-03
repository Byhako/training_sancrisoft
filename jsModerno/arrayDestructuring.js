// Objetos
const user = {
  name: 'Juanito Perez',
  handle: '@lansi33',
  location: 'Medellin, Colombia'
}

const { name, handle, location } = user

function getClient () {
  return {
    client: 'Juanito Perez',
    code: '@lansi33',
    city: 'Medellin, Colombia'
  }
}

const { client, code, city } = getClient()

// Listas
const list = ['banana', 'apple', 'tomato']

// const banana = list[0]
// const apple = list[1]
// const tomato = list[2]

const [ banana, apple, tomato ] = list

// Cadenas
const csv = '2190,Ford,Fiesta,Red'
const [ year, make, model, color ] = csv.split(',')

// Renombrando variables

const colors = {
  b: 'black',
  g: 'green',
  r: 'red'
}

const { b: black, g: green, r: red } = colors

// Funciones

function sumar ({a=0, b=0, c=0}) {}

sumar({
  a: 3,
  c:7
})
