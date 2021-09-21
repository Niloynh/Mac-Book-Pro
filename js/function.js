
//memory section
const withCostMemoryPrice = document.getElementById('8GB-memory');
const withoutCostMemoryPrice = document.getElementById('16GB-memory');
withCostMemoryPrice.addEventListener('click',function(){
    // const withCostMemoryPrice = 00;
    ExtraMemoryCost.innerText = "00"
    updateTotal()

})
withoutCostMemoryPrice.addEventListener('click',function(){
    ExtraMemoryCost.innerText = "180"
    updateTotal()
})

// storage section 
const defultSSDPrice = document.getElementById('defult-ssd')
const mediumSSDPrice = document.getElementById('medium-ssd')
const largeSSDPrice = document.getElementById('large-ssd')

defultSSDPrice.addEventListener('click',function(){
    ExtraStorageCost.innerText = "00"
    updateTotal()
 
})
mediumSSDPrice.addEventListener('click',function(){
    ExtraStorageCost.innerText = "100"
    updateTotal()
   
})
largeSSDPrice.addEventListener('click',function(){
    ExtraStorageCost.innerText = "180"
    updateTotal()
    
})
// delivery Time 
const freeDelivery = document.getElementById('free-delivery-charge')
const withCostDelivery = document.getElementById('with-cost-delivery-charge')

freeDelivery.addEventListener('click',function(){
    DeliveryCharge.innerText = "00"
    updateTotal()
  
})
withCostDelivery.addEventListener('click',function(){
    DeliveryCharge.innerText = "20"
    updateTotal()
    
})

// calculation Bar
const bestPrice = document.getElementById('best-price');

const ExtraMemoryCost = document.getElementById('extra-memory-cost');
const ExtraStorageCost = document.getElementById('extra-storage-cost');
const DeliveryCharge = document.getElementById('delivery-Charge');
const totalPrice = document.getElementById('total-price');

const TotalPrice2 = document.getElementById('total-pomo') ;


function updateTotal(){
    const DeliveryCost = parseInt(DeliveryCharge.innerText)
    const producPrice  = parseInt(bestPrice.innerText)
   
    const storageCost =  parseInt(ExtraStorageCost.innerText)
    const memoryConst  = parseInt(ExtraMemoryCost.innerText)
     totalPrice.innerText = DeliveryCost  + storageCost + memoryConst + producPrice;

     TotalPrice2.innerText = DeliveryCost  + storageCost + memoryConst + producPrice;

};
