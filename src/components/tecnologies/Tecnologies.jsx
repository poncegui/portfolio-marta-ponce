
import { useState } from "react";

import "./tecnologies.css";
import react from "../../img/react.svg";
import js from "../../img/square-js.svg";
import node from "../../img/node.svg";
import git from "../../img/square-git.svg";
import html from "../../img/html5.svg";
import css from "../../img/css3-alt.svg";
import jira from "../../img/jira.svg";
import github from "../../img/github.svg";
import sql from "../../img/sql.png";

const Tecno = () => {

  const [devTool, SetdevTool] = useState("Programación | Herramientas");
  const [btnClassHtml, SetbtnClassHtml] = useState("icons");
  const [btnClassReact, SetbtnClassReact] = useState("icons");
  const [btnClassSql, SetbtnClassSql] = useState("icons");
  const [btnClassJs, SetbtnClassJs] = useState("icons");
  const [btnClassNode, SetbtnClassNode] = useState("icons");
  const [btnClassGit, SetbtnClassGit] = useState("icons");
  const [btnClassCss, SetbtnClassCss] = useState("icons");
  const [btnClassGithub, SetbtnClassGithub] = useState("icons");
  const [btnClassJira, SetbtnClassJira] = useState("icons");



  const handleClassJira = () => {

    SetbtnClassJira(!btnClassJira);

  };
  const handleClassReact = () => {
    SetbtnClassReact(!btnClassReact);

  };
  const handleClassNode = () => {
    SetbtnClassNode(!btnClassNode);

  };

  const handleClassGithub = () => {
    SetbtnClassGithub(!btnClassGithub);

  };
  const handleClassHtml= () => {
    SetbtnClassHtml(!btnClassHtml);

  };
  const handleClassGit= () => {
    SetbtnClassGit(!btnClassGit);

  };
  const handleClassJs= () => {
    SetbtnClassJs(!btnClassJs);

  };

  const handleClassSql= () => {
    SetbtnClassSql(!btnClassSql);

  };

  const handleClassCss= () => {
    SetbtnClassCss(!btnClassCss);

  };



let toggleClassReact = btnClassReact? "clicked" : "";
let toggleClassJs = btnClassJs? "clicked" : "icons"; 
let toggleClassNode = btnClassNode? "clicked" : "icons"; 
let toggleClassGit = btnClassGit? "clicked" : "icons"; 
let toggleClassSql = btnClassSql ? "clicked" : "icons"; 
let toggleClassHtml = btnClassHtml ? "clicked" : "icons"; 
let toggleClassCss = btnClassCss? "clicked" : "icons"; 
let toggleClassGithub = btnClassGithub ? "clicked" : "icons"; 
let toggleClassJira = btnClassJira? "clicked" : "icons"; 

  const selectReact= () => {
    SetdevTool("React");
    handleClassReact();
  };

  const selectJs= () => {
    SetdevTool("JavaScript");
    handleClassJs();
  };
  const selectNode= () => {
    SetdevTool("Node js");
    handleClassNode();
  };
  const selectSql= () => {
    SetdevTool("SQL");
    handleClassSql();
  };
  const selectGit= () => {
    SetdevTool("Git");
    handleClassGit();
  };
  const selectHtml= () => {
    SetdevTool("Html");
    handleClassHtml();
  };
  const selectCss= () => {
    SetdevTool("Css");
    handleClassCss();
  };
  const selectGithub= () => {
    SetdevTool("Github");
    handleClassGithub();
  };
  const selectJira= () => {
    SetdevTool("Jira");
    handleClassJira();
  };



  return (
    <>
      <div className="tecno-main">
        <div className="title">
          <h3>{devTool}</h3>
       
        </div>
        <div className="gridContainer">
          <div className={`icons ${toggleClassReact}`}>
            <img src={react} alt="logo react" onClick={selectReact}/>
          </div>
          <div className={`icons ${toggleClassJs}`}>
            <img src={js} alt="logo javaScript" onClick={selectJs}/>
          </div>
          <div className={`icons ${toggleClassNode}`}>
            <img src={node} alt="logo node"onClick={selectNode}/> 
          </div>
          <div className={`icons ${toggleClassSql}`}>
            <img src={sql} alt="logo sql" onClick={selectSql}/>
          </div>
          <div className={`icons ${toggleClassGit}`}>
            <img src={git} alt="logo git" onClick={selectGit}/>
          </div>
          <div className={`icons ${toggleClassHtml}`}>
            <img src={html} alt="logo html" onClick={selectHtml}/>
          </div>
          <div className={`icons ${toggleClassCss}`}>
            <img src={css} alt="logo css" onClick={selectCss}/>
          </div>
          <div className={`icons ${toggleClassGithub}`}>
            <img src={github} alt="logo github" onClick={selectGithub}/>
          </div>
          <div className={`icons ${toggleClassJira}`}>
            <img src={jira} alt="logo jira" onClick={selectJira}/> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Tecno;
