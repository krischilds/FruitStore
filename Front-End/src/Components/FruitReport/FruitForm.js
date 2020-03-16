import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./fruit-report.css";

export default class FruitForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            startDate: props.startDate,
            endDate: props.endDate
        };

        this.handleChangeStartDate.bind(this);
        this.handleChangeEndDate.bind(this);
    }

    /**
     * send state change to parent so that new dates are passed down to the table and chart components
     */
    handleClickViewSales = () => {
        this.props.updateDateFilter(this.state.startDate, this.state.endDate);
    }

    handleChangeStartDate = event => {
        this.setState({ startDate: event.target.value });
    };

    handleChangeEndDate = event => {
        this.setState({ endDate: event.target.value });
    };

    render() {
        return (
            <div className="indent-left">
                <form className="report-form">
                    <label htmlFor="startdate">Select Start Date
                        <input type="date" id="startdate" name="startdate"
                            value={this.state.startDate}
                            onChange={this.handleChangeStartDate}
                            min="2018-01-01" max={this.state.endDate} required />
                        <span className="validity"></span>
                    </label>

                    <label htmlFor="enddate">Select End Date
                        <input type="date" id="enddate" name="enddate"
                            value={this.state.endDate}
                            onChange={this.handleChangeEndDate}
                            min={this.state.startDate} max="2030-12-31" />
                        <span className="validity"></span>
                    </label>

                    <div style={{ marginTop: "4px" }}>
                        <button onClick={this.handleClickViewSales} className="report-form-button" type="button">View Sales</button>
                    </div>
                </form>

            </div>
        )
    }
}

FruitForm.propTypes = {
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    updateDateFilter: PropTypes.func,
};