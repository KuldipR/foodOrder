const Menu = require("../Model/menu");

exports.getAllMenu = async (req, res) => {
  try {
    const allMenus = await Menu.find();
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

exports.deleteMenu = (req, res) => {
  res.status(200).json({});
};
