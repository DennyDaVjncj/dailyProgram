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

//<textarea> is primary target, in conjunction with the click event
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
    let savedActivity=$(this).siblings("textarea").val();
    let local=$(this).siblings("textarea").attr("id")
    localStorage.setItem(local,savedActivity);
})

$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#13").val(localStorage.getItem("13"));
$("#14").val(localStorage.getItem("14"));
$("#15").val(localStorage.getItem("15"));
$("#16").val(localStorage.getItem("16"));
$("#17").val(localStorage.getItem("17"))