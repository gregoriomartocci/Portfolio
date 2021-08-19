import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 

.main{
    background-color:${({ theme }) => theme.primary} ;
    color:${({ theme }) => theme.text};
    
}
.about{
  background-color:${({ theme }) => theme.secondary} ;
}

.logo{
  color:${({ theme }) => theme.text};
}

.service{
  background-color: ${({ theme }) => theme.secondary};
}

.navbar{
  background-color:${({ theme }) => theme.secondary} ;
}

.set-mode{
  color:${({ theme }) => theme.text};
}

.menu-item{
  color:${({ theme }) => theme.text_secondary};
}

.menu-icon{
  color:${({ theme }) => theme.text};
}

.menu-item:hover{
  color:${({ theme }) => theme.text};
}

.header-title{
  color:${({ theme }) => theme.text}; 
}

.about-description{
  color:${({ theme }) => theme.text}; 
}

.header-subtitle{
  color:${({ theme }) => theme.text_secondary}; 
}

.journey{
  background-color:${({ theme }) => theme.primary} ;
}

.cancel{
  color:${({ theme }) => theme.text};
}

.tabs-content-title{
  color:${({ theme }) => theme.text}; 
}

.tabs-content-place{
  color:${({ theme }) => theme.text_secondary}; 
}

.services{
  background-color:${({ theme }) => theme.secondary} ;
}

.service{
  background-color:${({ theme }) => theme.primary} ;
}

.portfolio{
  background-color:${({ theme }) => theme.primary} ;
}

.contact{
  background-color:${({ theme }) => theme.secondary} ;
}

.contact-span{
  color: ${({ theme }) => theme.text} ;;
}

.modal-container{
  background-color:${({ theme }) => theme.secondary} ;
}

.under-text{
  color: ${({ theme }) => theme.text_secondary} ;;
}

.portfolio-menu-item{
  color: ${({ theme }) => theme.text_secondary} ;;
}

.portfolio-menu-item:hover{
  color: ${({ theme }) => theme.text} ;;
}

h1{
  color: ${({ theme }) => theme.text} ;;
}

h2{
  color: ${({ theme }) => theme.text} ;;
}

p{
  color: ${({ theme }) => theme.text_secondary} ;;
}

span{
  color: ${({ theme }) => theme.text} ;;
}

.footer{
  background-color:${({ theme }) => theme.terciary} ;
}

.menu-mobile-active{
  background-color:${({ theme }) => theme.terciary} ;
}

.main-icon:hover {
  color: ${({ theme }) => theme.text} ;;
}
`;

export const light = {
  primary: "#fff",
  secondary: "#fafafa",
  text: "#151B22",
};

export const dark = {
  primary: "#0D1017",
  secondary: "#151B22",
  terciary: "#21262E",
  text: "#F0F6FC",
  text_secondary: "#C9D1D9",
};
