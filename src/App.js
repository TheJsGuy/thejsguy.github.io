import React, { useCallback } from "react";
import ReactDOM from "react-dom";
import "./styles/output.css";
import banner from "./banner.jpg";

const App = ({ config }) => {
  const onLoad = useCallback(() => {
    setTimeout(() => {
      console.log('scrolling');
      window.scrollTo(0, 200);
    }, 5000);
  }, []);
  return (
    <>
      <section className="max-h-[80rem] overflow-hidden relative" >
        <img src={banner} onLoad={onLoad}/>
        <div className="absolute w-full h-full bg-blue-600/10 z-10 top-0"></div>
      </section>
      <header className="w-full max-w-full overflow-hidden h-96 bg-blue-400 align-middle justify-center flex flex-col text-center">
        <h1 className="align-middle justify-center w-full  font-mono font-bold text-6xl heading flex p-2">
          <span className="py-4">@the</span>
          <span className=" bg-blue-500/25 px-2 py-4 flex">js</span>
          <span className="py-4">guy</span>
        </h1>
        <div className="flex mt-10 w-full">
          <small className="font-bold text-2xl heading flex w-full justify-center">
            Helping fellow human beings in front end development
          </small>
        </div>
      </header>
      <section className="flex flex-col w-full max-w-full">
        <div className="w-full flex flex-row max-w-full overflow-scroll">
          <div className="flex flex-1 bg-slate-100 flex-col p-4">
            <h2 className="text-3xl heading w-full text-center">Consulting</h2>
            <ul className="flex flex-col list-inside w-full mt-5 text-center text-lg">
              <li className="list-item">Architecture</li>
              <li>Roadmap</li>
              <li>Testing</li>
              <li>Automation</li>
              <li>DevEx</li>
              <li>CI/CD</li>
            </ul>
          </div>
          <div className="flex flex-1 bg-slate-100  flex-col p-4">
            <h2 className="text-3xl heading w-full text-center">Development</h2>
            <ul className="flex flex-col list-inside w-full mt-5 text-center text-lg">
              <li>React</li>
              <li>Node.JS</li>
              <li>GraphQL</li>
              <li>React Native</li>
              <li>Angular</li>
              <li>PWA</li>
            </ul>
          </div>
          <div className="flex flex-1 bg-slate-100  flex-col p-4">
            <h2 className="text-3xl heading w-full text-center">Roadmap</h2>
            <ul className="flex flex-col list-inside w-full mt-5 text-center text-lg">
              <li>Scaling</li>
              <li>µ Frontend</li>
              <li>GraphQL Federation</li>
              <li>Monorepos</li>
              <li>µ Services</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="p-10 py-20 flex flex-row justify-center bg-stone-700">
        <h2 className="text-center w-50 text-4xl rounded-lg border-solid border-white border-2 cursor-pointer px-5 py-2 text-white heading"><a href="https://www.linkedin.com/in/thejsguy" target="_blank">Get in Touch ✌🏼</a></h2>
      </section>
    </>
  );
};

ReactDOM.render(
  <App config={window.config} />,
  document.getElementById("__root")
);
