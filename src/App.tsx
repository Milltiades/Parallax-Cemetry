import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useRef, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

function App() {
  
 

 

  return (
    <div className="App">
      <GlobalStyles />

      <Parallax pages={1.5} style={{ top: "0", left: "0" }} >
        <ParallaxLayer offset={0} speed={2.5}>
          <Main />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1.8} horizontal>
          <Left />
      
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-1.8} horizontal>
          <Right />
          
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.8} horizontal>
          <TreeL/>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={-0.8} horizontal>
          <TreeR />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={2.3} >
          <Grass />
        </ParallaxLayer>

        <ParallaxLayer  offset={window.innerWidth > 420 ? 1 : 0.5} speed={0.5} >
          <TextDiv>
            <H1>parallax scroll down</H1>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              voluptate aspernatur corrupti alias nostrum velit tempora
              blanditiis dolor praesentium. Laudantium quibusdam iusto facere,
              omnis vel a rerum earum accusantium minus. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Voluptatum incidunt illum
              corrupti harum tempore. Impedit, provident eligendi, optio nulla
              iusto eveniet at nisi blanditiis veniam, nesciunt odio recusandae
              ex labore.
            </P>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              voluptate aspernatur corrupti alias nostrum velit tempora
              blanditiis dolor praesentium. Laudantium quibusdam iusto facere,
              omnis vel a rerum earum accusantium minus. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Voluptatum incidunt illum
              corrupti harum tempore. Impedit, provident eligendi, optio nulla
              iusto eveniet at nisi blanditiis veniam, nesciunt odio recusandae
              ex labore.
            </P>
         
          </TextDiv>
        </ParallaxLayer>

      
      </Parallax>

     

     
     
    </div>
  );
}

export default App;




const H1 = styled.h1`
  font-size: 60px;
  @media (max-width: 420px) {
    font-size: 30px;
    
  }
`
const P = styled.p`
font-size: 35px;
margin-top: 16px;
@media (max-width: 420px) {
    font-size: 16px;
    margin-top: 8px;
  }
`

const TextDiv = styled.div`
  transform: translateY(-50vh);
  height: 50vh;
  padding: 24px;
  @media (max-width: 420px) {
    height: 50vh;
    transform: translateY(0);
  }
`;

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/cemetry/background.png");
  background-repeat: no-repeat;
  background-size: cover ;
  background-position: center ;
  background-attachment: fixed;
  will-change: auto;
@media (max-width: 420px) {
  background-size: 140vw;
  background-position: center top;
  height: 50vh;
}
`;
const Left = styled(Main)`
  background-image: url("/cemetry/gate-left.png");
  transform: translateX(-20vw);
  @media (max-width: 420px) {
  /* background-size: 120vw; */
  /* margin-top: 50px; */
}

`;
const Right = styled(Main)`
  background-image: url("/cemetry/gate-right.png");
  transform: translateX(20vw);
  @media (max-width: 420px) {
  /* background-size: 120vw; */
  /* margin-top: 50px; */
}

   
`;
const TreeL = styled(Main)<any>`
  background-image: url("/cemetry/tree-left.png");
  @media (max-width: 420px) {
  background-size: contain;
}
 
`;
const TreeR = styled(Main)`
  background-image: url("/cemetry/tree-right.png");
  @media (max-width: 420px) {
  background-size: contain;
}
`;
const Grass = styled(Main)`
  background-image: url("/cemetry/grass.png");

`;




const GlobalStyles = createGlobalStyle`

:root {
font-synthesis: none;
text-rendering: optimizeLegibility;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
-webkit-text-size-adjust: 100%;
}


*{
margin: 0;
padding: 0;

}

body {
min-width: 320px;
min-height: 100vh;
background: #030913;
/* background: red; */
color: #FFFEFD;

}

`;
