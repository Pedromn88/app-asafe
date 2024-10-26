import { useState } from "react";
import { Pagination } from "./pagination";
import { tableContain } from "../utils/constant";
import { formatValue } from "../utils/middleware";

export const TablesComponent = ({ data, title }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.values?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data?.values?.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  return (
    <>
      <div className="mx-4" >
        <div className="flex justify-center">
          <h2 className="font-extrabold text-asafe my-6 text-lg	title-table-component">{title}</h2>
        </div>
        <table className="text-sm text-left text-gray-500 dark:text-gray-400 border-2 border-asafe container-table">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {tableContain &&
                tableContain.map((head, i) => (
                  <th scope="col" className="px-6 py-3 text-center title-table" key={i}>
                    {head.label}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {currentItems?.length > 0 &&
              currentItems.map((elem, i) => (
                <tr
                  className="hover:bg-gray-100 bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={i}
                >
                  {tableContain.map((col, idx) => (
                    <td className="px-6 py-4 text-center" key={idx}>
                      {formatValue(col.key, elem?.[col.key])}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
        <div className="my-3 flex justify-end items-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onNextPage={handleNextPage}
            onPrevPage={handlePrevPage}
          />
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="ml-4 bg-white  border border-asafe rounded  p-1 text-sm font-medium">
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>
      </div >
    </>
  );
}
