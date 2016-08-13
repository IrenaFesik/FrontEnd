function cut(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 3) + '...';
    }
    return str;
}
alert( cut("Предложение может занимать много места.", 20) );