
"use client"

import { useState } from "react";
import { formatDateFech } from "../utils/formatDate";
import { CustomDatePickers } from "../components/CustomDatePickers";
import { urlBase } from "../utils/url";
import { ButtonStyled } from "../components/Button";
import { arrayTrunc } from "../utils/constant";
import LoaderSpinners from "../components/LoaderSpinners";
import { ChartView } from "../views/ChartViews";
import { TablesComponent } from "../components/TablesComponent";
import { useApi } from "../components/CustomHooks/useApi"
import { compareDates } from "../utils/middleware";

export default function DashboardData() {
    const [trunc, setTrunc] = useState(arrayTrunc?.[0]);
    const [start, setStart] = useState();
    const [end, setEnd] = useState();
    const { loading, data, fetchData } = useApi(urlBase + `generacion/evolucion-renovable-no-renovable?start_date=${formatDateFech(start)}&end_date=${formatDateFech(end)}&time_trunc=${trunc}`)

    const dateDisable = compareDates(start, end)

    return (
        <>
            <div className="flex justify-start flex-col items-center  h-auto mt-5 mb-8 container-dashboard">
                <h1 className="title-dashboard font-black my-5 text-5xl">
                    Power Generation in Spain
                </h1>
                <select
                    datatestid="select-day"
                    className="block  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-asafe"
                    onChange={(e) => setTrunc(e.target.value)}>
                    {arrayTrunc &&
                        arrayTrunc.map((time, i) => (
                            <option value={time} key={i}>
                                {time}
                            </option>
                        ))}
                </select>
                <div className="flex justify-center items-cente py-6">
                    <div className="flex justify-center items-center flex-col">
                        <h2 className="font-extrabold">Start</h2>
                        <CustomDatePickers className="select-datePicker-start" selectedDate={start} setSelectedDate={setStart} />
                    </div>
                    <div className="flex justify-center items-center flex-col">
                        {" "}
                        <h2 className="font-extrabold">End</h2>
                        <CustomDatePickers className="select-datePicker-end" selectedDate={end} setSelectedDate={setEnd} />
                    </div>
                </div>
                {dateDisable && <p className="bg-error  p-1 pr-3 pl-3 mb-3 font-normal text-white rounded-md">Date incorrect</p>}
                <ButtonStyled
                    datatestid="button-search"
                    disabled={!start || !end || dateDisable}
                    onClick={() => fetchData()}>
                    Search
                </ButtonStyled>
                <div className="flex justify-center flex-col items-center ">
                    {loading &&
                        <div className="min-w-48 min-h-48 m-6 spinners-loading" >
                            <LoaderSpinners />
                        </div>}
                    {!loading && data?.length > 0 &&
                        <><div className="flex w-full flex-wrap justify-between items-center table-container">
                            {data.map((dev, key) => {
                                return (
                                    <span key={key}>
                                        <TablesComponent data={dev?.attributes} title={dev?.attributes?.title} />
                                    </span>
                                );
                            })}
                        </div>
                            <span className="w-full chart-container">
                                <ChartView data={data} />
                            </span>
                        </>
                    }
                    {!loading && data?.length === 0 &&
                        <h2 className="font-bold my-10">
                            Please select the parameters to display.
                        </h2>
                    }
                </div>
            </div >
        </>
    );
}