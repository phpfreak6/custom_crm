const sidenav = document.getElementById("main-sidenav");
const sidenavInstance = mdb.Sidenav.getInstance(sidenav);

let innerWidth = null;

const setMode = (e) => {
  // Check necessary for Android devices
  if (window.innerWidth === innerWidth) {
    return;
  }

  innerWidth = window.innerWidth;

  if (window.innerWidth < 1400) {
    sidenavInstance.changeMode("over");
    sidenavInstance.hide();
  } else {
    sidenavInstance.changeMode("side");
    sidenavInstance.show();
  }
};

setMode();

// Event listeners
window.addEventListener("resize", setMode);

const searchFocus = document.getElementById('search-focus');
const keys = [
  { keyCode: 'AltLeft', isTriggered: false },
  { keyCode: 'ControlLeft', isTriggered: false },
];

window.addEventListener('keydown', (e) => {
  keys.forEach((obj) => {
    if (obj.keyCode === e.code) {
      obj.isTriggered = true;
    }
  });

  const shortcutTriggered = keys.filter((obj) => obj.isTriggered).length === keys.length;

  if (shortcutTriggered) {
    searchFocus.focus();
  }
});

window.addEventListener('keyup', (e) => {
  keys.forEach((obj) => {
    if (obj.keyCode === e.code) {
      obj.isTriggered = false;
    }
  });
});

const optionsUsersSessions = {
  options: {
    scales: {
      y:
      {
        display: true,
        position: 'left',
      },
      y1:
      {
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
  },
};

const dataUsersSessions = {
  type: "line",
  data: {
    labels: [
      "20 Sep",
      "21 Sep",
      "22 Sep",
      "23 Sep",
      "24 Sep",
      "25 Sep",
      "26 Sep",
    ],
    datasets: [
      {
        label: "Users",
        data: [150, 590, 800, 810, 560, 550, 400],
        yAxisID: 'y',
      },
      {
        label: "Sessions",
        data: [750, 690, 900, 910, 660, 750, 500],
        yAxisID: 'y1',
        backgroundColor: "rgba(66, 133, 244, 0.0)",
        borderColor: "#33b5e5",
        pointBorderColor: "#33b5e5",
        pointBackgroundColor: "#33b5e5",
      },
    ],
  },
};

new mdb.Chart(
  document.getElementById("chart-users-sessions"),
  dataUsersSessions, optionsUsersSessions
);

const optionsRevenueConversion = {
  options: {
    scales: {
      y:
      {
        display: true,
        position: 'left',
      },
      y1:
      {
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
  },
};

const dataRevenueConversion = {
  type: "line",
  data: {
    labels: [
      "20 Sep",
      "21 Sep",
      "22 Sep",
      "23 Sep",
      "24 Sep",
      "25 Sep",
      "26 Sep",
    ],
    datasets: [
      {
        label: "Transcations",
        yAxisID: 'y',
        data: [21, 23, 25, 34, 23, 19, 9],
        order: 2,
      },
      {
        label: "Conversion rate (%)",

        yAxisID: 'y1',
        data: [1.5, 2, 0.5, 3, 1.2, 4, 3.4],
        type: "line",
        order: 1,
        backgroundColor: "rgba(66, 133, 244, 0.0)",
        borderColor: "#94DFD7",
        borderWidth: 2,
        pointBorderColor: "#94DFD7",
        pointBackgroundColor: "#94DFD7",
        lineTension: 0.0,
      },
    ],
  },
};

new mdb.Chart(
  document.getElementById("chart-revenue-conversion"),
  dataRevenueConversion,
  optionsRevenueConversion
);

const optionsSiteHealth = {
  options: {
    scales: {
      y:
      {
        display: true,
        position: 'left',
      },
      y1:
      {
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
  },
};

const dataSiteHealth = {
  type: "line",
  data: {
    labels: [
      "20 Sep",
      "21 Sep",
      "22 Sep",
      "23 Sep",
      "24 Sep",
      "25 Sep",
      "26 Sep",
    ],
    datasets: [
      {
        label: "Bounce rate (%)",
        yAxisID: 'y',
        data: [51, 53, 55, 54, 53, 59, 59],
        order: 2,
      },
      {
        label: "Avg. Page Load Time (sec)",

        yAxisID: 'y1',
        data: [1.5, 2, 0.5, 3, 1.2, 4, 3.4],
        type: "line",
        order: 1,
        backgroundColor: "rgba(66, 133, 244, 0.0)",
        borderColor: "#94DFD7",
        borderWidth: 2,
        pointBorderColor: "#94DFD7",
        pointBackgroundColor: "#94DFD7",
        lineTension: 0.0,
      },
    ],
  },
};

new mdb.Chart(
  document.getElementById("chart-site-health"),
  dataSiteHealth,
  optionsSiteHealth
);

const optionDevicePerformance = {
  options: {
    scales: {
      y:
      {
        display: true,
        position: 'left',
      },
      y1:
      {
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
  },
};

const dataDevicePerformance = {
  type: "bar",
  data: {
    labels: ["Desktop", "Mobile", "Tablet"],

    datasets: [
      {
        label: "Users",
        data: [510, 653, 255],
      },
      {
        label: "Page views",
        data: [1251, 1553, 1355],
        backgroundColor: "#94DFD7",
        borderColor: "#94DFD7",
      },
    ],
  },
};

new mdb.Chart(
  document.getElementById("chart-device-performance"),
  dataDevicePerformance,
  optionDevicePerformance
);

const optionTransactions = {
  options: {
    scales: {
      y:
      {
        display: true,
        position: 'left',
      },
      y1:
      {
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
  },
};

const dataTransactions = {
  type: "bar",
  data: {
    labels: ["Desktop", "Mobile", "Tablet"],

    datasets: [
      {
        label: "Transactions",
        data: [51, 65, 25],
        yAxisID: 'y',
      },
      {
        label: "Conversion rate (%)",
        data: [0.2, 0.8, 0.4],
        yAxisID: 'y1',
        backgroundColor: "#94DFD7",
        borderColor: "#94DFD7",
      },
    ],
  },
};

new mdb.Chart(
  document.getElementById("chart-transactions"),
  dataTransactions,
  optionTransactions
);

// Pie chart with plugin
const dataSessions = {
  type: "pie",
  data: {
    labels: ["Desktop", "Mobile", "Tablet"],
    datasets: [
      {
        label: "Traffic",
        data: [3230, 4531, 1832],
        backgroundColor: [
          "rgba(63, 81, 181, 0.5)",
          "rgba(77, 182, 172, 0.5)",
          "rgba(66, 133, 244, 0.5)",
        ],
      },
    ],
  },
};

new mdb.Chart(
  document.getElementById("chart-sessions"),
  dataSessions
);