function Index(req, res) {
    res.render('layouts/main', {
        title: 'Services',
        body: '../services/index'
    });
}

module.exports = {
    Index

};
