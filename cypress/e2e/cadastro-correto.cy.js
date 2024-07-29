describe('Tela de cadastro', () => {
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test= "register-button"]').click();
    cy.get('[data-test= "input-name"]').type('Ana de Jesus');
    cy.get('[data-test= "input-email"]').type("novoteste@email.com");
    cy.get('[data-test= "input-password"]').type("Senha123");
    cy.get('[data-test= "input-confirm-password"]').type("Senha123");
    cy.get('[data-test= "submit-button"]').click();
  })
})

describe('Página de Pets disponíveis', () => {
  it('Acessar a página principal e clicar no botão Ver pets disponíveis para adoção', ()=> {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a','Ver pets disponíveis para adoção').click();
  })
})

describe('Botões do cabeçalho', () => {
  it('Abrir página principal e testar botão Home no cabeçalho', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('a[class = "header__home').click();
  })
  it('Abrir página principal e testar botão Message no cabeçalho', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.header__message').click();
  })
})

describe('Acessar página /login', ()=>{
  it('Visitar página /login', ()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/login');
  })
})

describe('Acessar página /home', ()=>{
  it('Visitar página /home', ()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
  })
})

describe('Acessar home e clicar em botão de mensagem', ()=>{
  it('Visitar página /home e clicar em botão message', ()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    cy.get('.header__message').click();
  })
})