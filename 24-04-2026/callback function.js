function onlineShopping(userName, nextStep) {
    console.log("Welcome to Sharif's Shopping Cart, " + userName);
    nextStep();
}

function showOffer() {
    console.log("Special Offer: Get 10% discount on your purchase!");
}

onlineShopping("Mohammed Sharif", showOffer);