function stringRotate(a, b) {
	if(b<0 || isNaN(b)){
		return "";
	}
	if(b>a.length){
		b=b%a.length;
	}
	
	const text=a.substr(b);
	return text + a.slice(0, b);
}