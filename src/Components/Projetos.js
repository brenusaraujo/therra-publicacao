import React from "react";
import ProjetoTeste from "../Assets/projeto-teste.png";

const Projetos = () => {
  const workInfoData = [
    {
      image: ProjetoTeste,
      title: "Projeto 1",
      text: "Descrição do projeto ou link para outra página para o projeto?",
    },
    {
      image: ProjetoTeste,
      title: "Projeto 2",
      text: "Descrição do projeto ou link para outra página para o projeto?",
    },
    {
      image: ProjetoTeste,
      title: "Projeto 3",
      text: "Descrição do projeto ou link para outra página para o projeto?",
    }
  ];
  return (
    <div className="consultants-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Nossos projetos</p>
        <h1 className="primary-heading">Confira nossos últimos projetos</h1>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
              <h2>{data.title}</h2>
            </div>
            <div className="container-parceiros">
              <p>{data.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projetos;
