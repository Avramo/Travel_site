console.log('travel app start')
let orderNumber = 0;
let ordersInfo = document.querySelector('#table-customers tbody');
let destinationsInfo = [];
try {
    console.log('populate destinations start');
    let destinations = [
        {code:1, name:'Israel', price:789}, 
        {code:2, name:'New York', price:1000}, 
        {code:3, name:'London', price:600}, 
        {code:4, name:'Kiev', price:200}, 
        {code:5, name:'Karlin', price:150}, 
        {code:6, name:'San Francisco', price:1200}, 
        {code:7, name:'Moscow', price:250}, 
        {code:8, name:'Melbourne', price:800}
    ]

    destinationsInfo = destinations;
    console.log('destinations', destinations)
    console.log('destinationsInfo',destinationsInfo);

    let tableDestinations = document.querySelector('#table-destinations tbody');
    let destTemplate = '<tr><td>#CODE</td><td>#NAME</td><td>$#PRICE</td></tr>';
    let destRowsHtml = '';

    destinations.forEach(destItem => {
        destRowsHtml += destTemplate
        .replace('#CODE', destItem.code)
        .replace('#NAME', destItem.name)
        .replace('#PRICE', destItem.price)
    })

    tableDestinations.innerHTML = destRowsHtml;
    console.log('populate destinations finish')

    updateOrders('demo','Avi', 12345, 1, 8)

    // console.log('populate orders start');
    // let orders = [
    //     {orderNUM:1, passName:'avi', passID:'789', destCode:1, numOfPass:2,}
       
    // ]

    // let tableDestinations = document.querySelector('#table-destinations tbody');
    // let destTemplate = '<tr><td>#CODE</td><td>#NAME</td><td>$#PRICE</td></tr>';
    // let destRowsHtml = '';

    // destinations.forEach(destItem => {
    //     destRowsHtml += destTemplate
    //     .replace('#CODE', destItem.code)
    //     .replace('#NAME', destItem.name)
    //     .replace('#PRICE', destItem.price)
    // })

    // tableDestinations.innerHTML = destRowsHtml;
    // console.log('populate orders finish')

} catch (error) {
    console.error('travel app error', error);
}

//functions

function sendOrder(){
    console.log('func sendOrder start')
    try {
        let form = document.querySelector('#form-new-order form');
        let orderNUM = (++orderNumber);
        let passName = form.elements.passName.value;
        let passID = form.elements.passID.value;
        let destCode = form.elements.destCode.value;
        let numOfPass = form.elements.numOfPass.value;
        // alert(`order number:${orderNUM}, passNmae:${passName}, passID:${passID}, destCode:${destCode}, numofPass:${numOfPass}`)
        updateOrders(orderNUM, passName, passID, destCode, numOfPass);
        document.getElementById('order-form').reset();   
    } catch (error) {
        console.error('func sendOrder error')
    }
    console.log('func sendOrder finish')
}

function updateOrders(ordNum, pName, pasId, desCode, numofpas) {
    try {
        console.log('func updateOrders start')
        let dName = '';
        let dPrice = 0;
        destinationsInfo.forEach(destObj =>{
             if (destObj.code == desCode){
                dPrice = destObj.price;
                dName = destObj.name;
                }
             })
        let ordersTemplate = '<tr><td>#ORDNUM</td><td>#PASSNAME</td><td>#PASSID</td><td>#DESTCODE</td><td>#DESTNAME</td><td>#NUMOFPASS</td><td>$#TOTAL</td></tr>';
        let newOrder = ordersTemplate
            .replace('#ORDNUM', ordNum) 
            .replace('#PASSNAME', pName)
            .replace('#PASSID', pasId)
            .replace('#DESTCODE', desCode)
            .replace('#DESTNAME', dName)
            .replace('#NUMOFPASS', numofpas)
            .replace('#TOTAL', dPrice * numofpas )
            ordersInfo.innerHTML += newOrder;

    } catch (error) {
        console.error('func updateOrders error')
    }
    console.log('func updateOrders finish')    
}