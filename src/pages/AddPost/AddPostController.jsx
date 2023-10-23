import { useState } from "react";
import AddPostView from "./AddPostView";
import AddPostModel from "./AddPostModel";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPostController = () => {
  const navigate = useNavigate();

  // class'ın örnepğini oluşturma
  const model = new AddPostModel();

  // state'in varsayılan değerini model'den aldık
  const [form, setForm] = useState(model.state);

  // hangi inputta değişiklik varsa
  // input'un label'ına  göre state'i günceller
  const onInputChange = (label, value) => {
    // state'in kopyası
    const copyState = { ...form };

    // objenin dinamik bir şekilde değerlerini değiştirme
    copyState[label] = value;

    // state'i güncelle
    setForm(copyState);
  };

  // formun gönderilmesi
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.user || !form.text || !form.title) {
      alert("Lütfen bütün alanları doldurun");
      return;
    }

    axios.post("http://localhost:3000/posts", form).then(() => navigate("/"));
  };

  return (
    <AddPostView onInputChange={onInputChange} handleSubmit={handleSubmit} />
  );
};

export default AddPostController;
