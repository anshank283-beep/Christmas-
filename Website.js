const mongoose = require('mongoose');

const WebsiteSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  keywords: [String]
});

module.exports = mongoose.model('Website', WebsiteSchema);
