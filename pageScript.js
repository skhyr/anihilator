try{

	var original = RegExp.prototype.test;
RegExp.prototype.test = function (s) {
	if (this.toString().includes("native code") && this.toString().includes("function")) {
		//all is fine man just continue
		return true;
	}
	
	var r = original.call(this, s);
	return r;
};
document.hasFocus = () => true;

	window.postMessage({action: 'GOT_DUCK', payload: true}, '*');
}catch(error){
	window.postMessage({action: 'GOT_DUCK', payload: false}, '*');
}
