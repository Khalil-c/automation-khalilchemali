/// <reference types="cypress" />
import faker from 'faker'

//elements
const viewClientButton= '.blocks > :nth-child(2) > .btn'
const saveButton = '.blue'
const creatClientButton = 'h2 > .btn'
const name =':nth-child(1) > input'
const email =':nth-child(2) > input'
const telephone = ':nth-child(3) > input'
//const dotsButton = ':nth-child(3) > .action > img'
const dotsButton = ':nth-last-child(1) > .action > img'
const editButton = '.menu > :nth-child(1)'
const deleteButton = '.menu > :nth-child(2)'
const editName = ':nth-child(3) > input'
const editEmail = ':nth-child(4) > input'
const editPhone = ':nth-child(5) > input'
const onClientPage = 'Client'


//actions/functions
function goToClientPage(){
    cy.get(viewClientButton).click()
    checkOnClientPage(cy)

}
function checkOnClientPage(){
    cy.contains(onClientPage)

}
function newClient(){
    cy.get(creatClientButton).click()
    cy.get(name).type(faker.name.firstName())
    cy.get(email).type(faker.internet.email())
    cy.get(telephone).type(faker.phone.phoneNumber())
    cy.get(saveButton).click()
}
function editClient(){
    cy.get(dotsButton).click()
    cy.get(editButton).click()
    cy.get(editName).type('Edit')
    cy.get(editEmail).type('Edit')
    cy.get(editPhone).type('99')
    cy.get(saveButton).click()
}
function deleteClient(){
    cy.get(dotsButton).click()
    cy.get(deleteButton).click()
}

//exports
module.exports = {
    goToClientPage,
    checkOnClientPage,
    newClient,
    editClient,
    deleteClient

}
