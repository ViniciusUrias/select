import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import { useTable } from "react-table";
import { CardContainer } from "./styles";
import { Styles } from "../tableStyles";
import TableCard from "./tableCard";

export default function Tableapi() {
  const [planets, setPlanets] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://swapi.dev/api/planets/");
    setPlanets(response.data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  const data = useMemo(() => planets, [planets]);

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Climate",
        accessor: "climate",
      },
      {
        Header: "Diameter",
        accessor: "diameter",
      },
      {
        Header: "Population",
        accessor: "population",
      },
      {
        Header: "Terrain",
        accessor: "terrain",
      },
      {
        Header: "Gravity",
        accessor: "gravity",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <Styles>
      <h1 style={{ textAlign: "center" }}>Planets</h1>
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
