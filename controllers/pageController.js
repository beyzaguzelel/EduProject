exports.getIndexPage = (req, res) => {
    res.render('index');
}


exports.getCoursesPage= (req, res) => {
    res.render('courses');
}

exports.getRegisterPage= (req, res) => {
    res.render('register');
}


exports.getLoginPage= (req, res) => {
    res.render('login');
}