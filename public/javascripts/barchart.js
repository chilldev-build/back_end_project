var employeeCanvas = document.getElementById("myChart");
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;
var weekData = {
 label: 'week',
 data: [19,28,9,35,40],
 backgroundColor: 'rgba(0, 99, 132, 0.6)',
 borderWidth: 0,
 yAxisID: "y-axis-density"
};
var hoursData = {
 label: 'hours',
 data: [8.9, 9.8, 3.7, 23.1, 9.0, 8.7, 11.0],
 backgroundColor: 'rgba(99, 132, 0, 0.6)',
 borderWidth: 0,
 yAxisID: "y-axis-gravity"
};
var employeeData = {
 labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
 datasets: [weekData, hoursData]
};
var chartOptions = {
 scales: {
   xAxes: [{
     barPercentage: 1,
     categoryPercentage: 0.6
   }],
   yAxes: [{
     id: "y-axis-density"
   }, {
     id: "y-axis-gravity"
   }]
 }
};
var barChart = new Chart(employeeCanvas, {
 type: 'bar',
 data: employeeData,
 options: chartOptions
});