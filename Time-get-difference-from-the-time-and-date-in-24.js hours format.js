                            var startDate = "01/01/2007 " + timeSS;
                            var endDate = "01/01/2007 " + timeEE;
                            startDate = new Date(startDate);
                            endDate = new Date(endDate);
                            console.log("StartDate:", startDate);
                            console.log("EndDate:", endDate);
                            var timediff = (startDate - endDate) / 1000;
                            if (isNaN(timediff)) return NaN;
                            console.log("TimeDifference:", timediff);
                            var diffabs = Math.abs(Math.floor(timediff));
                            console.log("DifferenceAbsolute:", diffabs);
                            var days = Math.floor(diffabs / (24 * 60 * 60));
                            console.log("Days:", days);
                            var leftSec = diffabs - days * (24 * 60 * 60);
                            console.log("LeftSec:", leftSec);
                            var hrs = Math.floor(leftSec / (60 * 60));
                            var leftSec = leftSec - hrs * (60 * 60);
                            console.log("Hours:", hrs);
                            var min = Math.floor(leftSec / (60));
                            console.log("Minutes:", min);
                            var totaldays =
                              days +
                              " " +
                              "Days" +
                              " " +
                              hrs +
                              " " +
                              "Hours" +
                              " " +
                              min +
                              " " +
                              "Minutes";
                              hrs = parseInt(hrs);
                              min = parseInt(min);
                            console.log("TotalDays:", totaldays);
                            if(min > 0){
                                if(hrs > 9){
                                    hrs= (24-hrs);
                                hrs= (hrs-1);
                            }
                            }else{
                                if(hrs > 9)
                                    hrs= (24-hrs);
                            }
                            if(min < 10){
                                min = "0"+min;
                            }
                            var resuntT = (hrs)+":"+min;
