import { burgersService } from "../services/BurgersService.js"
import BaseController from "../utils/BaseController.js"

export class BurgersController extends BaseController {

    constructor() {
        super('api/burgers')
        this.router
            .get('', this.getAllBurgers)
            .get('/:burgerId', this.getBurgerById)
            .post('', this.createBurger)
            .put('/:burgerId', this.updateBurger)
            .delete('/:burgerId', this.deleteBurger)

    }

    getAllBurgers(req, res, next) {
        try {
            let burgers = burgersService.getAllBurger()
            res.send(burgers)
        } catch (error) {
            next(error)
        }
    }

    getBurgerById(req, res, next) {
        try {
            let burgerId = req.params.burgerId
            const burger = burgersService.getBurgerById(burgerId)
            res.send(burger)
        } catch (error) {
            next(error)
        }
    }

    createBurger(req, res, next) {
        try {
            let rawBurgerData = req.body
            let newBurger = burgersService.createBurger(rawBurgerData)
            res.send(newBurger)
        } catch (error) {
            next(error)
        }
    }

    updateBurger(req, res, next) {
        try {

            let burgerData = req.body
            let burgerId = req.params.burgerId
            let updatedBurger = burgersService.updateBurger(burgerId, burgerData)
            res.send(updatedBurger)
        } catch (error) {
            next(error)
        }

    }

    deleteBurger(req, res, next) {
        try {
            let burgerId = req.params.burgerId
            let deletedBurger = burgersService.deleteBurger(burgerId)
            res.send(deletedBurger)
        } catch (error) {
            next(error)
        }
    }

}