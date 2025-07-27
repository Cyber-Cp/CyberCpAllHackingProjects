// function greet() {
//     let name = document.getElementById("nameInput").value;
//     document.getElementById("message").innerHTML = "Hello " + name;
// }
document.addEventListener("DOMContentLoaded", function() {
    window.greet = function() {
        let name = document.getElementById("nameInput").value;
        document.getElementById("greeting").innerHTML = "Hello, " + name;
        console.log("User input:", name);
    };
});


