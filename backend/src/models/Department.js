const mongoose = require('mongoose');

const DepartmentSchema = new  mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  jobs: [{ type: Schema.Types.ObjectId, ref: 'Jobs' }],
});

const Department = mongoose.model('Department', DepartmentSchema);
module.exports = Department;
