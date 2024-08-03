function Index(req, res) {
    res.render('layouts/main', {
        title: 'Dashboard',
        body: '../dashboard/index'
    });
}
function Setting(req, res) {
    res.render('layouts/main', {
        title: 'Settings',
        body: '../dashboard/setting'
    });
}
function Messages(req, res) {
    res.render('layouts/main', {
        title: 'Messages',
        body: '../dashboard/messages'
    });
}

module.exports = {
    Index,
    Setting,
    Messages
};
