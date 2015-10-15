function palCheck(){
	var pal = document.getElementById("input");
	var length = pal.length;
	var yes = true;
		
	while(yes){
	for(var i = 0; i < pal.length; i++){
		if(pal.charAt(i) === ' '){
			i++;
		}
		if(pal.charAt(length-1) === ' '){
			length--;
		}
		if(pal.charAt(i) === pal.charAt(length - 1)){
			length--;
		}
		else {
			yes = false;
		}
	}
	if(!yes){
		pal.innerHTML="Not a palindrome";
	}
	else {
		pal.innerHTML="That is a palindrome!";
		yes = false;
	}
	}
	
}
	
	
	