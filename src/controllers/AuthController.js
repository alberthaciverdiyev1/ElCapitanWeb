function Login(req, res) {
    res.render('layouts/main', {
        title: 'Login',
        body: '../auth/login',
        js: 'auth/login.js',

    });
}
function Register(req, res) {
    res.render('layouts/main', {
        title: 'Register',
        body: '../auth/register',
        js: 'auth/register.js',
    });
}

module.exports = {
    Register,
    Login
};
