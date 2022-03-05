

function sleep(milliseconds:any) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

describe('Instructor login pg', () => {
  var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
  var string = '';
  for(var ii=0; ii<8; ii++){
      string += chars[Math.floor(Math.random() * chars.length)];
  }

  const username = string + '@gmail.com';
  const password = "burger1244"

  it('New Instructor should be able to register', ()=>{
      cy.visit('/Signup');
      // cy.get('[name=registerlabel]').click();
      cy.get('div[role=tab]').eq(1).click();
      cy.get('[name=newUsername]').type(`${username}`);
      cy.get('[name=newPassword]').type(`${password}`);
      cy.get('[name=registerbutton]').click();


  })
});