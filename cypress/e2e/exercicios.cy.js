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

   const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzYWVlMWUyNy1kMTQyLTQ2ZGUtOGRjZS05MWE1MDk5N2Q3ZjUiLCJhZG9wdGVyTmFtZSI6IlBldGVyIEphc29uIFF1aWxsIiwiaWF0IjoxNzIyOTA0NTcxLCJleHAiOjE3MjMxNjM3NzF9.JKgZYt0Mij77M5YCdr0Lb4wbzPwQgk5BxxNJbUWef0k'
 
   it('API do perfil', () =>{
    cy.request({
        method: 'GET',
        url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/3aee1e27-d142-46de-8dce-91a50997d7f5',
        headers: { authorization },
    }).then((res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body).is.not.empty;
        expect(res.body).to.have.property('perfil');
        expect(res.body.perfil.nome).is.equal('Peter Jason Quill');    
    })
   })
})
