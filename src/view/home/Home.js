import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStats } from "./action";
import { StatsCard, CountriesTable,CountryMap} from "../../components";
import { Container, Row } from "reactstrap";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, stats } = useSelector((state) => ({
    loading: state.HomeReducers.loading,
    stats: state.HomeReducers.stats,
  }));

  useEffect(() => {
    dispatch(fetchStats());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div>loading....</div>
      ) : (
        <>
          {/* {stats !== null && (
            // <Row className="mt-5">
            //   <StatsCard name="Cases" stats={stats.cases} />
            //   <StatsCard name="Deaths" stats={stats.deaths} />
            //   <StatsCard name="Recovered" stats={stats.recovered} />
            //   <StatsCard name="Active" stats={stats.active} />
            // </Row>
          )} */}
        </>
      )}
      {/* <CountriesTable /> */}
      <CountryMap />
    </>
  );
};

export default Home;