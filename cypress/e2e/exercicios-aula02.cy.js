describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
   })
   it('Verificar titulo', () => {
    cy.title().should('eq','AdoPet');
   })
   
   it('Verifica mensagem de texto', () => {
    cy.contains('p','Quem ama adota!').should('be.visible');
   })

   it('Verifica mensagem de texto 2', () => {
    cy.contains('p','Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
   })
   it('Login por botão de mensagem', () => {
    cy.get('.header__message').click();
    cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
    cy.get('[data-test="input-loginPassword"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
   })
})
