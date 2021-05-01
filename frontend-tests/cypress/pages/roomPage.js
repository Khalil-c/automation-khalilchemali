/// <reference types="cypress" />
import faker from 'faker'

//elements
const viewRoomButton= '.blocks > :nth-child(1) > .btn'
const saveButton = '.blue'
const creatRoomButton = 'h2 > .btn'
const category =':nth-child(1) > select'
const numberid =':nth-child(2) > input'
const floor = ':nth-child(3) > input'
const price = ':nth-child(5) > input'
const checkbox = '.checkbox'
const Features =':nth-child(6) > select'
const onRoomPage = 'Room'


//actions/functions
function goToRoomPage(){
    cy.get(viewRoomButton).click()
    checkOnRoomPage(cy)

}
function checkOnRoomPage(){
    cy.contains(onRoomPage)

}
function newRoom(){
    cy.get(creatRoomButton).click()
    cy.get(category).select('Double')
    let roomNumber = faker.random.number(50)
    cy.get(numberid).type(roomNumber)
    cy.get(floor).type(faker.random.number(5))
    cy.get(checkbox).click()
    cy.get(price).type(faker.random.number({min:20, max:300}))   
    cy.get(Features).select('Balcony')     
    cy.get(saveButton).click()
    cy.contains(roomNumber)
}

//exports
module.exports = {
    goToRoomPage,
    checkOnRoomPage,
    newRoom

}
