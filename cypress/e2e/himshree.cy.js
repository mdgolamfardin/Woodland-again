describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://ugdev.cs.smu.ca:5234')
    it('find Learn React', () => {
      cy.visit('http://ugdev.cs.smu.ca:5234')
      cy.contains('Learn React')
      })
    })
})