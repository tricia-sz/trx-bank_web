import {login} from './login'

describe('login', () => {
  const mockAlert = jest.fn()
  window.alert = mockAlert

  const mockEmail = 'tricia@trx.com'

  it('Deve exibir um alert com boas vindas', () => {
    login(mockEmail)
    expect(mockAlert).toHaveBeenCalledWith(`Bem vinda ${mockEmail}!`)
  })

  it('Nao deve exibir a mensagem de boas vindas sem o e-mail', () => {
    login(mockEmail)
    expect(mockAlert).not.toHaveBeenCalledWith('Bem vinda!')
  })
})