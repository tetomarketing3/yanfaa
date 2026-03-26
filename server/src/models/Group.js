import mongoose from 'mongoose';

/**
 * Group Schema for organizing students
 */
const groupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide group name'],
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      default: '',
    },
    level: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      default: 'beginner',
    },
    schedule: {
      dayOfWeek: {
        type: String,
        enum: ['saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
      },
      time: String, // e.g., "10:00 AM"
    },
    studentCount: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster searches
groupSchema.index({ name: 1 });

export default mongoose.model('Group', groupSchema);