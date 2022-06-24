const ItemController = require("../controller/index")

const Routes = (app) => {
    app.route("/items").get(ItemController.getItem).post(ItemController.addItem).put(ItemController.updateItem)
    app.route("/image-tiny").post(ItemController.addTiny)
    app.route("/items/:id").delete(ItemController.deleteItem)
    app.route("/search").get(ItemController.searchItem)
}
module.exports = Routes