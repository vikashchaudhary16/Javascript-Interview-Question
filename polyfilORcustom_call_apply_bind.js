function printName(city, country){
    console.log( `${this.firstName} ${this.lastName}, ${city} - ${country}` );
}

const myName = {
    firstName: 'Ankit',
    lastName: 'Saxena'
};

Function.prototype.myCall = function(context, ...args){
    context.myFn = this;
    context.myFn(...args);
}

// Function.prototype.myCall = function(context, ...args){
//     let currentContext = context || globalThis;
//     let randomProp = Math.random();
//     while( currentContext[randomProp] !== undefined ){
//         randomProp = Math.random();
//     }
//     currentContext[randomProp] = this;
//     let result = currentContext[randomProp](...args);
//     delete currentContext[randomProp];
//     return result;
// }

printName.myCall(myName, "Palia", "India");

Function.prototype.myApply = function(context, args){
    context.myFn = this;
    context.myFn(...args);
}

// Function.prototype.myApply = function(context, args){
//     let currentContext = context || globalThis;
//     let uniqueProp = Math.random();
//     while( currentContext[uniqueProp] !== undefined ){
//         uniqueProp = Math.random();
//     }
//     currentContext[uniqueProp] = this;
//     let result = currentContext[uniqueProp](...args);
//     delete currentContext[uniqueProp];
//     return result;
// }

printName.myApply(myName, ["Palia", "India"]);

Function.prototype.myBind = function(...args){
    var callback = this,
        ctx = args.splice(1);
    return function(...a){        
        callback.call(args[0], ...[...ctx, ...a]);
    }
}

const result2 = printName.myBind(myName, "Palia",);
result2("India");