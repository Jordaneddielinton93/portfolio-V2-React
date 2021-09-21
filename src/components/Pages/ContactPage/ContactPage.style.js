import styled from "styled-components";
import mountains from "./Components/images/mountainbrown-min.png"

export const ContactStyles = styled.div`
  width: 100%;
  min-height: 95vh;
  margin:20px auto;
  background-image:url(${mountains});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-position-x: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 105px;
  

`
export const FormContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 370px;
  height: 700px;
  margin:0px auto;
  justify-content: space-between;
  & .imageContainer{
    position: relative;
    width: 100%;
    height: 200px;
    
    & svg{
      position: absolute;
      max-height: 100%;
      transform: rotate(10deg);
      animation: bounce-in-right 2s ease forwards;
      @keyframes bounce-in-right {
      0% {
        opacity: 0;
        /* transform: rotate(-90deg); */
        transform: translateX(2000px) rotate(-90deg);
      }
      60% {
        opacity: 1;
        transform: translateX(-30px);
      }
      80% { transform: translateX(10px); }
      100% { 
        transform: translateX(0);
        
       }
      }
    }

    #beam1,#beam2,#beam3,#beam4,#beam5 {
      opacity: 0;
      animation: fade-in 1s alternate infinite;
      animation-delay: 2s;
    }
    #beam6,#beam7,#beam8,#beam9,#beam10{
      opacity: 0;
      animation: fade-in 1.5s alternate infinite;
      animation-delay: 2s;
    }
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes fadetext {
      from { opacity: 0.2;
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
       }
      to { opacity: 1;
        text-shadow: 0 0 20px #fff, 0 0 30px #C05E71, 0 0 40px #C05E71, 0 0 50px #C05E71, 0 0 60px #C05E71, 0 0 70px #C05E71, 0 0 80px #C05E71;
      }
    }

    #EllipseshipOrginal{
  animation: shake 2s ease infinite;
}
@keyframes shake {
	0%, 100% {transform: translateX(0);}
	10%, 30%, 50%, 70%, 90% {transform: translateX(-10px);}
	20%, 40%, 60%, 80% {transform: translateX(10px);}
}
  }

  .form-header{
    width: 100%;
    height:50px;
    text-align: center;
    opacity: 0;
    font-size: 3rem;
    animation-delay: 2s;
    /* animation: 1.5s  1.5s forwards; */
    animation: 2s fadetext 2.5s ease-in-out infinite alternate;
  }
  .contact-form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height:350px ;
    
    & textarea{
      width: 100%;
      max-width: 100%;
      height: 65%;
      font-size: 1.5rem;
      text-align: center;
    }
    & input{
      width: 100%;
      height: 10%;
      font-size: 1rem;
      text-align: center;
    }
    & .contact-form-btn{
      display: flex;
      height: 10%;
      width: 30%;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
    }
    
    .contact-form-btn {background-image: linear-gradient(to right, #fceabb 0%, #f8b500  51%, #fceabb  100%)}
    .contact-form-btn {
      margin: 10px;
      padding: 15px 45px;
      text-align: center;
      text-transform: uppercase;
      transition: 0.5s;
      background-size: 200% auto;
      color: black;            
      box-shadow: 0 0 20px #eee;
      border-radius: 10px;
    }

    .contact-form-btn:hover {
      background-position: right center; /* change the direction of the change here */
      color: black;
      text-decoration: none;
    }
         
  }

`