describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();

        })

    it('Mensagem de erro para campos preenchidos incorretamente', () => {
      cy.get('[data-test="input-loginEmail"]').type('ana');
      cy.get('[data-test="input-loginPassword"]').type('senha');
      cy.get('[data-test="submit-button"]').click();
      cy.contains('Por favor, verifique o email digitado').should('be.visible');
      cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    })

    it('Mensagem de erro para campos vazios', () => {
      cy.get('[data-test="submit-button"]').click();
      cy.contains('É necessário informar um endereço de email').should('be.visible');
      cy.contains('Insira sua senha').should('be.visible');
    })

    it('Deve falhar mesmo que os campos sejam preenchidos corretamente (Stub)', ()=> {
      cy.login('ana@email.com', 'Senha123')
      cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
        statusCode:400,}).as('stubPost');
      cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
})
})

