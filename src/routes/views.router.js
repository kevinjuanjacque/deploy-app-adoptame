import { Router } from "express";
import { petsService, usersService } from "../services/index.js";


const router = Router()


router.get('/',(req,res)=>{
    res.render('home')
})


router.get('/users',async (req,res)=>{
    const users = await usersService.getAll()
    const userMapper = users.map(user=>({first_name:user.first_name,last_name:user.last_name}))
    res.render('users',{
        users:userMapper
    })
})

router.get('/pets',async (req,res)=>{
    const pets = await petsService.getAll()
    const petsMapper = pets.map(pet=>({name:pet.name}))
    res.render('pets',{
        pets:petsMapper
    })
})

export default router
