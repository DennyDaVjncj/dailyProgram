//global options
let now=moment();
console.log(now);
let thisMoment=$('#currentDay');//displayes real time
let activityBlock=$(".time-block");//html target to add tenses
let txtArea=$("textarea");//<textarea>, border
let hourBlock

//handles moment.js functionality
function presentMoment(){
    thisMoment.text(now);
}presentMoment();//quick on the trigger

//target .time-block to add dynamic tenses
//invoke .attr() to affect coloring
//logic based on <textarea>, checking if .val() is had
//if statement is checking that <textarea> has value present
//we have to check for occupying value compared with current time
//.each() timeBlock #id will be stored within array, to be indexed through
    //each #id representing every hour in workday, gets compared to current time, establishing tense
//on click of button on far right, <textarea> input needs to be stored to localStorage

//logic for dynamic tenses - set tenses right now
//.hour is PRIMARY TARGET
//function for each #id, each time block 
function everyTense(){    
    activityBlock;    
}everyTense();

// function everyTense(){
//     if(now)
// }
//complete functionality before 12am!



