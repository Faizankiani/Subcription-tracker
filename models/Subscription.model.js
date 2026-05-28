import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        requireed: [true, 'Name is required'],
        minlength: 3,
        maxlength: 50,
        trim: true, 
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be greater than zero'], 
        },
    duration: {
        type: Number,
        required: [true, 'Duration is required'],
        min: [1, 'Duration must be at least 1 month'],
    },
    currency : {
        type: String,
        required: [true, 'Currency is required'],
        enum: ['USD', 'EUR', 'GBP', 'INR', 'JPY'], // Allowed currencies
    },
    features : {
        type: [String],
        default: [],
    },
    frequency : {
        type: String,
        required: [true, 'Frequency is required'],
        enum: ['Monthly', 'Yearly'], // Allowed frequencies
    },
    category : {
        type: String,
        required: [true, 'Category is required'],
        enum: ['Sports', 'Entertainment', 'Education'], // Allowed categories
    },
    status : {
        type: String,
        required: [true, 'Status is required'],
        enum: ['Active', 'Inactive'], // Allowed statuses
    },
    startDate : {
        type: Date,
        required: [true, 'Start date is required'],
        Validate : {
            validator: function(value){
                return value > new Date(); // Start date must be in the future
            },
            message: 'Start date must be in the future',
        }
    },
    renewalDate : {
        type: Date,
        required: [true, 'Renewal date is required'],
        validate: {
            validator: function(value){
                return value > this.startDate; // Renewal date must be after start date
            },
            message: 'Renewal date must be after start date',
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User is required'],
    }
}, {
    timestamps: true,
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;
    
