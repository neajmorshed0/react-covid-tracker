import React, { Component } from "react";
import styles from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import Countries from "./components/CountryPicker/CountryPicker";
import { fetchData } from "./api";
import covidlogo from "./images/image.png";

class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }
  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country: country });
    //Fetch the data
    //set the state
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={covidlogo} alt="COVID-19" />
        <Cards data={data} />
        <Countries handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
