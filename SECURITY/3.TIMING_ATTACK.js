
// solution use crypto
import crypto from "crypto"

export function checkToken(userSupplied){
    const account = accont.retreiveToken(userSupplied)
    if(account){

    if(crypto.timingSafeEqual(account.service.token , user.service.token)){
        return true;
    }
    }
    return false;
}

// SOLUTION: crypto.timingSafeEqual(firstValue, secondValue)
// Note: === equals compare string char by char so attacker may note the
//           difference in time for compare and can guess the whole token.
