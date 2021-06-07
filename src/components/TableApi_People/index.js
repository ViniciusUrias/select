
    import axios from 'axios';
import Link from 'next/link'
import { useEffect, useState, useMemo } from 'react';
import { useTable } from 'react-table'
import { Card, CardContainer, CardImg, CardText} from '../TableApi/styles'
import {Styles} from '../tableStyles'
import TableCard from '../TableApi/tableCard';
export default function TableapiPeople(){
    const [people, setPeople] = useState([])

    const getData = async () =>{
        const page1 = await axios.get('https://swapi.dev/api/planets/');
        const page2 = await axios.get('https://swapi.dev/api/people/?page=2');

        axios.all([page1, page2]).then(
          axios.spread((...allPeople) => {
            const people1 = allPeople[0];
            const people2 = allPeople[1];

            console.log(people1, people2)
          })
        )
        // setPeople(response.data.results)
    }

    useEffect(() =>{
        getData()
    },[] )


    const data = useMemo(
        () => people,
        [people]
      )
    
      const columns = useMemo(
        () => [
          {
            Header: 'Name',
            accessor: 'name', // accessor is the "key" in the data
          },
          {
            Header: 'Climate',
            accessor: 'climate',
          },
          {
            Header: 'Diameter',
            accessor: 'diameter',
          },
          {
            Header: 'Population',
            accessor: 'population',
          },
          {
            Header: 'Terrain',
            accessor: 'terrain',
          },
          {
            Header: 'Gravity',
            accessor: 'gravity',
          },
         
    
        ],
        []
      )
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data })
    

    return(
        <Styles>
          <h1 style={{textAlign: 'center'}}>Planets</h1>
        <table {...getTableProps()} >
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
               
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                   
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>

<CardContainer>
  <TableCard 
  href="/" 
  src="https://www.hushhush.com/wp-content/uploads/2018/12/stormtrooper-life-size-figure-star-wars.png" 
  text="Characters"/>
   <TableCard 
  href="/" 
  src="https://www.hushhush.com/wp-content/uploads/2018/12/stormtrooper-life-size-figure-star-wars.png" 
  text="Vehicles"/>
   <TableCard 
  href="/" 
  src="https://www.hushhush.com/wp-content/uploads/2018/12/stormtrooper-life-size-figure-star-wars.png" 
  text="Guns"/>
</CardContainer>
   
    </Styles>

    );
    
    
    };
