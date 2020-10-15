let now=moment();//fulfilled requirement
let nowDisplayed=moment().format('MMM Do YY');
let thisMoment=$('#currentDay');
let nowBlock;
//quantifying the present moment
function presentMoment(){
    thisMoment.text(nowDisplayed);
}presentMoment();//quick on the trigger

//program dynamic time blocks that can take input
    //color code time blocks to represent past, present, future tasks
//current hour displayed on side of block, another icon maybe for the other side
    //each block populates with same theme

//master <div> with styling/dynamo attached
    //gets reproduced winthin .each() upon click of element tagged by #id,.class or whatever

function dynamicDivs(){
    nowBlock=$("#dynamicMutation");//div element, clientSide
    console.log(nowBlock)
    nowBlock.each(this).on("click",function(){
        $(this).append();
        console.log(this)
        //append new div elements
    });//figure out how to loop through 
}
