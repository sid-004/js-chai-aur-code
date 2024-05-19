const accountId = 12345
let accountEmail = "swayan@google"
var accountPassword = "111111"
accountCity = "Jaipur"

// accountId = 2 --> not allowed as this dataType is constant

accountEmail = "sid@google"
accountCity = "Bengaluru"
accountPassword = "222222"


/* 
    Now we do not use "var", we use "let" for variable. There is some
    issur in scope in "var".
*/

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity])