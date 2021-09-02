import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
   font-family: "Inter", sans-serif;
}
#__next, body, html {
  height: 100%;
}

html{
    font-size:62.5%;
}
p {
  font-size: 1.8rem;
}

a {
  font-size: 1.8rem;
  color: inherit;
  text-decoration: none;
}
a:hover{
        text-decoration:underline;
    }

    h1 {
  margin: 2rem 0;
  font-size: 4.6rem;
  @media (max-width: 600px) {
    font-size: 3.6rem;
  }
}
h2 {
  font-size: 3rem;
  margin: 2rem 0;
  @media (max-width: 600px) {
    font-size: 2.6rem;
  }
}
h3 {
  margin: 2rem 0;
  font-size: 2.6rem;
  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
}
h4 {
  font-size: 2rem;
  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
}
`;

export default GlobalStyle;
