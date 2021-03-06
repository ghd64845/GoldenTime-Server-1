const express = require('express');
const authController = require('../controllers');
const { upload } = require('../lib/multerMiddleware');
const passport = require('passport');

const router = express.Router();
router.post('/signup', authController.auth.signUp);
router.post('/signin', authController.auth.signIn);
router.post('/google', authController.auth.google);
router.post('/kakao', authController.auth.kakao);
router.get(
  '/userinfo',
  passport.authenticate('jwt', { session: false }),
  authController.auth.userInfo,
);
router.post(
  '/signout',
  passport.authenticate('jwt', { session: false }),
  authController.auth.signOut,
);
router.patch(
  '/modifieduser',
  passport.authenticate('jwt', { session: false }),
  upload.single('img'),
  authController.auth.modifiedUser,
);
router.post(
  '/modifiedPassword',
  passport.authenticate('jwt', { session: false }),
  authController.auth.modifiedPassword,
);

module.exports = router;
