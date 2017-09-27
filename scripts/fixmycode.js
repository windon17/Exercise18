$(document).ready(function() {

    $("#btnAddNumbers").on("click", function() {
        /*
            Retrieve the numbers from the input fields
        */
        var firstNumber = $("#txtFirstNumber").val();
        var secondNumber = $("#txtSecondNumber").val();
        
        /*
            Add the two numbers together
        */
        var sum = Number(firstNumber) + Number(secondNumber);
console.log(sum);
        /*
            If our sum is greater than 10. Add a blue class to the input.
            If our sum is less than 10, add a red class
        */
        var thirdNumber = $("#txtThirdNumber").val();
        if (sum > 10){
            $("#txtThirdNumber").addClass("blue");
            $("#txtThirdNumber").removeClass("red");
        }else{
            $("#txtThirdNumber").addClass("red");
            $("#txtThirdNumber").removeClass("blue");
        }

        if (sum === 10){
            $("#txtThirdNumber").removeClass("red");
            $("#txtThirdNumber").removeClass("blue");
        }

        /*
            Update the third input field with our value.
        */
        $("#txtThirdNumber").val(sum);
    });



});