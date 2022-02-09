const express=require('express');
const pageController=require('../controllers/pageController');

const router=express.Router();

router.route('/').get(pageController.getIndexPage);
router.route('/meetings').get(pageController.getMeetingsPage);
router.route('/meeting-details').get(pageController.getMeetingDetailsPage);


module.exports=router;