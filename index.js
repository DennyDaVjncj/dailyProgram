//global options
let now=moment();
let thisMoment=$('#currentDay');

function presentMoment(){
    thisMoment.text(now);
}presentMoment();//quick on the trigger

//target .time-block to add dynamic tenses
//invoke .attr() to affect coloring
//logic based on <textarea>, checking if .val() is had
//if statement is checking that <textarea> has value present
//we have to check for occupying value compared with current time    

let DOM=$(".time-block");//html target to add tenses
function everyTense(){
    if($("textarea").val()===true&&now<=){
        
    }
}
//complete functionality tomorrow!



