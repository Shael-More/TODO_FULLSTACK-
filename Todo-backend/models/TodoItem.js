const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

// _id is automatically added by mongoose
const todoItemSchema = mongoose.Schema(
  {
    task: { type: String, required: true },
    date: Date,
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('TodoItem', todoItemSchema);
