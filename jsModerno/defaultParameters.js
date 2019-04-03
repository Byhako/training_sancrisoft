function isRequired (name) {
  throw new Error(name + 'is required')
}

function calculate (price = isRequired('price'), sales=0.43, discount=0) {
  // lo que sea
}

calculate ()
