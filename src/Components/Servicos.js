import React from "react";
import brazil from "../Assets/brazil.png";
import callCenter from "../Assets/call-center.png";
import car2 from "../Assets/car-2.png";

const Servicos = () => {
  const coberturaData = [
    {
      image: brazil,
      title: "Nosso Serviço 1",
      text: "Descrição do serviço",
    },
    {
      image: callCenter,
      title: "Nosso Serviço 2",
      text: "Descrição do serviço",
    },
    {
      image: car2,
      title: "Nosso Serviço 3",
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
