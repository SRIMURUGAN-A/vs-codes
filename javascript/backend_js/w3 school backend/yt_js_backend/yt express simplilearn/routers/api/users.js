const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const users = require ('../../user');

router.get("/", (req, res)=>{
    res.json(users);
});



// second eg get
router.get('/:id', (req,res)=>{
    const found = users.some(user =>user.id === parseInt(req.params.id));

    if (found){
        res.json(users.filter(user => user.id ===parseInt(req.params.id)))
    }else{
        res.sendStatus(400)
    }
});


//post
router.post('/', (req, res)=>{
    const newusername ={
        "id":uuid.v4(),
        "name":req.body.name,
        "village":req.body.village
    }

    if(!newusername.name || !newusername.village){
        return res.status(400);
    }

    users.push(newusername)
    res.json(users)

});

//put/update

router.put('/:id', (req, res)=>{
    const found = users.some(user => user.id === parseInt(req.params.id));

   if(found){
    const updated_user =req.body;
    users.forEach((user) => {
        if (user.id === parseInt(req.params.id)) {
            user.name = updated_user.name ? updated_user.name : user.name
            user.village =updated_user.village ? updated_user.village : user.village
            return res.json({msg:'user updated', user});
        }else{
            return res.json({msg:'user not found', user});
        }
    })
   }
})

//delete
router.delete('/:id', (req, res)=>{
    const found = users.some((user) => user.id === parseInt(req.params.id));


    if (found) {
        const user = users.filter((user)=>user.id !== parseInt(req.params.id));
        res.json({
            msg:"user deleted",
            user,
        });
    }
});


module.exports =router