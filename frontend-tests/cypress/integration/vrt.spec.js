/// <reference types="cypress" />

import * as indexFunctions from '../pages/indexPage'
import * as dashboardFunctions from '../pages/dashboardPage'
import * as targets from '../targets/targets'
import * as client from '../pages/clientPage'
// import * as room from '../pages/roomPage'
// import * as bill from '../pages/billPage'
// import faker from 'faker'



//test suite
describe('Test suite', function(){

    beforeEach(()=> {
        cy.visit(targets.base_url) 
        indexFunctions.checkTitleOfIndexPage(cy)
    })

    //Test case
    it('Perform login and logout', function(){
        cy.wait(3000)
        cy.percySnapshot('login-page')
        indexFunctions.performValidLogin(cy, targets.username, targets.password,'Tester Hotel Overview' )
        cy.wait(3000)
        cy.percySnapshot('dashboard-page')
        client.goToClientPage()
        cy.wait(3000)
        cy.percySnapshot('client-page')
        client.newClient()
        cy.wait(3000)
        cy.percySnapshot('newClient-page')
        client.deleteClient()
        cy.wait(3000)
        cy.percySnapshot('deleteClient-page')
        dashboardFunctions.performLogout(cy, 'Login')

    })

    

    
})

