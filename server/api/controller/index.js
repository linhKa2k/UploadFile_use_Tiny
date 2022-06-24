const ItemModel = require("../model/index");
const fs = require("fs/promises");
const path = require("path");
exports.getItem = async (req, res) => {
  try {
    let listItem = await ItemModel.find();
    res.json({ listItem: listItem, message: "Get Items successfully!" });
  } catch (error) {
    res.send({ error: error.message });
  }
};
exports.addTiny = async (req, res) => {
  try {
    let file = req.files;
    let arrImg = [];
    let arrNameImg = [];
    for (let i = 0; i < file.length; i++) {
      let url = `http://localhost:3001/` + file[i].filename; 
      arrImg.push(url);
      arrNameImg.push(file[i].filename);
    }
    res.json({
      arrImg,
      arrNameImg,
      message: " Images were successfully added!",
    });
  } catch (error) {
    res.send({ error: error.message });
  }
};
exports.addItem = async (req, res) => {
  try {
    let { title, content, arrNameImg } = req.body;
    let listItem = await ItemModel.create({
      title: title,
      content: content,
      arrNameImg: arrNameImg,
    });
    res.json({
      listItem: listItem,
      message: " Items were successfully added!",
    });
  } catch (error) {
    res.send({ error: error.message });
  }
};
exports.deleteItem = async (req, res) => {
  try {
    let id = req.params.id;
    let listItem = await ItemModel.findByIdAndDelete(id);
    let nameImg = listItem.arrNameImg;
    for (let i = 0; i < nameImg.length; i++) {
      fs.unlink(path.join(`uploads/${nameImg[i]}`));
    }
    res.json({
      listItem: nameImg,
      message: " Items were successfully deleted!",
    });
  } catch (error) {
    res.send({ error: error.message });
  }
};
exports.updateItem = async (req, res) => {
  try {
    let { id, title, content } = req.body;
    let listItem = await ItemModel.findByIdAndUpdate(
      id,
      { title: title, content: content },
      { new: true }
    );
    res.json({
      listItem: listItem,
      message: " Items were successfully updated!",
    });
  } catch (error) {
    res.send({ error: error.message });
  }
};
exports.searchItem = async (req, res) => {
  try {
    let textSearch = req.query.textSearch;
    let listItem = await ItemModel.find({
      title: { $regex: textSearch, $options: "i" },
    });
    res.json({ listItem: listItem, message: "Get Items successfully!" });
  } catch (error) {
    res.send({ error: error.message });
  }
};
