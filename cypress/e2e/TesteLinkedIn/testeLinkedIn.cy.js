describe('OnLinkedIn', ()=>{

    //Testul 1
        it('I can Login', () =>{
    
    
        cy.visit('https://www.linkedin.com/');
            
        cy.get('.nav__button-secondary').click();
        // not the real credentials
        cy.get('#username').type('alexandra'); 
        cy.get('#password').type('123456');
        cy.get('.btn__primary--large').click();
        })

        //Test worked with the real credentials
    
    
    })