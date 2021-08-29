const birthdate = document.querySelector("#birthdayInput")
const luckyNo = document.querySelector("#luckyNumber")
const button = document.querySelector('#checkButton')
const luckyText = document.querySelector("#lucky-text")

// check DOB is lucky function
function checkValues(sum, luckyNo){
    
    if(sum>0 && luckyNo>0){
        if(sum%Number(luckyNo)===0){
            luckyText.innerText = "Hurray! your birthday is lucky 🥳🎉"
            luckyText.style.color = "#fff"
        }else{
            luckyText.innerText = "Opps.. your birthday is not so lucky 🙁🥺"
            luckyText.style.color = "#fff"
        }
    }else{
        luckyText.innerText = "Plz enter a valid input"
        luckyText.style.color = "#fff"
    }
   
}

// Taking input from user
function birthdateIsLucky(){
    const dateOB = birthdate.value;
    // console.log(dateOB)
    const sum = calculateSum(dateOB)
    console.log(sum);
    checkValues(sum, luckyNo.value)
    
}

function calculateSum(dateOB){
    // sum of DOB
   dateOB = dateOB.replaceAll("-","")
   let sum=0;
   for(let i=0; i<dateOB.length; i++){
       sum = sum + Number(dateOB.charAt(i));
   }
   return sum
}
// button click
button.addEventListener("click", birthdateIsLucky)
