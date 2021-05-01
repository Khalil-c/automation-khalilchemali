/// <reference types="cypress" />

//elements
const titleOfDashbordPage = 'Testers Hotel'
const logoutButton = '.user > .btn'



//actions/functions
function checkTitleOfDashbordPage(cy){
    cy.title().should('eq', titleOfDashbordPage)

}



function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}


//exports
module.exports = {
    checkTitleOfDashbordPage,
    performLogout
    
}
