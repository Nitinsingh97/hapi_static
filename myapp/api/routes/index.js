var express =require('express');
var router=express.Router();
var ctrlhotel=require("../controllers/hotelcontrolers.js");
router
 .route("/")
 . get(ctrlhotel.js);

module.exports=router;