function convertNumberToString(number, radix = 10) {
    var integer = Math.floor(number);
    var fraction = number - integer;
    var res = '';
    while (integer>0) {
        res = String(integer % radix) + res;
        integer =  Math.floor( integer / radix);
    }
    let limit = 10;
    if (fraction>Math.pow(10,-limit)){
        res += ".";
        fraction *= Math.pow(10, limit);
        fraction = Math.floor(fraction);
        res += convertNumberToString(fraction, radix).replace(/0+$/,'');
    }
    return res
}
