const conta = {
  email: 'tricia@trx.bank',
  password: '123456',
  name: 'Trícia',
  balance: 3.800,
  id:'1'
}


export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  }, 3000)
})