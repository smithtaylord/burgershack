import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js";
import { fakeDb } from "../db/FakeDB.js";

class BurgersService {
    deleteBurger(burgerId) {
        let foundBurgerIndex = fakeDb.burgers.findIndex(b => b.id == burgerId)
        if (foundBurgerIndex == -1) {
            throw new BadRequest('Bad Burger Id')
        }
        const deletedBurger = fakeDb.burgers.splice(foundBurgerIndex, 1)
        return deletedBurger[0]
    }
    getBurgerById(burgerId) {
        const burger = fakeDb.burgers.find(b => b.id == burgerId)
        if (!burger) {
            throw new BadRequest('Bad Burger Id')
        }
        return burger
    }
    updateBurger(burgerId, burgerData) {
        let foundBurger = fakeDb.burgers.find(b => b.id == burgerId)
        if (!foundBurger) {
            throw new BadRequest('Bad Burger Id')
        }
        if (!burgerData.name || !burgerData.price) {
            throw new BadRequest('Invalid Burger Data')
        }
        foundBurger.name = burgerData.name
        foundBurger.price = burgerData.price

        return foundBurger

    }
    createBurger(rawBurgerData) {
        if (!rawBurgerData.name || !rawBurgerData.price) {
            throw new BadRequest('Invalid Burger Data')
        }
        rawBurgerData.id = (Math.floor(Math.random() * 100200300) + 'burger' + Math.floor(Math.random() * 900000090))
        fakeDb.burgers.push(rawBurgerData)
        return rawBurgerData
    }
    getAllBurger() {
        return fakeDb.burgers
    }

}
export const burgersService = new BurgersService();