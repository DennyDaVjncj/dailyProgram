//global options
let now=moment();
let thisHour=moment().hours();
console.log(thisHour)//check point
let thisMoment=$('#currentDay');//displayes real time
let activityBlock=$(".time-block");//html target to add tenses
let txtArea=$("textarea");//<textarea>, border
let hourBlock;

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

//.hour is PRIMARY TARGET
function everyTense(){ 
    activityBlock.each(function(e){
        let activityTime=parseInt($(e).attr("id"));//quantified this hardCoded block, allwng for dynamic tense
        console.log(e);
    if(activityTime<thisHour){
        $(e).addClass("past");//amazing strategy for dynamic tenses
    }else if(activityTime===thisHour){
        $(e).removeClass("past");
        $(e).addClass("present")
    }else{
        $(e).removeClass("past");
        $(e).removeClass("present");
        $(e).addClass("future");
    }
    });
}everyTense();//activate set dynamo

//begin logic to store data clientSide
$("saveBtn").on("click",function(dynamicImpulse){
    
})



// function everyTense(){
//     if(now)
// }
//complete functionality before 12am!



