function convertStringToNumber(string, radix=10) {
    let target = string
    let epoint = target.search(/(e)/i)
    
    if(epoint>=0){
        target = target.substring(0, epoint)
    }
    let chars = target.split('');
    let number =  0;
    let pointIndex = -1;
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] == '.') {
            pointIndex = i
            break;
        }
        number = number * radix
        number += chars[i].codePointAt(0) - '0'.codePointAt(0);
    }
    if (pointIndex!=-1){
        let fraction = 0;
        for (let i = chars.length-1; i > pointIndex; i--) {
            temp = chars[i].codePointAt(0) - '0'.codePointAt(0);
            fraction += temp;
            fraction /= radix;
        }
        number += fraction;
    }
    if(epoint>0){
        let p = convertStringToNumber(string.substring(epoint+1), radix);
        number = number * Math.pow(radix, p)
    }
    return number
}
