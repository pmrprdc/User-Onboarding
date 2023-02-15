describe("Quotes App", ()=>{


beforeEach(()=>{
    

    // each test needs fresh state!
    // every test should work in isolation! 

    // tests shouldn't rely on other tests;
    cy.visit("http://localhost:3000/")  
})    

it('all form elements exists', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('.first').should('have.text', "")
  })

























































})