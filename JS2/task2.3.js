var name = 'admin', text;
text = (name == 'admin') ? 'Hi' :
    (name == 'manager') ? 'Hello' :
        (name == '') ? 'No login' : '';

/*if (name == 'admin') {
    text = 'Hi';
} else if (name == 'manager') {
    text = 'Hello';
} else if (name == '') {
    text = 'No login';
} else {
    text = '';
}*/
alert(text);