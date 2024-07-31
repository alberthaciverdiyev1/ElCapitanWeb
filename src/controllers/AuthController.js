function Login(req, res) {
    res.render('layouts/main', {
        title: 'Login',
        body: '../auth/login'
    });
}
function Register(req, res) {
    res.render('layouts/main', {
        title: 'Register',
        body: '../auth/register'
    });
}

module.exports = {
    Register,
    Login
};
