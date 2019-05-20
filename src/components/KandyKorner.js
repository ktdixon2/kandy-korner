import React, { Component } from "react"
import EmployeeList from "./EmployeeList"
import LocationList from "./Locations"
import TypesList from "./Type"
import CandiesList from "./Candies"
import "./kandy.css"


class KandyKorner extends Component {


    employeesFromAPI = [
        { id: 1, name: "Willy Wonka" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    typesFromAPI = [
        { id: 1, type: "candy bars" },
        { id: 2, type: "bubble gum" },
        { id: 3, type: "suckers" },
        { id: 4, type: "gummies" }

    ]

    candiesFromAPI = [
        { id: 1, name: "Snickers" },
        { id: 2, name: "KitKat"},
        { id: 3, name: "M&Ms"},
        { id: 4, name: "Tootsie Pop"}
    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        types: this.typesFromAPI,
        candies: this.candiesFromAPI
    }

    render() {
        return (
            <article className="kandyBin">
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <TypesList types={this.state.types} />
                <CandiesList candies={this.state.candies} /> 
            </article>
        )
    }
}

export default KandyKorner