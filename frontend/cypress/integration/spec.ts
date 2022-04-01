///<reference types="cypress"/>

//import Chance from 'chance';
//const chance = new Chance();

describe('login', ()=>{
//const email = chance.email();

  beforeEach(()=>{
    cy.visit('http://localhost:4200/Home');
  })

  it('has a title',()=>{
    cy.contains('Watching movies is fun');
  })
});

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
  const password = "burger1244";
  const fname = string;
  const lname = string;

  it('New Instructor should be able to register', ()=>{
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
 // cy.visit('/Home');
  it('Instructor should be able to login', ()=>{

    cy.visit('/Home');
    cy.get('[name=loginbutton]').click();
    cy.get('[formControlName="username"]').type(`${username}`);
    cy.get('[formControlName="password"]').type(`${password}`);
    cy.get('[name=login]').click();
    sleep(1000);
  //  cy.getLocalStorage('ACCESS_TOKEN').then((token) => {
      //  console.log(token);
    })
    //cy.getLocalStorage('ACCESS_TOKEN');
    
});



