function Index(req, res) {
    res.render('layouts/main', {
        // title: 'Home Page',
        body: `<%- include('../home/index') %>`
    });
}



module.exports = {
    Index
    
};
