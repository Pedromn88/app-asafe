import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const CustomDatePickers = ({ className, selectedDate, setSelectedDate, id, datatestid }) => {
  const handleChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="container mx-auto p-4 d-flex justify-center items-center">
      <DatePicker
        datatestid={datatestid}
        id={id}
        todayButton="Hoy"
        maxDate={new Date()}
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select Date"
        className={`${className} block w-full focus:border-asafe p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500`}
      />
    </div>
  );
};
