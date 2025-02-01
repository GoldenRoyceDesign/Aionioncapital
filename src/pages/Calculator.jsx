import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const Calculator = () => {
    const [investment, setInvestment] = useState(25000);
    // const [withdrawal, setWithdrawal] = useState(1500);
    const [expectedReturn, setExpectedReturn] = useState(12); // % slider
    const [timePeriod, setTimePeriod] = useState(10); // Years slider

    // Calculation Logic
    const calculateLumpsum = (monthlyInvestment, rate, time) => {
        const totalValue = Math.floor(
            monthlyInvestment * Math.pow(1 + rate / 100, time)
        );
        return totalValue;
    };

    const totalValue = calculateLumpsum(investment, expectedReturn, timePeriod);
    const estimatedReturns = totalValue - investment;

    // Chart Data
    const chartData = {
        labels: ["Invested Amount", "Est Return"],
        datasets: [
            {
                data: [investment, estimatedReturns],
                backgroundColor: ["#5567ff", "#b3c2ff"],
                borderWidth: 1,
            },
        ],
    };


    // Dynamic slider background function
    const getSliderBackground = (value, min, max) => {
        const percentage = ((value - min) / (max - min)) * 100;
        return `linear-gradient(to right, #9d9bfc ${percentage}%, #dedffe ${percentage}%)`;
    };


    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false, // Allows manual control of dimensions
        cutout: "70%",
        plugins: {
            legend: {
                position: "top", // Adjust legend position
            },
        },
        layout: {
            padding: {
                top: 20, // Padding above the chart
            },
        },
    };

    return (
        <div style={styles.container} className="container row mt-5">
            {/* Left Section */}
            <div style={styles.leftSection} className="col-md-6">
                <h1 style={styles.heading}>Lumpsum Calculator</h1>
                <div style={styles.inputGroup}>
                    <label>Total Investment</label>
                    <input
                        type="number"
                        value={investment}
                        onChange={(e) => setInvestment(Number(e.target.value))}
                        style={styles.input}
                    />
                </div>
                {/* <div style={styles.inputGroup}>
                    <label>Withdrawal Amount Per Month</label>
                    <input
                        type="number"
                        value={withdrawal}
                        onChange={(e) => setWithdrawal(Number(e.target.value))}
                        style={styles.input}
                    />
                </div> */}
                <div style={styles.inputGroup}>
                    <div className="d-flex justify-content-between">
                        <label>Expected Return (%)</label>
                        <span style={styles.span}>{expectedReturn}%</span>
                    </div>
                    <input
                        type="range"
                        min="1"
                        max="20"
                        value={expectedReturn}
                        onChange={(e) => setExpectedReturn(Number(e.target.value))}
                        style={{
                            ...styles.slider,
                            background: getSliderBackground(expectedReturn, 1, 20),
                        }}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <div className="d-flex justify-content-between">
                        <label>Time Period (Years)</label>
                        <span style={styles.span}>{timePeriod} Yr</span>
                    </div>
                    <input
                        type="range"
                        min="1"
                        max="30"
                        value={timePeriod}
                        onChange={(e) => setTimePeriod(Number(e.target.value))}
                        className="slider"
                        style={{
                            ...styles.slider,
                            background: getSliderBackground(timePeriod, 1, 30),
                        }}

                    />

                </div>
            </div>

            {/* Right Section */}
            <div style={styles.rightSection} className="col-md-6 cal-right">
                <div style={{ width: "300px", height: "300px", margin: "auto" }} className="d-flex justify-content-center cal-doughnut">
                    <Doughnut data={chartData} options={chartOptions} />
                </div>


                <table style={{ ...styles.table, borderCollapse: 'collapse', border: 'none' }}>
                    <tbody>
                        <tr style={{ ...styles.tableRow, borderBottom: "1px solid #ccc" }}>
                            <td style={{ border: 'none' }}>Invested Amount:</td>
                            <td style={{ border: 'none' }}>₹ {investment}</td>
                        </tr>
                        <tr style={{ ...styles.tableRow, borderBottom: "1px solid #ccc" }}>
                            <td style={{ border: 'none' }}>Estimated Returns:</td>
                            <td style={{ border: 'none' }}>₹ {estimatedReturns}</td>
                        </tr>
                        <tr style={{ ...styles.tableRow, borderBottom: "1px solid #ccc" }}>
                            <td style={{ border: 'none' }}>Total Value:</td>
                            <td style={{ border: 'none' }}>₹ {totalValue}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="d-flex justify-content-center">
                    <button style={styles.button}>Get Started Today</button>
                </div>
            </div>
        </div>
    );
};

// Styles
const styles = {
    container: {
        display: "flex",
        gap: "20px",
        padding: "20px",
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "auto",
        fontFamily: "Arial, sans-serif",
        alignItems: "stretch",
    },
    leftSection: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around", // Distributes content evenly
    },
    rightSection: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Distributes content evenly
        padding: "20px",
        background: "#fef8f8",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",

    },
    heading: {
        fontSize: "1.5rem",
        marginBottom: "20px",
        fontWeight: "700"
    },
    inputGroup: {
        marginBottom: "20px",
    },
    span: {
        backgroundColor: "#fbdbde",
        padding: ".3rem 1.5rem",
        borderRadius: "8px",
        width: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: "100%",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        marginTop: "20px"
    },
    slider: {
        width: "100%",
        height: "8px",
        borderRadius: "4px",
        outline: "none",
        appearance: "none",
        cursor: "pointer",
    },
    table: {
        width: "100%",
        marginTop: "20px",
        borderSpacing: "10px",
    },
    button: {
        marginTop: "20px",
        padding: "10px 20px",
        background: "#5567ff",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        width: "fit-content",
    },

};

export default Calculator;
