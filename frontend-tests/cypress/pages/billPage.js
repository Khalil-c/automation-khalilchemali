/// <reference types="cypress" />
import faker from 'faker'

//elements
const viewBillButton= '.blocks > :nth-child(3) > .btn'
const saveButton = '.blue'
const creatBillButton = 'h2 > .btn'
const valueid =':nth-child(1) > input'
const checkbox = '.checkbox'
const onBillPage = 'Bill'


//actions/functions
function goToBillPage(){
    cy.get(viewBillButton).click()
    checkOnBillPage(cy)

}
function checkOnBillPage(){
    cy.contains(onBillPage)

}
function newBill(){

    cy.get(creatBillButton).click()
    let valuenumber = faker.random.number(500)
    cy.get(valueid).type(valuenumber)
    cy.get(checkbox).click()   
    cy.get(saveButton).click()
    cy.contains(valuenumber)
}

//exports
module.exports = {
    goToBillPage,
    checkOnBillPage,
    newBill

}
