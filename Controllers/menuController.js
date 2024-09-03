const Menu = require("../Model/menu");

exports.getAllMenu = async (req, res) => {
  try {
    const queryObj = {...req.query}
    const excludedFields = ['sort','page','limit','fields']
    excludedFields.forEach((el)=> delete queryObj[el])

    // build query
    let query =  Menu.find(queryObj);

    // SORTING

    if(req.query.sort){
      let sortBy = req.query.sort.split(",").join(" ")
       query = query.sort(sortBy)
    }else{
      query = query.sort("-createdAt")
    }
    // FIELDS
    
    if(req.query.fields){
      let fields = req.query.sort.split(",").join(" ")
      query = query.select(fields)
    }else{
      query = query.select('-__v')
    }

    // Execute query
    const allMenus = await query

    // Send Result
    res.status(200).json({
      status: "success",
      Data: allMenus,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.newMenu = async (req, res) => {
  try {
    const newMenu = await Menu.create(req.body);
    res.status(201).json({
      status: "Success",
      data: {
        menu: newMenu,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.updateMenu = async (req, res) => {
  try {
    console.log(req.params.id)
    const updatedMenu = await Menu.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        runValidators: true,
        returnOriginal: false,
      }
    );
    res.status(200).json({
      status: "success",
      Data: updatedMenu,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.deleteMenu = async (req, res) => {
  try{
    const deleteMenu = await Menu.findOneAndDelete(
      {_id: req.params.id}
    )
    if (!deleteMenu){
      return req.status(401).send("item not found")
    }
  }catch(error){

  }
  res.status(200).json({});
};
