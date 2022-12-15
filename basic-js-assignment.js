// Problem 1: Ana to Vori:
function anaToVori(ana){
    if(ana >= 0){
        const vori = 1 / 16; 
        let totalVori = ana * vori;
        return totalVori;
    }
    else{
        return 'Weight must be a positive NUMBER!!!'
    }
}
const totalVoriResult = anaToVori(16);
console.log(totalVoriResult);

// Problem 2: Calculate total price of Singara, Chomoca and Jilapi:
function pandaCost(singara, chomoca, jilapi){
    const perPriceSingara = 7;
    const perPriceChomoca = 10;
    const perPriceJilapi = 15;

    if(singara >= 0 && chomoca >= 0 && jilapi >= 0){
        let totalPriceOfSingara = singara * perPriceSingara;
        let totalPriceOfChomoca = chomoca * perPriceChomoca;
        let totalPriceOfJilapi = jilapi * perPriceJilapi;

        const totalPriceOfFood = totalPriceOfSingara + totalPriceOfChomoca + totalPriceOfJilapi;

        return totalPriceOfFood;
    }

    else{
        return '"$" Money amount can not be a negative NUMBER!!!'
    }

}

const totalPrice = pandaCost(3, 2, 5);
console.log(totalPrice);

// Problem 3: Picnic Budget:
function picnicBudget(person){
    const firstHundredMoney = 5000;
    const secondHundredMoney = 4000;
    const aboveTwoHundredMoney = 3000;

    if(person >= 0 && person <= 100){
        let firstHundredTotalBudget = person * firstHundredMoney;
        return firstHundredTotalBudget;
    }
    else if(person >= 101 && person <= 200){
        let secondHundredBudget = (person - 100) * secondHundredMoney;
        let secondHundredTotalBudget = secondHundredBudget + (100 * firstHundredMoney);
        return secondHundredTotalBudget;
    }
    else if(person >= 201){
        let aboveThirdHundredBudget = (person - 200) * aboveTwoHundredMoney;
        let aboveThirdHundredTotalBudget = aboveThirdHundredBudget + (100 * firstHundredMoney) + (100 * secondHundredMoney);
        return aboveThirdHundredTotalBudget;
    }
    else{
        return 'Please provide a positive Number!!!';
    }
}

let totalPicnicAmount = picnicBudget(-250);
console.log(totalPicnicAmount);

// Problem 4: Find the name (string) from an array, which has odd length:
function oddFriend(names){
    for(const name of names){
        if(name.length % 2 != 0){
            return name;
        }
    }
}

const friendsName = ['Fahad', 'Faysal', 'Rewon', 'Ridoy', 'Mumtahina'];
let oddFriendName = oddFriend(friendsName);
console.log(oddFriendName);