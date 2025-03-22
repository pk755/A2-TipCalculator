function calculateTotal() {
    const subtotalInput = document.getElementById('subtotal').value;
    const tipInput = document.getElementById('tip').value;
    const result = document.getElementById('result');
  
    const subtotal = parseFloat(subtotalInput);
    const tipPercent = parseFloat(tipInput);
  
    if (isNaN(subtotal) || isNaN(tipPercent) || subtotal < 0 || tipPercent < 0) {
      result.textContent = "Please enter valid non-negative numbers.";
      result.style.color = "red";
      return;
    }
  
    const tipAmount = subtotal * (tipPercent / 100);
    const total = subtotal + tipAmount;
  
    result.textContent = `Total Amount: $${total.toFixed(2)}`;
    result.style.color = "black";
  }
  