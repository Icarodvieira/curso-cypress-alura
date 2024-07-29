describe('Tela de cadastro', () => {
  it('Preencher os campos do formulário incorretamente e exibir mensagens pro usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test= "register-button"]').click();
    cy.get('[data-test= "input-name"]').type('Ana de Jesus');
    cy.get('[data-test= "input-email"]').type("novoteste@email.com");
    cy.get('[data-test= "input-password"]').type("Senha123");
    cy.get('[data-test= "input-confirm-password"]').type("Senha123");
    cy.get('[data-test= "submit-button"]').click();
  })
})