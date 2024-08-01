describe('Exercicios', () => {
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
    cy.login('ana@email.com','Senha123');
   })

   it('Verifica imagens da home', () => {
    cy.get('[data-test="login-button"]').click();
    cy.login('ana@email.com', 'Senha123');
    cy.get('.cards').should('be.visible');
   })

})
