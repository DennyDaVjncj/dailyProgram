let now=moment();//fulfilled requirement
let nowDisplayed=moment().format('dddd');
let thisMoment=$('#currentDay');

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

function dynamicDivs(nowBlock){
    let nowBlock=$("#dynamicMutation");//div element, clientSide
    
}
