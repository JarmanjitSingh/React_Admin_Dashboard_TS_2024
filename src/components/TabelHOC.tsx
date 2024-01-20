import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import {
  Column,
  TableOptions,
  useTable,
  useSortBy,
  usePagination,
} from "react-table";

function TabelHOC<T extends Object>(
  columns: Column<T>[],
  data: T[],
  containerClassname: string,
  heading: string,
  showpagination: boolean = false
) {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
      initialState: {
        pageSize: 4,
      }
    };

    const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page, nextPage, previousPage, canNextPage, canPreviousPage, pageCount, state: {pageIndex} } =
      useTable(options, useSortBy, usePagination);

    return (
      <div className={containerClassname}>
        <h2 className="heading">{heading}</h2>

        <table className="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => {
              return (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                      {" "}
                      {column.isSorted && (
                        <span>
                          {column.isSortedDesc ? (
                            <AiOutlineSortDescending />
                          ) : (
                            <AiOutlineSortAscending />
                          )}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>

        {
        showpagination && <div className="tablePagination">
            <button disabled={!canPreviousPage} onClick={previousPage}>Prev</button>
            <span>{`${pageIndex + 1} pages of ${pageCount}`}</span>
            <button disabled={!canNextPage} onClick={nextPage}>next</button>
        </div>
        }
      </div>
    );
  };
}

export default TabelHOC;
