import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import { useTable } from "react-table";
import { CardContainer } from "./styles";
import { Styles } from "../tableStyles";
import TableCard from "./tableCard";
export default function TableapiPeople() {
  const [people, setPeople] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://swapi.dev/api/people/");
    setPeople(response.data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  const data = useMemo(() => people, [people]);

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "Height",
        accessor: "height",
      },
      {
        Header: "Mass",
        accessor: "mass",
      },
      {
        Header: "Skin Color",
        accessor: "skin_color",
      },
      {
        Header: "Birth Year",
        accessor: "birth_year",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <Styles>
      <h1 style={{ textAlign: "center" }}>People</h1>
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
