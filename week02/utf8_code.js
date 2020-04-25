function utf8_decode(str) {
    let res = ""
    for (const char in str) {
        if (str.hasOwnProperty(char)) {
            const element = char_utf8(str[char]);
            res += element
        }
    }
    return res
}

function char_utf8( ch ) {
    let bits = ch.codePointAt().toString(2)
    if ( bits.length < 8 ) return bits.padStart(8, '0');
    const cnt = Math.ceil((bits.length - 1) / 5)
    
    bits = bits.replace(/(?=(\B)([01]{6})+$)/g, '10');
    bits = `${'1'.repeat(byteCount)}${bits.padStart(7 * byteCount, '0')}`;
    return bits.replace(/(?=(\B)([01]{8})+$)/g, '|');
    // return "\\u"+utf8
}
