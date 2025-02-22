/* Your Code Here */

function createEmployeeRecord(arr){
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents:[]
    }
}

function createEmployeeRecords(arr){
    return arr.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(timeDate){
    timeDate = timeDate.split(" ")

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(timeDate[1]),
        date: timeDate[0]
    })

    return this
}

function createTimeOutEvent(timeDate){
    timeDate = timeDate.split(" ")
    
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(timeDate[1]),
        date: timeDate[0]
    })

    return this
}

function hoursWorkedOnDate(date){

    let timeOut = this.timeOutEvents.find(event => event.date === date).hour
    let timeIn = this.timeInEvents.find(event => event.date === date).hour

    return (timeOut - timeIn) / 100
}

function wagesEarnedOnDate(date){
    return this.payPerHour * hoursWorkedOnDate.call(this, date)
}

// function allWagesFor(){
//     let dates = this.timeInEvents.map(event => event.date)
//     return dates.reduce((sum, date) => this.wagesEarnedOnDate(date) + sum, 0)
// }

function findEmployeeByFirstName(employees, name){
    return employees.find(emp => emp.firstName === name)
}

function calculatePayroll(employees){
    return employees.reduce((sum, empl) => allWagesFor.call(empl) + sum, 0)
   
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

debugger