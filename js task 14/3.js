sayHi();
function sayHi() {
    console.log("Function Declaration is hoisted");
}

var greetUser = function() {
    console.log("Function Expression is not fully hoisted");
};
greetUser();