import React, { useEffect, useState } from "react";
import { formatDate } from "../utils/formatDate";
import ChartComponent from "../components/ChartComponent";
import { ButtonTab } from "../components/ButtonTab";


export const ChartView = ({ data }) => {
  const [label, setLabel] = useState([]);
  const [chart, setChart] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  const Arraychart = (dat) => {
    if (dat) {
      const newChartValues = [];
      dat.forEach((values) => {
        values?.attributes?.values.forEach((val) => {
          newChartValues.push(val.value);
        });
      });
      setChart(newChartValues);
    }
  };

  const ArrayLabels = (dat) => {
    if (dat) {
      const newLabels = [];
      dat.forEach((value) => {
        value?.attributes?.values.forEach((val) => {
          newLabels.push(formatDate(val.datetime));
        });
      });
      setLabel(newLabels);
    }
  };

  useEffect(() => {
    if (data) {
      Arraychart(data);
      ArrayLabels(data);
    }
  }, [data]);

  return (
    <>
      <div className="w-full">
        <span className="flex justify-start items-center my-4">
          <ButtonTab className="mr-3" id={0} activeTab={activeTab} onClick={() => setActiveTab(0)}>
            {data?.[0].type}
          </ButtonTab>
          <ButtonTab className="ml-3" id={1} activeTab={activeTab} onClick={() => setActiveTab(1)}>
            {data?.[0].type}
          </ButtonTab>
        </span>
        {data &&
          data.map((values, i) => (
            <React.Fragment key={i}>
              {activeTab === i && (
                <span className="my-12 h-[320px]" >
                  <ChartComponent data={chart} labels={label} label={values.type} type="line" />
                </span>
              )}
            </React.Fragment>
          ))}
      </div>
    </>
  );
};
