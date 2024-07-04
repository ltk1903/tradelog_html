document.addEventListener('DOMContentLoaded', function() {
    const chartData = {
        data: [12, 35, 35, 15],
        backgroundColor: ['purple', 'red', 'yellow', 'green'],
    };

    const myChart = document.querySelector(".my-chart");

    new Chart(myChart, {
        type: "doughnut",
        data: {
            datasets: [
                {
                    data: chartData.data,
                    backgroundColor: chartData.backgroundColor,
                },
            ],
        },
        options: {
            borderWidth: 0,
            borderRadius: 2,
            hoverBorderWidth: 0,
            plugins: {
                legend: {
                    display: false,
                },
            },
        },
    });
});
