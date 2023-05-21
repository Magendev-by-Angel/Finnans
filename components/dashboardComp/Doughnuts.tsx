import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const getData = (current, total) => {
  console.log(current / total > 1 ? current - total : total - current);
  const data = {
    datasets: [
      {
        data: [
          current / total > 1 ? -(current - total) : current,
          current / total > 1 ? total - (current - total) : total - current,
        ],
        backgroundColor: [
          current / total > 1
            ? "rgba(234, 64, 64, 1)"
            : current / total === 1
            ? "rgba(130, 119, 141, 1)"
            : current / total >= 0.9 && current / total < 1
            ? "rgba(233, 177, 112, 1)"
            : "rgba(112, 233, 175, 1)",
          "rgba(130, 119, 141, 0.5)",
        ],
        borderWidth: 0,
      },
    ],
  };
  return data;
};

const Doughnuts = () => {
  const [dataD, setDataD] = useState<
    { current: number; total: number; month: string }[]
  >([]);
  useEffect(() => {
    setDataD([
      {
        current: 150000,
        total: 250000,
        month: "February",
      },
      {
        current: 225000,
        total: 250000,
        month: "March",
      },
      {
        current: 275000,
        total: 250000,
        month: "April",
      },
    ]);
  }, []);
  return (
    <div className="w-full h-full flex justify-start items-center">
      <div className="w-full h-full flex justify-center items-center bg-table rounded-lg">
        <div className="w-full h-full flex justify-evenly items-center ">
          {dataD.length > 0 ? (
            dataD.map((item, i) => {
              return (
                <div className="max-w-[33%] flex flex-wrap" key={i}>
                  <h1 className="w-full text-2xl flex justify-center items-center">
                    {item.month}
                  </h1>
                  <Doughnut
                    data={getData(item.current, item.total)}
                    className=""
                  />
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doughnuts;
