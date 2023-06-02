// complete the given function

// complete the given function

function palindrome(str){
	let newstr=str.toLowerCase(str);
	let strwithoutspace=newstr.replace(/\s/g, "");
	let i=0;
	let j=strwithoutspace.length-1;
	while(i<j){
		if(strwithoutspace.charAt(i)==strwithoutspace.charAt(j)){
			i++;
			j--;
		}
		else{
			return false;
		}
	}
	return true;
}
module.exports = palindrome