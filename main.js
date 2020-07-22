const barcodeList = [
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
    const barcodesMap = convertTheSameBarcode(barcodes);
    let receipt = `
***<store earning no money>Receipt ***
`
    +printBarcodesInfo(barcodesMap);
    console.log(receipt);
}

function convertTheSameBarcode(barcodes){
    let map = new Map();
    for(let i = 0; i< barcodes.length; i++){
        let cur = barcodes[i];
        if(map.get(cur)!= undefined){
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
    const receipt = printBarcode(barcodesMap)
                    +printTotalPrice(barcodesMap);
    return receipt;
}

function printBarcode(barcodesMap){
    let barcodeReceipt = "";
    barcodesMap.forEach((count,barcode) => {
        let obj = getBarcodeInfo(barcode);
        barcodeReceipt += `Name: ${obj.name}, Quantity: ${count}, Unit price: ${obj.price} (yuan), Subtotal: ${count*obj.price} (yuan)\n`;
    });
    return barcodeReceipt;
}

function printTotalPrice(barcodesMap){
    let totalPrice = "";
    let total = 0;
    barcodesMap.forEach((count,barcode) => {
        let barcodeInfo = getBarcodeInfo(barcode);
         total += count *  barcodeInfo.price;
    });
    totalPrice += `----------------------
Total: ${total} (yuan)
**********************`;
    return totalPrice;
}

function getBarcodeInfo(barcode){
    for(let i = 0; i< barcodeList.length; i++){
        if(barcodeList[i].barcode===barcode){
            return barcodeList[i];
        }
    }
    return undefined;
}

module.exports = {
    printReceipt
};