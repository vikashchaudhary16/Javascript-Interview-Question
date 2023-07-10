const debounce = function(fn,d){
	let timer;
	return function () {
		let context = this;
		args= arguments;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(context,args);
        },d)
	}
}

const throttle = function(fn,limit){
	let flag=true;
	return function () {
		let context = this;
		args= arguments;
        if(flag){
            fn.apply(context,args);
            flag=false;
            setTimeout(()=>{
                flag=true;
            },limit)
        }
	}
}

const getData = () =>{
    console.log("Fetching Data");
}

debounce(getData,3000);