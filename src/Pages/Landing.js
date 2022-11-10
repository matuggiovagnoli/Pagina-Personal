import React from "react";
import { FormattedMessage } from "react-intl";
import TextAnimated from "../comoponentes/AnimatedText/TextAnimated";
import { useDispatch } from "react-redux";
import { idiomaIngles, idiomaEspañol } from "../features/leng/lenguajeSlice";
import { img } from "../assets/img";
import doc from "../assets/doc.pdf";

const Landing = () => {
  // Usamos dispatch para enviar la accion y cambiar el idioma
  const dispatch = useDispatch();


  return (
    <section className="bg-slate-300 w-full h-screen relative">
      <img
        src={img.portada}
        className="absolute top-0 w-[100%] h-[70%] z-0"
        alt="imagen de portada"
      />
      <img
        src={img.retrato}
        className="absolute bottom-32 2xl:bottom-52 bg-slate-300 border-solid border-4 border-slate-300 rounded-full w-48 h-48 2xl:w-60 2xl:h-60 z-10 "
        alt="imagen de portada"
      />
      <div className="absolute top-3 right-4 py-2">
        <img
          src={img.spain}
          className="rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-300"
          alt="bandera españa"
          onClick={() => dispatch(idiomaEspañol())}
        />
        <img
          src={img.usa}
          className="cursor-pointer"
          alt="bandera estados unidos"
          onClick={() => dispatch(idiomaIngles())}
        />
      </div>
      <p className="absolute top-[45%] font-serif font-medium text-3xl md:text-4xl text-white">
        MATIAS DANIEL GOMEZ GIOVAGNOLI
      </p>
      <div className="absolute bottom-10">
        <TextAnimated />
      </div>
      <a
        className="absolute top-4 left-4 bg-transparent border-solid border-2 border-white text-white font-mono font-semibold hover:bg-slate-200 hover:text-cyan-600 hover:border-cyan-600 cursor-default p-2 "
        href={doc}
        download={"Currículum Matias Gomez Giovagnoli"}
      >
        <FormattedMessage id="about.cv" />
      </a>
    </section>
  );
};

export default Landing;
