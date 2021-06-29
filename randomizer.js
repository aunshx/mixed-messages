/*This code is to randomize the input paramters viz.  feelings, seasons, conjuctions and their responses. 
This module will be exported to the main code viz. main.js
*/

const feelingsArray = ['loves', 'hates'];
const seasonsArray = ['rainy', 'winter', 'summer'];
const conjunctionsArray = ['and', 'but'];

/*
The arrays below are the responses required when a combination of feelings + seasons + conjuctions are selected.
The first sentence in the array is if the conjuction is 'and' and the second sentence is if the conjuction is 'but'.
For eg: Erika *loves* the *rainy* season *but* hatesRainySeasonResponse[1]. 
If it were *and* then it would be hatesRainySeasonResponse[0]. 
*/

const lovesRainySeasonResponses = ['goes for long walks in the rain.', 'can do without all the water clogging in the city'];
const hatesRainySeasonResponses = ['does not like getting out of the house.','a cup of hot coffee usually makes things right.'];

const lovesWinterSeasonResponses = ['the fresh hot chocolate that mom makes.', 'the temperature makes it unbearable sometimes.'];
const hatesWinterSeasonResponses = ['wishes it to be over as fast as possible.', 'Christmas makes it all worth while.'];

const lovesSummerSeasonResponses = ["can't get enough of it!", 'the mosquitoes always prove to be a menace.'];
const hatesSummerSeasonResponses = ['the traditional family vactions that come with it.', 'a swim in the cool waters of the village lake is the best feeling ever!'];

const randomSelector = () => {
    let randomAnswerArray = [];

    let randomFeelings = feelingsArray[Math.floor(Math.random() * 2)];
    let randomSeasons = seasonsArray[Math.floor(Math.random() * 3)];
    let randomConjunctions = conjunctionsArray[Math.floor(Math.random() * 2)];
    
    return randomAnswerArray[randomFeelings,randomSeasons,randomConjunctions];
}

const completeSentence = (randomSelection) => {
    let computeSentence = randomSelection();
    
    if(computeSentence[0] === 'loves') {
        if(computeSentence[1] === 'rainy')
    }
}