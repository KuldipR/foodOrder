const express = require(`express`);
const menuController = require("../Controllers/menuController") 
const router = express.Router();

router.param(`id`,(req,res,next,val)=>{

})
router.route("").get(menuController.getAllMenu).post(menuController.newMenu)
router.route("/:id").patch(menuController.updateMenu).delete(menuController.deleteMenu);

module.exports = router;
