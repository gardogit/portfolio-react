import data from './data.json'

export const requestData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(data);
    }, 300)
  })
}

export const requestId = (id) => {
  return new Promise((res, rej) => {
    const item = data.find((e) => e.id === id);

    if (item) {
      res(item)
    } else {
      rej({
        error: "No se encontró el producto"
      })
    }
  })
}