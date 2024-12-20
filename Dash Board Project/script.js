const ctx = document.getElementById('linechart');
const ctx2 = document.getElementById('doughnutchart');
const ctx3 = document.getElementById('polararea');

Chart.defaults.color = "white";
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: "Revenue",
                data: [20, 30, 15, 45, 30, 35],
                borderWidth: 1
            },
            {
                label: "Customers",
                data: [25, 35, 15, 50, 10, 35],
                borderWidth: 1
            },
            {
                label: "Sales",
                data: [21, 38, 35, 20, 25, 35],
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 14,
                        weight: 'bold'
                    },
                    color: '#ffffff',
                    padding: 20
                }
            },
             tooltip: {
                padding: 10,
                cornerRadius: 8
            }
        }
    }
});


new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: "Revenue",
                data: [20, 30, 15, 45, 30, 35],
                borderWidth: 1,
                backgroundColor: [
                    "#4a85f8",
                    "#f85084",
                    "#50f895",
                    "#f8a150",
                    "#8050f8",
                    "#f8e250"
                ]
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    font: {
                        size: 14,
                        weight: 'bold'
                    },
                    color: '#ffffff',
                    padding: 10
                }
            },
            tooltip: {
                padding: 12,
                cornerRadius: 10
            }
        }
    }
});


new Chart(ctx3, {
    type: 'polarArea',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: "Revenue",
                data: [20, 30, 15, 45, 30, 35],
                borderWidth: 1,
                backgroundColor: [
                    "#4a85f8",
                    "#f85084",
                    "#50f895",
                    "#f8a150",
                    "#8050f8",
                    "#f8e250"
                ]
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        size: 14,
                        weight: 'bold'
                    },
                    color: '#ffffff',
                    padding: 15
                }
            },
            tooltip: {
                padding: 15,
                cornerRadius: 8
            }
        }
    }
});





document.getElementById("light-mode").addEventListener("click",function(){

    Chart.defaults.color = "#161616";
    document.getElementById("main").style.backgroundColor="#e1e0e0";
    document.getElementById("main-area").style.backgroundColor="white";
    document.getElementById("sidebar").style.backgroundColor="white";
    document.getElementById("sidebar").style.color="#161616";
    document.getElementById("main-area").style.color="#161616";

    let boxes = document.getElementsByClassName("box");

    for(let i=0;i<boxes.length;i++)
    {
        boxes[i].style.backgroundColor="#e1e0e0";
        boxes[i].style.color="#161616";

    }


    document.getElementById("dark-mode").parentElement.style.display="block";
    document.getElementById("light-mode").parentElement.style.display="none";


});



document.getElementById("dark-mode").addEventListener("click",function(){

    Chart.defaults.color = "#161616";
    document.getElementById("main").style.backgroundColor="#3d3d3d";
    document.getElementById("main-area").style.backgroundColor="#161616";
    document.getElementById("sidebar").style.backgroundColor="#161616";
    document.getElementById("sidebar").style.color="white";
    document.getElementById("main-area").style.color="white";

    let boxes = document.getElementsByClassName("box");

    for(let i=0;i<boxes.length;i++)
    {
        boxes[i].style.backgroundColor="#3d3d3d";
        boxes[i].style.color="white";

    }

    document.getElementById("dark-mode").parentElement.style.display="none";
    document.getElementById("light-mode").parentElement.style.display="block";



});
