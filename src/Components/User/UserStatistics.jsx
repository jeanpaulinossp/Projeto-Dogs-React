import React, { lazy, Suspense, useEffect } from "react";
import { STATS_GET } from "../../api/config";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import Head from "../Helper/Head";
import Loading from "../Helper/Loading";

const UserStatsGraph = lazy(() => import("./UserStatsGraph"));

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
      <Suspense fallback={<Loading />}>
        <Head title="Estatísticas" />
        <UserStatsGraph data={data} />
      </Suspense>
    );
  else return null;
};

export default UserEstatistics;
