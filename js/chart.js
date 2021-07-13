

var labels = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
];

var data = {
    labels: labels,
    datasets: [{
        label: 'Bienestar',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 25, 30, 50, 60, 70, 80],
    }]
};

var config = {
    type: 'line',
    data,
    options: {}
};

var myChart = new Chart(
    document.getElementById('myChart'),
    config
);