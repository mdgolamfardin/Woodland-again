describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://ugdev.cs.smu.ca:5234')
    it('find Ecosystem', () => {
      cy.visit('http://ugdev.cs.smu.ca:5234')
      cy.contains('Ecosystem')
      })
    })
})