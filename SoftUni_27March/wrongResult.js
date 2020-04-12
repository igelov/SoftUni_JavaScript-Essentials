function wrongResult(numOne, numTwo, numThree) {
    let result = '';
//SOLUTION 1//
/*    if (numOne >= 0 && numTwo >= 0 && numThree >= 0) {
        result = "Positive";
    }
    else if(numOne <= 0 && numTwo <= 0 && numThree <= 0) {
        result = "Negative";
    }
    else if (numOne <= 0 && numTwo <= 0) {
        result = "Positive";
    }
    else if (numTwo <= 0 && numThree <= 0) {
        result = "Positive";
    }
   else if (numOne <= 0 && numThree <= 0) {
        result = "Positive";
    }
    else{
        result = "Negative";
    }*/
//SOLUTION 2//
    if((numOne*numTwo*numThree)>=0){
        result = "Positive";
    }
    else{
        result = "Negative";
    }
    console.log(result);
}
wrongResult(5,12,-15);