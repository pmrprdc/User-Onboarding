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
const submitbtn = () => cy.get(`button[id="submitBtn"]`)

it('sanity check', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    expect(1+1).to.equal(2)
    expect(2+2).not.equal(5)
    
   firstName().should('have.text', "")
    
  })


  it("the propper elements are showing", ()=>{

    firstName().should("exist")
    lastName().should("exist")
    email().should("exist")
    passWord().should("exist")
    dataRights().should("exist")
    submitbtn().should("exist")  
    

  })



it("can navigate to site", ()=>{
  cy.url().should("include", "localhost");
})

it("submit button starts out disabled", ()=>{
  submitbtn().should("be.disabled")
})






















































})