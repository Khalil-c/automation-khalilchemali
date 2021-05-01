/// <reference types="cypress" />

import * as indexFunctions from '../pages/indexPage'
import * as dashboardFunctions from '../pages/dashboardPage'
import * as targets from '../targets/targets'
import * as client from '../pages/clientPage'
import * as room from '../pages/roomPage'
import * as bill from '../pages/billPage'
import faker from 'faker'



//test suite
describe('Test suite', function(){

    beforeEach(()=> {
        cy.visit(targets.base_url) 
        indexFunctions.checkTitleOfIndexPage(cy)
    })

    //Test case
    it('Perform login and logout', function(){
        indexFunctions.performValidLogin(cy, targets.username, targets.password,'Tester Hotel Overview' )
        dashboardFunctions.performLogout(cy, 'Login')
    })

    it('Create new Client', function(){
        indexFunctions.performValidLogin(cy, targets.username, targets.password,'Tester Hotel Overview' )
        cy.percySnapshot('dashboard-page')
        client.goToClientPage()
        client.newClient()
        dashboardFunctions.performLogout(cy, 'Login')
    })
    it('Edit Client', function(){
        indexFunctions.performValidLogin(cy, targets.username, targets.password,'Tester Hotel Overview' )
        client.goToClientPage()
        client.editClient()
        client.checkOnClientPage()
        dashboardFunctions.performLogout(cy, 'Login')
    })
    it('Delete Client',function(){
        indexFunctions.performValidLogin(cy, targets.username, targets.password,'Tester Hotel Overview' )
        client.goToClientPage()
        client.deleteClient()
        client.checkOnClientPage()
        dashboardFunctions.performLogout(cy, 'Login')

     })
     it('Create new Room',function(){
        indexFunctions.performValidLogin(cy, targets.username, targets.password,'Tester Hotel Overview' )
        room.goToRoomPage()
        room.newRoom()
        dashboardFunctions.performLogout(cy, 'Login')
     })
     it('Create new Bill',function(){
        indexFunctions.performValidLogin(cy, targets.username, targets.password,'Tester Hotel Overview' )
        bill.goToBillPage()
        bill.newBill()
        dashboardFunctions.performLogout(cy, 'Login')
     })

    
})

