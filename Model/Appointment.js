const mongoose =require("mongoose")

const AppointmentSchema = mongoose.Schema({
    organizationname:{
        type:String,
        required:true
    },
    organizationType:{
        type:String,
        required:true
    },

    seekerName:{
        type:String,
        required:true
    },
    seekerMobileno:{
        type:Number,
        required:true
    },
    Date:{
        type:Date,
        required:true
    },
    

})