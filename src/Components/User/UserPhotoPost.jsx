import React, { useEffect, useState } from "react";
import styles from "./UserPhotoPost.module.css";
import Input from "../Forms/Input/Input";
import Button from "../Forms/Button/Button";
import useForm from "../../Hooks/useForm";
import Error from "../Helper/Error";
import { useNavigate } from "react-router-dom";
import Head from "../Helper/Head";
import { useDispatch, useSelector } from "react-redux";
import { photoPost } from "../../Store/photoPhost";

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = useState({});

  const { data, error, loading } = useSelector((state) => state.photoPhost);
  const { token } = useSelector((state) => state.token.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    dispatch(photoPost({ formData, token }));
  }
  function handleImgChange({ target }) {
    setImg({
      // o preview é para ser usado para exibir uma previa da imagem
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste sua Foto" />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
          className={styles.file}
        />
        {loading ? <Button disabled>Enviando</Button> : <Button>Enviar</Button>}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
