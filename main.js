const barcodeObj = [
    {
       barcode: 'ITEM000000',
       name: 'Coca-Cola',
       price: 3
     },
     {
       barcode: 'ITEM000001',
       name: 'Sprite',
       price: 3
     },
     {
       barcode: 'ITEM000002',
       name: 'Apple',
       price: 5
     },
     {
       barcode: 'ITEM000003',
       name: 'Litchi',
       price: 15
     },
     {
       barcode: 'ITEM000004',
       name: 'Battery',
       price: 2
     },
     {
       barcode: 'ITEM000005',
       name: 'Instant Noodles',
       price: 4
     }
 ];
function printReceipt(barcodes) {
    var barcodesMap = convertTheSameBarcode(barcodes);
    var receipt = `
***<store earning no money>Receipt ***
`
+printBarcodesInfo(barcodesMap);
    console.log(receipt);
}
function convertTheSameBarcode(barcodes){
    var map = new Map();
    for(let i=0; i<barcodes.length; i++){
        let cur = barcodes[i];
        if(map.get(cur)!=undefined){
            let count = map.get(cur);
            count++;
            map.set(cur,count);
        }else{
            map.set(cur,1);
        }
    }
    return map;
}
function printBarcodesInfo(barcodesMap){
    var receipt = printBarcode(barcodesMap)
    +printTotalPrice(barcodesMap);
    return receipt;
}
function printBarcode(barcodesMap){
    var barcodeReceipt = "";
    barcodesMap.forEach((count,barcode) => {
        var obj = getBarcodeInfo(barcode);
        barcodeReceipt += `Name: ${obj.name}, Quantity: ${count}, Unit price: ${obj.price} (yuan), Subtotal: ${count*obj.price} (yuan)\n`;
    });
    return barcodeReceipt;
}
function printTotalPrice(barcodesMap){
    var totalPrice="";
    var total = 0;
    barcodesMap.forEach((count,barcode) => {
        var obj = getBarcodeInfo(barcode);
         total += count * obj.price;
    });
    totalPrice += `----------------------
Total: ${total} (yuan)
**********************`;
    return totalPrice;
}
function getBarcodeInfo(barcode){
    var barcodeInfo;
    for(let i = 0; i< barcodeObj.length; i++){
        if(barcodeObj[i].barcode===barcode){
            return barcodeObj[i];
        }
    }
    return undefined;
}

module.exports = {
    printReceipt
};