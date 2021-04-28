import React, { Component } from "react";
import "./App.css";
import ReactEcharts from "echarts-for-react";
const employeedata = require("./data.json");
const grapoption1 = {
  title: {
    text: "Sample Data",
    subtext: "By Anmol Garg",
  },

  grid: {
    top: 80,
    bottom: 30,
  },
  yAxis: {
    type: "value",
    position: "top",
    splitLine: {
      lineStyle: {
        type: "dashed",
      },
    },
  },
  xAxis: {
    type: "category",
    axisLine: { show: false },
    axisLabel: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
    data: ["six", "five", "four", "three", "two", "one"],
  },
  series: [
    {
      name: "Employee",
      type: "bar",
      label: {
        show: true,
        formatter: "{b}",
      },
      data: employeedata,
    },
  ],
};
const grapoption2 = {
  title: {
    text: "Sample Data",
    subtext: "By Anmol Garg",
  },

  grid: {
    top: 80,
    bottom: 30,
  },
  xAxis: {
    type: "value",
    position: "top",
    splitLine: {
      lineStyle: {
        type: "dashed",
      },
    },
  },
  yAxis: {
    type: "category",
    axisLine: { show: false },
    axisLabel: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
    data: ["six", "five", "four", "three", "two", "one"],
  },
  series: [
    {
      name: "Employee",
      type: "bar",
      label: {
        show: true,
        formatter: "{b}",
      },
      data: employeedata,
    },
  ],
};
class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      graphOption: grapoption1,
      flag: 1,
    };
    console.log(employeedata);
  }
  changestate = () => {
    console.log(this.state.graphOption);
    if (this.state.flag === 1) {
      this.setState({ graphOption: grapoption2, flag: 0 });
    } else {
      this.setState({ graphOption: grapoption1, flag: 1 });
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button className="button" onClick={this.changestate}>
            Click to Change Graph
          </button>
          <ReactEcharts
            style={{ height: "100vh", width: "100vw" }}
            ref={(e) => {
              this.echartsReactRef = e;
            }}
            option={this.state.graphOption}
          />
        </header>
      </div>
    );
  }
}

export default App;
