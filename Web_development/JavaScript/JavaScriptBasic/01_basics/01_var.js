const accountId = 1234
let accountEmail = "rahulyadav0296@gmail.com"
var accountPassword = "123"
accountCity = "Jaipur"

// accountId = 2  // Not Allowed
console.log(accountId);

accountEmail="abc1@gmail.com"
accountPassword = "345"
accountCity="Bhopal"
let accountState;

// console.log(accountEmail);
/* 
  Prefer not to use Var beacause of issue in block and function scope 
*/


console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);