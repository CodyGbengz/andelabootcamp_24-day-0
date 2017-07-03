'use strict';

module.exports = {

 getPrimes:(range) => {
   let primes = [];

    if(typeof range === "string"){
      return 'please enter a number'
    }else if(range === 0 || range <= 1){
      return 'input a value above 1'
    }
    else{
      const isPrime = (num) => {
    if(num => 2){
      for(let counter = 2; counter < num; counter++){
         if(num % counter === 0){
            return false;
         }
       }
      return true;
     }
      return false;
     }
     for(let counter = 2; counter <= range; counter++){
         if(isPrime(counter)){
            primes.push(counter);
         }
       }
      return primes;
    }
  }

}