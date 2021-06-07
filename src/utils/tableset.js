import { useMemo } from "react"

export const planetsColumns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name', 
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

  export const peopleColumns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Gender',
        accessor: 'gender',
      },
      {
        Header: 'Height',
        accessor: 'height',
      },
      {
        Header: 'Mass',
        accessor: 'mass',
      },
      {
        Header: 'Skin Color',
        accessor: 'skin_color',
      },
      {
        Header: 'Birth Year',
        accessor: 'birht_year',
      },
      
    ],
    []
  )

