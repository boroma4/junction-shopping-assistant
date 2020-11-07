import React from "react";
import '../UserProfile/Profile.css';
import { VictoryBar, VictoryChart} from "victory";

const sampleData = [
    { x: "Plastic cup", y: 900 },
    { x: "Trash bags", y: 400 },
    { x: "Hand sanitizer", y: 700 },
];
const HistogramGraphMiscellenaous = () => {
    return (
        <div>
            <VictoryChart domainPadding={{ x: 40, y: 40 }}>
                <VictoryBar
                    style={{ data: { fill: "#c43a31" } }}
                    data={sampleData}
                />
            </VictoryChart>
        </div>
    );
};

export default HistogramGraphMiscellenaous;
