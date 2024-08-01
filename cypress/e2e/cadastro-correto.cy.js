describe('Tela de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test= "register-button"]').click();
  })
  it('Preencher os campos do formulário incorretamente e exibir mensagens pro usuário', () => {
    cy.cadastrar('Ana de Jesus', 'novoteste@email.com', 'Senha123')
  })
})