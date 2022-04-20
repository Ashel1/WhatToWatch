///<reference types="cypress"/>

  function sleep(milliseconds:any) {
      var start = new Date().getTime();
      for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
          break;
        }
      }
    }
  
  describe('login pg', () => {
    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var string = '';
    for(var ii=0; ii<8; ii++){
        string += chars[Math.floor(Math.random() * chars.length)];
    }
  
    const username = string + '@gmail.com';
    const password = "watch123";
    const fname = string;
    const lname = string;
  
    /*it('New user should be able to register', ()=>{
        cy.visit('/Signup');
        // cy.get('[name=registerlabel]').click();
        //cy.get('div[role=tab]').eq(1).click();
        cy.get('[formControlName=firstname]').type(`${fname}`);
        cy.get('[formControlName=lastname]').type(`${lname}`);
        cy.get('[formControlName=username]').type(`${username}`);
        cy.get('[formControlName=email]').type(`${username}`);
        cy.get('[formControlName=password]').type(`${password}`);
        cy.get('[name=register]').click();
    })
  
    it('User should be able to login', ()=>{
  
      cy.visit('/Home');
      cy.get('[name=loginbutton]').click();
      cy.get('[formControlName=username]').type(`${username}`);
      cy.get('[formControlName=password]').type(`${password}`);
      cy.get('[name=login]').click();
      })*/
      
      it('User should be able to answer questions', ()=>{
        cy.visit('/Home');
        cy.get('[name=ques]').click();
        cy.get('[type="radio"]').eq(0).check({ force: true })
        cy.contains('Next').click();
        cy.get('mat-selection-list').get('mat-list-option').contains('Netflix').click();
        cy.contains('Next').click();
        cy.get('[type="radio"]').eq(0).check({force: true});
        cy.contains('Next').click();
        cy.get('[type="radio"]').eq(1).check({force: true});
        cy.contains('Next').click();
        cy.get('[type="radio"]').eq(3).check({force: true});
        cy.contains('Next').click();
        cy.get('[type="radio"]').eq(2).check({force: true});
        cy.contains('Next').click();   
        })
  
        it('User should be able to view recommended movie', ()=>{
        sleep(8000);
        cy.get('#movie-card').click('bottomLeft', { force: true });
        })
  
        it('User should be able to view the movie overview', ()=>{
          sleep(8000);
          cy.get('#movie-card').click('bottomLeft', { force: true });
        })
  
        it('User should be able to view another recommended movie', ()=>{
          sleep(8000);
          cy.contains('Get another').click();
        })
  
        it('User should be able to view another recommended movie', ()=>{
          sleep(8000);
          cy.get('#movie-card').click('bottomLeft', { force: true });
        })
        
        it('User should be able to view movie details', ()=>{
          sleep(8000);
          cy.get('#movie-card').contains('More').click({ force: true });
        })
  });
  