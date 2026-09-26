const conta = {
  email: 'tricia@trx.bank',
  password: '123456',
  name: 'Trícia Souza'
}


export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  }, 3000)
})