import React, { useEffect } from "react";
import { STATS_GET } from "../../api/config";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import Head from "../Helper/Head";
import Loading from "../Helper/Loading";
import UserStatsGraph from "./UserStatsGraph";

const UserEstatistics = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <>
        <Head title="Estatísticas" />
        <UserStatsGraph data={data} />
      </>
    );
  else return null;
};

export default UserEstatistics;
