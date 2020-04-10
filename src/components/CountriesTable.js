import React, { useEffect } from "react";
import { fetchCounries } from "../view/home/action";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "reactstrap";

const CountriesTable = () => {
  const dispatch = useDispatch();
  const { loading, stats } = useSelector((state) => ({
    loading: state.HomeReducers.countries.loading,
    stats: state.HomeReducers.countries.stats,
 }));

useEffect(() => {
    dispatch(fetchCounries());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div>loading....</div>
        ) : (
        <>
          {stats !== null && (
            <Table>
              <thead>
                <tr>
                  <th>Country Name</th>
                  <th>Total Cases</th>
                  <th>Deaths</th>
                  <th>Recovered</th>
                </tr>
              </thead>
              <tbody>
                {stats.map((country, index) => (
                  <tr key={index}>
                    <td>{country.country}</td>
                    <td>{country.cases}</td>
                    <td>{country.deaths}</td>
                    <td>{country.recovered}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </>
      )}
    </>
  );
};
export default CountriesTable;