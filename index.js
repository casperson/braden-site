var app = angular.module('app', []);

app.controller('BradenController', ['$scope', function BradenController($scope) {
    var vm = this;
    vm.showPalindrome = false;
    vm.showHome = true;
    vm.palindromeInput = "";
    
    vm.palCheck = palCheck
    
    $scope.$watch("vm.palindromeInput", function(newVal, oldVal){
//        if(vm.palindromeInput === "") {
//            vm.palindromeResults = "";
//        }
    });
    
    // function to check for a palindrome without splitting the string 
    // in an array and then using Array.reverse()
    function palCheck() {
        var length = vm.palindromeInput.length;
        var yes = true;

        while(yes) {
            for (var i = 0; i < length; i++){
                if(vm.palindromeInput.charAt(i) === ' '){
                    i++;
                }
                if(vm.palindromeInput.charAt(length - 1) === ' '){
                    length--;
                }
                if(vm.palindromeInput.charAt(i) === vm.palindromeInput.charAt(length - 1)){
                    length--;
                }
                else {
                    yes = false;
                }
            }
            if(!yes){
                vm.palindromeResults = "Not a palindrome, loser.";
            }
            else {
                vm.palindromeResults = "That is a palindrome!";
                yes = false;
            }
        }
    }
}
]);