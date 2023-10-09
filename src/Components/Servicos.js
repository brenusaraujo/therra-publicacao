import React from "react";
import PredioComercial from "../Assets/predio-comercial.png";
import Retroescavadeira from "../Assets/retroescavadeira.png";
import RoloPintura from "../Assets/rolo-de-pintura.png";

const Servicos = () => {
  const coberturaData = [
    {
      image: PredioComercial,
      title: "Manutenção predial",
      text: "Descrição do serviço",
    },
    {
      image: Retroescavadeira,
      title: "Obras de infraestrutura",
      text: "Descrição do serviço",
    },
    {
      image: RoloPintura,
      title: "Construção e reforma",
      text: "Descrição do serviço",
    }
  ];
  return (
    <div className="facility-wrapper">
      <h1 className="primary-subheading">
        Nossos serviços
      </h1>
      <div className="about-section-text-container">
        <div className="work-section-bottom">
          {coberturaData.map((data) => (
            <div className="servico-info" key={data.title}>
              <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
                <h2>{data.title}</h2>
              </div>
              <div>
                <p>{data.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicos;
