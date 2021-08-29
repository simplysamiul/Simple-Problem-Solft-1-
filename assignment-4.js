/*
Solution No-( 1 ) 
Convert Seer To Mon 
*/
const convertSeerToMon = seerToMon();
function seerToMon(seer) {
    // Error Message Handling
    const signFillter = Math.sign(seer);
    const fillterType = (typeof seer);
    if(signFillter === -1){
        return ("I can't recive negative value. Sorry..........I want to just numaricel value !! ");
    }
    else if(fillterType == "string"){
        return ("I can't recive any string. Sorry..........I want to just numaricel value !! ");
    }
    else if(fillterType == "boolean"){
        return ("I can't recive any boolean. Sorry..........I want to just numaricel value !! ");
    }
    else{
        const mon = seer / 40;
        return mon;
    }
}



/* 
Solution No-( 2 )
Find out the total sales amount
*/

const productQuantity = totalSales();
function totalSales(shirt, pant, shoe){
    // Per piece product price
    const perPieceShirt = 100;
    const perPiecePant = 200;
    const perPieceShoe = 500;
    // Error message handling
    const firstParamsSign = Math.sign(shirt);
    const secondParamsSign = Math.sign(pant);
    const thirdParamsSign = Math.sign(shoe);
    const firstParamsType = (typeof shirt);
    const secondParamsType = (typeof pant);
    const thirdParamsType = (typeof shoe);
    if(firstParamsSign === -1){
        return ("I can't recive negative value. Sorry..........I want to all numaricel value !! ");
    }
    else if(secondParamsSign === -1){
        return ("I can't recive negative value. Sorry..........I want to all numaricel value !! ");
    }
    else if(thirdParamsSign === -1){
        return ("I can't recive negative value. Sorry..........I want to all numaricel value !! ");
    }
    else if(firstParamsType === "string"){
        return ("I can't recive any string. Sorry..........I want to just numaricel value !! ");
    }
    else if(secondParamsType === "string"){
        return ("I can't recive any string. Sorry..........I want to just numaricel value !! ");
    }
    else if(thirdParamsType === "string"){
        return ("I can't recive any string. Sorry..........I want to just numaricel value !! ");
    }
    else if(firstParamsType == "boolean"){
        return ("I can't recive any boolean. Sorry..........I want to just numaricel value !! ");
    }
    else if(secondParamsType == "boolean"){
        return ("I can't recive any boolean. Sorry..........I want to just numaricel value !! ");
    }
    else if(thirdParamsType == "boolean"){
        return ("I can't recive any boolean. Sorry..........I want to just numaricel value !! ");
    }
    else{
    // Product price according to the sales of each product
    const shirtSaleNum = shirt * perPieceShirt;
    const pantSaleNum = pant * perPiecePant;
    const shoeSaleNum = shoe * perPieceShoe;
    // Total sales amount according to the all sales product prices
    const totalSalesAmount = (shirtSaleNum + pantSaleNum + shoeSaleNum);
    return totalSalesAmount;
}
}

/* 
Solution No-( 3 )
Find out the product delivery cost according to the question 
*/

const findOutDeliveryCharge = deliveryCost();
function deliveryCost(tShirt){
    // Estimeted delivary cost of the per T-Shirt 
    const firstHundredPerPiece = 100;
    const secondHundredPerPiece = 80;
    const restPerPiece = 50;
    // Error Message handling
    const signFillter = Math.sign(tShirt);
    const fillterType = (typeof tShirt);
    if(signFillter === -1){
        return ("I can't recive negative value. Sorry..........I want to just numaricel value !! ");
    }
    else if(fillterType == "string"){
        return ("I can't recive any string. Sorry..........I want to just numaricel value !! ");
    }
    else if(fillterType == "boolean"){
        return ("I can't recive any boolean. Sorry..........I want to just numaricel value !! ");
    }
    else{
    // Delivery cost according to the quantity
    if(tShirt <= 100){
        const firstDelivaryCharge = firstHundredPerPiece * tShirt;
        return firstDelivaryCharge;
    }
    else if(tShirt <= 200){
        const firstHurdredCharge = firstHundredPerPiece * 100;
        const afterHundredPiece = tShirt - 100;
        const afterHundredCharge = afterHundredPiece * secondHundredPerPiece;
        const secondDelivaryCharge = firstHurdredCharge + afterHundredCharge;
        return secondDelivaryCharge;

    }
    else{
        const firstHurdredCharge = firstHundredPerPiece * 100;
        const afterHundredCharge = secondHundredPerPiece * 100;
        const firstTwoHundredCharge = firstHurdredCharge + afterHundredCharge;
        const restAllPiece = tShirt - 200;
        const restCharge = restAllPiece * restPerPiece;
        const restDelivaryCharge = restCharge + firstTwoHundredCharge;
        return restDelivaryCharge;
    }}
}



/* 
Solution No-( 4 )
find out the first 5 characters name from inside of the array
*/
const nameArray = perfectFriend([]);
function perfectFriend(names){
    for(let name of names){
        // Error Message handling
        const fillterType = (typeof name);
        if(fillterType == "number"){
            return ("I can't recive any Numericel value. Sorry..........I want to just string !! ");
        }
        else if(fillterType == "boolean"){
            return ("I can't recive any boolean. Sorry..........I want to just string !! ");
        }
        else{
        if(name.length === 5){
            return name;
        }
    }
    }
}