describe("Quotes App", ()=>{


beforeEach(()=>{
    

    // each test needs fresh state!
    // every test should work in isolation! 

    // tests shouldn't rely on other tests;
    cy.visit("http://localhost:3000/")  
})    


// helpers /// getters 

const firstName = () => cy.get("input[name=firstName]")
const lastName  = () => cy.get("input[name=lastName]")
const passWord = () => cy.get("input[name=passWord]")
const dataRights = ()=> cy.get("input[name=dataPermission]")
const email = () => cy.get("input[name=email]")
const submitbtn = () => cy.get("button")

it('all form elements exists', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
   firstName().should('have.text', "")
    
  })

























































})