const Course = require('../models/Course');
const User = require('../models/User');

exports.getIndexPage = async (req, res) => {
     
  const totalCourses = await Course.find().countDocuments();
  const totalStudents = await User.countDocuments({role: 'Student'});
  const totalTeachers = await User.countDocuments({role: 'Teacher'});
    res.render('index',{
        totalCourses,
        totalStudents,
        totalTeachers});
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