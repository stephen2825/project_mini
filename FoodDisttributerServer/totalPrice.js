const purchaseSchema = new mongoose.Schema({
    totalPrice: Number,
    totalQuantity: Number,
    date: { type: Date, default: Date.now },
  });
  
  const Purchase = mongoose.model('Purchase', purchaseSchema);
  