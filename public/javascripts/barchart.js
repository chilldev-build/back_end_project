var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri",],
    datasets: [{
      label: '# of Days',
      data: [22, 19, 40, 5, 2, 3, 20, 3],
      backgroundColor: [
        'rgba(0, 99, 132, 0.6)',
        'rgba(0, 99, 132, 0.6)',
        'rgba(0, 99, 132, 0.6)',
        'rgba(0, 99, 132, 0.6)',
        'rgba(0, 99, 132, 0.6)',
        'rgba(0, 99, 132, 0.6)'
        
      ],
      borderColor: [
        'rgba(0, 99, 132, 0.6)',
        'rgba(0, 99, 132, 0.6)',
        'rgba(0, 99, 132, 0.6)',
        'rgba(0, 99, 132, 0.6)',
        'rgba(0, 99, 132, 0.6)'
        
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: false,
    scales: {
      xAxes: [{
        ticks: {
          maxRotation: 90,
          minRotation: 80
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});