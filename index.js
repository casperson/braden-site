var app = angular.module('app', []);

app.controller('BradenController', function ($scope) {
//    var vm = this;
    $scope.showPalindrome = false;
    $scope.showHome = true;
    $scope.palindromeInput = "";
    
    // function to check for a palindrome without splitting the string 
    // in an array and the using Array.reverse()
    $scope.palCheck = function() {
        var length = $scope.palindromeInput.length;
        var yes = true;

        while(yes) {
            for(var i = 0; i < length; i++){
                if($scope.palindromeInput.charAt(i) === ' '){
                    i++;
                }
                if($scope.palindromeInput.charAt(length-1) === ' '){
                    length--;
                }
                if($scope.palindromeInput.charAt(i) === $scope.palindromeInput.charAt(length - 1)){
                    length--;
                }
                else {
                    yes = false;
                }
            }
            if(!yes){
                $scope.palindromeResults = "Not a palindrome";
            }
            else {
                $scope.palindromeResults = "That is a palindrome!";
                yes = false;
            }
	   }
    }
	
});