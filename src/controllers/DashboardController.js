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

module.exports = {
    Index,
    Setting
};
