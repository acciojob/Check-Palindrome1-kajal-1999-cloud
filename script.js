// complete the given function
function palindrome(str){
	// changing all cases in lower case
	var newstr = str.toLowerCase(str) ;
	// removing spaces from the sentences
	var removedSpaces = newstr.replace(/\s/g, "");
	let i = 0 ;
	let j = removedSpaces.length-1 ;
	while(i<j){
		if(removedSpaces.charAt(i) === removedSpaces.charAt(j)){
			i++;
			j--;
		}
		else{
			return false ;
		}
	}
	return true ;
}
module.export = palindrome ;