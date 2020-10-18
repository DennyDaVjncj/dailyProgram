//global options
let now = moment();
let thisHour = moment().hours();
let thisMoment = $('#currentDay');//displayes real time
let activityBlock = $(".time-block");//html target to add tenses
let txtArea = $("textarea");//<textarea>, border
let hourBlock;

//handles moment.js functionality
function presentMoment() {
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
function everyTense() {
    txtArea.each(function () {
        let activityTime = parseInt($(this).attr("id"));//quantified this hardCoded block, allwng for dynamic tense        
        if (activityTime < thisHour) {
            $(this).addClass("past");//amazing strategy for dynamic tenses
        } else if (activityTime === thisHour) {
            $(this).addClass("present")
        } else {
            $(this).addClass("future");
        }
    });
}everyTense();//triggering our function

//begin logic to store data clientSide
$(".saveBtn").on("click", function () {
    console.log($(this))    
    let savedActivity=$(this).siblings("textarea").val()
    console.log(savedActivity);
    
    let local=$(this).siblings("textarea").attr("id")
    localStorage.setItem(local,savedActivity);    
})

//triggers
