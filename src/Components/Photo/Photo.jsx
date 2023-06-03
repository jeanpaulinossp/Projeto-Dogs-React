import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Error from "../Helper/Error";
import Head from "../Helper/Head";
import Loading from "../Helper/Loading";
import PhotoContent from "./PhotoContent";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto } from "../../Store/photo";

const Photo = () => {
  // useParams retorna o ultimo parametro da rota
  const { id } = useParams();

  const { loading, error, data } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhoto(id));
  }, [dispatch, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single={true} />
      </section>
    );
  else return null;
};

export default Photo;
