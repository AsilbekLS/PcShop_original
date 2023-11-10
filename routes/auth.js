const { Router } = require("express")

const router = Router()
const users = require('../config/user')


router.get("/", (req,res) => {
    res.json({ me: users});
});



async function findbUsername(username){
    const user = users.filter((user)=>user.name ===username)

    return user[0]
}

//login uchun router
router.post('/login', async(req,res)=>{


    const user = await findbUsername(req.body.username)

    if(!user){
        return res.status(400).json(
            {mesange:"Salom ohshadi a stop prosto hazil odi ilib tashabsan"
        }     )
    }

    const age = await user.age === req.body.age

    if(!age){
        return res.status(400).json(
            {mesange:"Parol Hato"
        }     )
    }
return res.status(200).json({
    mesange:'salom ohshadi',
    user
})


})

