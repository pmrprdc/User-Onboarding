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


it("can type in inputs and submit remains disabled until propper values are used", ()=> {

  firstName()
  .should("have.value","")
  .type("Joe").should("have.value", "Joe")
  submitbtn().should("be.disabled")


  lastName()
  .should("have.value", "")
  .type("Mocha").should("have.value", "Mocha")
  submitbtn().should("be.disabled")
  email()
  .should("have.value","")
  .type("mochajoes@coffee.com")
  .should("have.value", "mochajoes@coffee.com")
  submitbtn().should("be.disabled")
  passWord().should("have.value", "")
  .type("DownWithLarries123*")
  .should("have.value", "DownWithLarries123*")
  submitbtn().should("be.disabled")
  dataRights()
  .should("not.be.checked")
  .check()
  submitbtn().should("be.enabled").click()
  cy.get("h2").should("exist").should("have.text", "Joe Mocha")



})


it("password doesn't work if no numbers are given",()=>{

  firstName()
  .should("have.value","")
  .type("Joe").should("have.value", "Joe")
  submitbtn().should("be.disabled")


  lastName()
  .should("have.value", "")
  .type("Mocha").should("have.value", "Mocha")
  submitbtn().should("be.disabled")
  email()
  .should("have.value","")
  .type("mochajoes@coffee.com")
  .should("have.value", "mochajoes@coffee.com")
  submitbtn().should("be.disabled")
  passWord().should("have.value", "")
  .type("DownWithLarries*")
  .should("have.value", "DownWithLarries*")
  submitbtn().should("be.disabled")
  dataRights()
  .should("not.be.checked")
  .check()
  submitbtn().should("be.disabled")

})


it("password doesn't work if no special characters are used",()=>{

  firstName()
  .should("have.value","")
  .type("Joe").should("have.value", "Joe")
  submitbtn().should("be.disabled")


  lastName()
  .should("have.value", "")
  .type("Mocha").should("have.value", "Mocha")
  submitbtn().should("be.disabled")
  email()
  .should("have.value","")
  .type("mochajoes@coffee.com")
  .should("have.value", "mochajoes@coffee.com")
  submitbtn().should("be.disabled")
  passWord().should("have.value", "")
  .type("DownWithLarries1234")
  .should("have.value", "DownWithLarries1234")
  submitbtn().should("be.disabled")
  dataRights()
  .should("not.be.checked")
  .check()
  submitbtn().should("be.disabled")

})



it("password doesn't work if it is shorter than 8 characters",()=>{

  firstName()
  .should("have.value","")
  .type("Joe").should("have.value", "Joe")
  submitbtn().should("be.disabled")


  lastName()
  .should("have.value", "")
  .type("Mocha").should("have.value", "Mocha")
  submitbtn().should("be.disabled")
  email()
  .should("have.value","")
  .type("mochajoes@coffee.com")
  .should("have.value", "mochajoes@coffee.com")
  submitbtn().should("be.disabled")
  passWord().should("have.value", "")
  .type("DwnWL1*")
  .should("have.value", "DwnWL1*")
  submitbtn().should("be.disabled")
  dataRights()
  .should("not.be.checked")
  .check()
  submitbtn().should("be.disabled")

})
















































})