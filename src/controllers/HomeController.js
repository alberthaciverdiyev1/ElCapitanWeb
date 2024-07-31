function Index(req, res) {
    res.render('layouts/main', {
        title: 'Home Page',
        body: '../home/index'
    });
}

module.exports = {
    Index

};
