const contactController = {
    index: (req, res) => {
        //
        res.render('contact');
    },
    sent: (req, res) => {
        //
        res.redirect('/');
    }
}

module.exports = contactController;