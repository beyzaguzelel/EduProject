exports.getIndexPage = (req, res) => {
    res.render('index');
}
  
  exports.getMeetingsPage = (req, res) => {
    res.render('meetings');
}

exports.getMeetingDetailsPage = (req, res) => {
    res.render('meeting-details');
}

exports.getCoursesPage= (req, res) => {
    res.render('courses');
}