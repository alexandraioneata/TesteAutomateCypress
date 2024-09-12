describe('Google Search', ()=>{

//Testul 1
    it('I can search on Google', () =>{


    cy.visit('https://google.com');
    cy.get('#L2AGLb').click(); // apasa butonul "Accepta tot", daca selectorul este id folosim # in fata lui

    cy.get('.gLFyf').type('Cypress').type('{enter}');       // daca selectorul este o clasa, punem in fata lui . && type('{enter}') - apasa tasta enter
    
    
    })

    //Testul 2
    it('I can see Google logo', () =>{


        cy.visit('https://google.com');
        cy.get('#L2AGLb').click();
       
        cy.get('[alt="Google"]').should('be.visible'); // selector atribut alt 
               
        })

   //Testul 3
   it('Screenshot', () =>{

    cy.visit('https://google.com');
    cy.get('#L2AGLb').click();

    cy.screenshot();  //screenshot
         
    })

    //Testul 4
    it('Verify input', () =>{


        cy.visit('https://google.com');
        cy.get('#L2AGLb').click(); // apasa butonul "Accepta tot", daca selectorul este id folosim # in fata lui
    
        const googleSearch = cy.get('.gLFyf');

        googleSearch.type('123');
        googleSearch.should('have.value','123'); //verify if the value 123 is in the search bar
        
        })

        
    
})