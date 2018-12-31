const express = require('express');
const { check, body } = require('express-validator/check')

const authController = require('../controllers/AuthController');
const User = require('../models/User')

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post('/login', [
    body('email')
        .isEmail()
        .withMessage('Please enter a valid email address')
        .normalizeEmail(),
    body('password', 'Password has to be valid')
        .isLength({ min: 5, max: 100 })
        .isAlphanumeric()
        .trim()
], authController.postLogin);

router.post('/signup', [
    check('email')
        .isEmail()
        .withMessage('Please enter a valid email')
        .custom((value, { req }) => { // Validação customizada
            // if (value === 'test@test.com') {
            //     throw new Error('This email is forbidden')
            // }
            // return true;
            return User.findOne({ email: value })
                .then(user => {
                    if (user) {
                        return Promise.reject('Email exists already, please pick a different one.')
                    }
                })
        })
        .normalizeEmail(),
    body('password', 'Please enter a password with only numbers and text and at least 5 characters and max 100 characters.')
        .isLength({ min: 5, max: 100 })
        .isAlphanumeric()
        .trim(),
    body('confirmPassword')
        .trim()
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Passwords have to match')
            }
            return true;
        })
], authController.postSignup);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassowrd);

module.exports = router;