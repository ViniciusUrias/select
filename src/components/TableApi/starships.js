import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import { useTable } from "react-table";
import { CardContainer } from "./styles";
import { Styles } from "../tableStyles";
import TableCard from "./tableCard";
export default function Tableapistarships() {
  const [starShips, setStarShips] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://swapi.dev/api/starships/");
    setStarShips(response.data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  const data = useMemo(() => starShips, [starShips]);

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Model",
        accessor: "model",
      },
      {
        Header: "Manufacturer",
        accessor: "manufacturer",
      },
      {
        Header: "Cost",
        accessor: "cost_in_credits",
      },
      {
        Header: "Max Speed",
        accessor: "max_atmosphering_speed",
      },
      {
        Header: "Passengers",
        accessor: "passengers",
      },
      {
        Header: "Lenght",
        accessor: "length",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <Styles>
      <h1 style={{ textAlign: "center" }}>StarShips</h1>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <CardContainer>
        <TableCard
        
        />

      </CardContainer>
    </Styles>
  );
}
