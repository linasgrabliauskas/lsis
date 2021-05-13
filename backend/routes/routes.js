const router = require('express').Router()

// Controllers
const UserController = require('../user/userController')
const formalController = require('../formal/formalController')
const informalController = require('../informal/informalController')

// Middlewares
const UserMiddleware = require('../user/auth')

// User routes
router.post('/user/signup', UserController.signUp)
router.post('/user/login',  UserController.login)
router.get('/user/logout', UserMiddleware.authenticate, UserController.logout)


// Formal Entity routes
router.get('/formal', formalController.getAllFormalEntities)
router.get('/formal/page/:page', formalController.getFormalEntities)
router.get('/formal/:id', formalController.getFormalEntity)
router.post('/formal/filter', formalController.filterFormalEntities)
// Formal Entity routes -- Admin only
router.post('/formal', UserMiddleware.authenticate, formalController.postFormalEntity)
router.delete('/formal/:id', UserMiddleware.authenticate, formalController.deleteFormalEntity)
router.patch('/formal/:id', UserMiddleware.authenticate, formalController.updateFormalEntity)


// Informal Entity routes
router.get('/informal', informalController.getAllInformalEntities)
router.get('/informal/page/:page', informalController.getInformalEntities)
router.get('/informal/:id', informalController.getInformalEntity)
router.post('/informal/filter', informalController.filterInformalEntities)
// Informal Entity routes -- Admin only
router.post('/informal', UserMiddleware.authenticate, informalController.postInformalEntity)
router.delete('/informal/:id', UserMiddleware.authenticate, informalController.deleteInformalEntity)
router.patch('/informal/:id', UserMiddleware.authenticate, informalController.updateInformalEntity)


module.exports = router
