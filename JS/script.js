function checkPoll() {
    // Get all radio buttons with the name "historyPoll"
    var radios = document.getElementsByName("historyPoll");
    var formValid = false;

    // Loop through each radio button
    for (var i = 0; i < radios.length; i++) {
        // If a radio button is checked, set formValid to true and break the loop
        if (radios[i].checked) {
            formValid = true;
            break;
        }
    }

    // If no radio button is checked, display an alert
    if (!formValid) {
        alert("Please select an option before submitting.");
    }
}