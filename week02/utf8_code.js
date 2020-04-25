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

function char_utf8(ch) {
    utf8 = ch.charCodeAt().toString(16)
    return "\\u"+utf8
}
