function forma1 (name, id, type) {
  return {
    name: name,
    id: id,
    type: type,
    save: function () {}
  }
}

function forma2 (name, id, type) {
  return {
    name,
    id,
    type,
    save () {}
  }
}
