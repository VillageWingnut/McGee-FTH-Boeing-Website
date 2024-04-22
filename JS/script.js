function display() { 
    var checkRadio = document.querySelector(
        'input[name="historyPoll"]:checked');
     
    if(checkRadio != null) {
        document.getElementById("airbus", "mcDon", "lockMart", "panAm", "twa").innerHTML
            = checkRadio.value
    }
    else {
        document.getElementById("disp").innerHTML
            = "No option selected";
    }
}