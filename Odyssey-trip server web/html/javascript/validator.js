//Agree to terms and conditions if no disabeld button submit
$(document).ready(function() {
    document.getElementById("invalidCheck").addEventListener("click", () => {
        if(document.getElementById("invalidCheck").checked) {
            disabledOff();
        }
        else {
            disabledOn();
        }
    });
});

//disabled button with id submit_form
function disabledOn() {
    document.getElementById("submit_form").disabled = true;
}

//active button with id submit_form
function disabledOff() {
    document.getElementById("submit_form").disabled = false;
}

//change page
function changePage() {
    alert("payment processing");
    window.location.href = "paymentCompleted.html";
    return false;
}