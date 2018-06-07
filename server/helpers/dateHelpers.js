var globalConfig = require('../config/globalConfig');

var moment = require('moment-timezone');

var RTIDate = {
    GetTodayDate: function () {
        return new Date();
    },

    GetISOStringFromDate: function (date) {
        //(Format) YYYY-MM-DDTHH:mm:ss
        var dd = date.getDate();
        var mm = date.getMonth();
        var y = date.getFullYear();
        var h = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var temp = y + "-" + (mm + 1) + "-" + dd + " " + h + ":" + min + ":" + sec;

        var datestring = moment.tz(temp, globalConfig.MomentTimeZone).toISOString();
        //var daxx = moment.tz(temp, "Asia/Calcutta|Asia/Kolkata").format();
        return datestring;
    },

    GetDateFromCounter: function (counter) {
        var someDate = RTIDate.GetBaseDate();
        someDate.setTime(someDate.getTime() + (counter * 24 * 60 * 60 * 1000));
        var dd = someDate.getDate();
        var mm = someDate.getMonth();
        var y = someDate.getFullYear();
        return new Date(y, mm, dd);
    },

    GetCounterFromDate: function (date) {
        var mydate = RTIDate.GetDateFromDDMMYY(date);
        var diff = mydate - RTIDate.GetBaseDate();
        // Calculate from milliseconds
        var days = ((((diff / 1000) / 60) / 60) / 24);
        return days;
    },

    GetMonthDiffFromBase: function (toDate) {
        var months;
        var fromDate = RTIDate.GetBaseDate();
        months = (toDate.getFullYear() - fromDate.getFullYear()) * 12;
        months += (toDate.getMonth() + 1);
        months -= 1;
        return months <= 0 ? 0 : months;
    },

    GetBaseDate: function () {
        return new Date(1970, 00, 01);
    },

    GetWeeks: function () {
        return ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
    },

    GetWeekDayFromDay: function (weekdays) {
        return $.inArray(weekdays, RTIDate.GetWeeks());
    },

    GetMonthNames: function () {
        return ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
    },

    GetDateFromDDMMYY: function (date) {
        //Return Date counter from date..
        var array = date.split('/');
        var mydate = new Date();
        if (array.length == 3) {
            mydate = new Date(array[2], array[1], array[0]);
        }
        return mydate;
    }
}

module.exports = RTIDate;