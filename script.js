//your JS code here. If required.
let n=prompt(); 
n=Number(n);
let s=""
for(let i=1;i<=n;i++){
 // s=""
	if(i%3 && i%5==0){
		s=s+"FizzBuzz"+"\n";
	}else
	if(i%3==0){
		s=s+"Fizz"+"\n";
	}else
	if(i%5==0){
		s=s+"Buzz"+"\n";
	}
	
}
alert(s);
