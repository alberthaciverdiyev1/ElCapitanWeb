function Index(req, res) {
    res.render('layouts/main', {
        title: 'Dashboard',
        body: '../dashboard/index'
    });
}

module.exports = {
    Index

};
