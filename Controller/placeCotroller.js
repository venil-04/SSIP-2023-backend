const PlaceSchema = require("../Model/Place")


exports.addPlace = async(req,res,next)=>{
    const data = req.body;
    const Place = await PlaceSchema.create(data);

    res.status(201).json({
        success:true,
        Place
    })
}

exports.updatePlace = async(req,res,next)=>{
    const data = req.body
    const Place = await PlaceSchema.findByIdAndUpdate(req.params.Id,data,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(201).json({
        success:true,
        Place,
    })
}

exports.deletePlace = async(req,res,next)=>{
    const Place = await PlaceSchema.findByIdAndDelete(req.params.Id)
    res.status(201).json({
        success:true
    })

}