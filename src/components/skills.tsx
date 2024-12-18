import React from "react";
import '../scss/skills.scss';
import { JavaOriginal } from 'devicons-react';
import { BootstrapPlain } from 'devicons-react';
import { ReactOriginal } from 'devicons-react';
import { Html5PlainWordmark } from 'devicons-react';
import { Css3OriginalWordmark } from 'devicons-react';
import { DockerPlain } from 'devicons-react';
import { NodejsOriginalWordmark } from 'devicons-react';
import { ExpressOriginal } from 'devicons-react';
import { PostgresqlPlainWordmark } from 'devicons-react';
import { MysqlOriginalWordmark } from 'devicons-react';
import { CsharpOriginal } from 'devicons-react';


const Skill: React.FC = () => {
    return(
        <div className="container skill-container display-flex justify-content-center align-items-center">
        <h1 className="text-center text-white mt-5 skill-txt">Skills<hr/></h1>
        <div className="row">
          <div className="col-8 text-center text-white">
            <br/>
            <p><span className="ms-auto"><ReactOriginal size={40}/></span> React</p>
            <hr/>
            <p><span className="mr-2"><NodejsOriginalWordmark size={40}/></span> Node.js</p>
            <hr/>
            <p><span><ExpressOriginal size={40}/></span> Express</p>
            <hr/>
            <p><span><JavaOriginal size={40}/></span> Java</p>
            <hr/>
            <p><span><CsharpOriginal size={40}/></span> C#</p>
            <hr/>
            <p><span><DockerPlain size={40}/></span> Docker</p>
            <hr/>
          </div>
          <div className="col-4 text-center text-white">
            <br/>   
            <hr/>
            <p><span><PostgresqlPlainWordmark size={40}/></span> PostgreSQL</p>
            <hr/>
            <p><span><MysqlOriginalWordmark size={40}/></span> SQL</p>
            <hr/>
            <p><span><Html5PlainWordmark size={40}/></span> HTML</p>
            <hr/>
            <p><span><Css3OriginalWordmark size={40}/></span> CSS</p>
            <hr/>
            <p><span><BootstrapPlain size={40}/></span> Bootstrap</p>
            <hr/>
          </div>
        </div>
      </div>
    )
};

export default Skill;