function Index(req, res) {
    res.render('layouts/main', {
        title: 'Services',
        body: '../services/index'
    });
}
function Details(req, res) {
    res.render('layouts/main', {
        title: 'Details',
        body: '../services/details'
    });
}

module.exports = {
    Index,
    Details
};
