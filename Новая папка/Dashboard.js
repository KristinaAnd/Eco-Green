var ctx = document.getElementById('salesTrendChart').getContext('2d');
var salesTrendChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Sales',
            data: [12000, 19000, 15000, 22000, 20000, 25000, 30000, 28000, 32000, 38000, 44000, 50000],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})

var ctx2 = document.getElementById('monthlySalesChart').getContext('2d');
var monthlySalesChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Sales (€)',
            data: [10000, 20000, 15000, 30000, 40000, 35000, 45000, 50000, 60000, 70000, 80000, 90000],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})

var ctx3 = document.getElementById('categorySalesChart').getContext('2d');
var categorySalesChart = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['Packages', 'Containers', 'Packaging', 'Dishes'],
        datasets: [{
            label: 'Sales by category',
            data: [30000, 50000, 20000, 40000],
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
})

var ctx4 = document.getElementById('predictedSalesChart').getContext('2d');
var predictedSalesChart = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        datasets: [{
            label: 'Predicted sales',
            data: [55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000],
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            fill: true,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});