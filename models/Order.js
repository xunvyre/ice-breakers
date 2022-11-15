const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Order extends Model {}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    products: [
      {
        productId: { type: DataTypes.STRING },
        quantity: { type: DataTypes.NUMBER, default: 1 },
      },
    ],
    subtotal: { type: DataTypes.NUMBER, required: true },
    total: { type: DataTypes.NUMBER, required: true },
    // shipping: { type: DataTypes.JSON, required: true },
    // delivery_status: { type: DataTypes.STRING, default: "pending" },
    payment_status: { type: DataTypes.STRING, required: true }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "orders",
  }
);

module.exports = Order;
