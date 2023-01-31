import React, { useContext } from "react";
import UserHeader from "./UserHeader";
import Feed from "../Feed/Feed";
import { Routes, Route } from "react-router-dom";
import UserPhotoPost from "./UserPhotoPost";
import UserEstatistics from "./UserStatistics";
import { UserContext } from "../../UserContext";
import NotFound from "../Helper/NotFound";
import Head from "../Helper/Head";

const User = () => {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minha Conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="post" element={<UserPhotoPost />} />
        <Route path="statistics" element={<UserEstatistics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
