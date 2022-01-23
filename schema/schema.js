const {Schema, model} = require("mongoose");

const raspSchema = new Schema(
    {
        state_button: {
            type: String,
            required: [true, "state field is required"],
        },
        state_name: {
            type: String,
            required: [true, "name field is required"],
        },
    },
    {timestamps: true}
);

module.exports = model("rasp", raspSchema);
