describe('template spec', () => {
  
  it('Acessar site no navegador', () => {
    cy.visit('https://www.uol.com.br')
    
  })
  it('Deve carregar um elemento lento', () => {
  cy.get(':nth-child(1) > .showcaseColumns__list > :nth-child(6) > a.hyperlink', { timeout: 10000 }).click(); 
});
it('Validar string e data de atualização', () => {
  cy.get(':nth-child(147)').should('contain.text', 'Atualização:21 de julho de 2021');
});

  
  

})