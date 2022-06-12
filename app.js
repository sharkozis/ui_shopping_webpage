document.getElementById('deep-plus').addEventListener('click',function(){
    const qtyText = document.getElementById('deep-display')
    const qtyNumber = qtyText.value;
    const qty = parseInt(qtyNumber) + 1
    qtyText.value = qty
    calculate()
})
document.getElementById('deep-minus').addEventListener('click',function(){
    const qtyText = document.getElementById('deep-display')
    const qtyNumber = qtyText.value;
    if(qtyNumber > 0){
        const qty = parseInt(qtyNumber) - 1
        qtyText.value = qty;
        calculate()
    }   
})
document.getElementById('light-plus').addEventListener('click',function(){
    const qtyText = document.getElementById('light-display')
    const qtyNumber = qtyText.value;
    const qty = parseInt(qtyNumber) + 1
    qtyText.value = qty
    calculate()
})
document.getElementById('light-minus').addEventListener('click',function(){
  const qtyText = document.getElementById('light-display')
  const qtyNumber = qtyText.value;
  if(qtyNumber > 0){
    const qty = parseInt(qtyNumber) - 1
    qtyText.value = qty;
    calculate()
}
})
function getInputValue(product){
    const productText = document.getElementById(product+ '-display')
    const productNumber = parseInt(productText.value)
    return productNumber
}
function calculate(){
    const deepTotal = getInputValue('deep')*489900
    const lightTotal = getInputValue('light')*275000
    const subTotalPrice = deepTotal + lightTotal
    const taxAmount = subTotalPrice *.05
    const grandTotal = subTotalPrice + taxAmount
    document.getElementById('subtotal-price').innerText = subTotalPrice
    document.getElementById('tax-amount').innerText = taxAmount
    document.getElementById('grandTotal').innerText = grandTotal
    
}

document.getElementById('order-btn').addEventListener('click',function(){
    const total = document.getElementById('grandTotal').innerText
    if(total > 0){
        window.location.href = 'order.html'
    }
})