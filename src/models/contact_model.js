import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    name:{
        type: String,
        require: [true, "Name is required!!"],
        trim: true,
        minLength: [2, "Name Must be more then 2 character."],
        maxLength: [50, "Name Must be less then 50 character."],
    },

    email:{
        type: String,
        require: [true, "Please provide a vaild email"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid email address"],    
    },

    subject:{
        type: String,
        require: [true, "Please tell us. Your writing about?"],
        trim: true,
        minLength: [5, "Make your subject line more then 5 char."],
        maxLength: [80, "Make your subject line less then 80 char long"],
    },

    message: {
        type: String,
        require: true,
    },

    date:{
        type: Date,
        default: Date.now,
    }
});

const ContactUser = mongoose.model('contactfrom_model', contactSchema);

export default ContactUser;
