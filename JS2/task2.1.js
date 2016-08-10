var userName = prompt ('Введите Login', '');
if (userName == 'admin') {
    var pass = prompt('Введите пароль', '');
    if (pass == 'password') {
        alert('Welcome home!');
    } else if (pass == null) {
    alert('Canceled');
    } else {
    alert('Wrong password');
    }
} else if (userName == null) {
    alert('Canceled');
} else {
    alert('Access denied');
}