
// Defining master set of characters in a object of arrays 
let masterChar = {
    alphaChar: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"],
    capitalAlphaChar: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    numberChar: [1,2,3,4,5,6,7,8,9,0],
    specialChar: ["#","$","*"]
    }

let fp="";
let fp1;
let fp2;
let fp3;
let fp4;

// Getting reference of password blocks to be displayed 
let password1El = document.getElementById("password1");
let password2El = document.getElementById("password2");
let password3El = document.getElementById("password3");
let password4El = document.getElementById("password4");

// let randPasswords1;
// let randPasswords2;
// let randPasswords3;
// let randPasswords4;

// Generating passwords function
function displayPassword() 
{ 

let finalPasswordLength = 8;


for ( let i=0; i<finalPasswordLength; i++ )
{
    
    // Choose randomly anything from alpha to special 
    let chooseArrayIndice = Math.floor(Math.random()*4);

    if ( chooseArrayIndice === 0 )
        { fp+= masterChar.alphaChar[Math.floor(Math.random()*26)]; }

             else 

                 if ( chooseArrayIndice === 1 ) { fp+= masterChar.capitalAlphaChar[Math.floor(Math.random()*26)]; } 
            
                    else 

                         if ( chooseArrayIndice === 2 ) { fp+= masterChar.numberChar[Math.floor(Math.random()*10)]; }

                            else 
                                if ( chooseArrayIndice === 3 ){ fp+= masterChar.specialChar[Math.floor(Math.random()*3)]; }


}

return fp;
}
// Displaying passwords 

// password1El.textContent="1234567891234567";
// password2El.textContent="1234567891234567";
// password3El.textContent="1234567891234567";
// password4El.textContent="1234567891234567";

function clearPassword()
{ fp=""; }


fp1 = displayPassword();
clearPassword();
fp2 = displayPassword();
clearPassword();
fp3 = displayPassword();
clearPassword();
fp4 = displayPassword();
clearPassword();

function generatePassword()
{
password1El.textContent=fp1;
password2El.textContent=fp2;
password3El.textContent=fp3;
password4El.textContent=fp4;
}