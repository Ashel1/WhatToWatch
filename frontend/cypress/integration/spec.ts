describe('What2Watch Tests', () => {

  it('Clicking button goes to next page', ()=>{
    cy.visit('/')
    cy.get('#start').click();
    cy.visit('http://localhost:4200/Question1')
  })
  
})
