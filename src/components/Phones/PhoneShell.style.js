import styled from "styled-components";

export let PhoneShellStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 277px ;
  background-color: #472425;
  border-radius: 30px;
  position: relative;
  
  .phoneNotch{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 40px;
    width: 50%;
    background-color:#472425 ;
    top: 0;
    border-radius: 10px;
    z-index: 12;
    .phoneNotchCamera{
      width: 20px;
      height: 20px;
      border-radius: 100px;
      background-color: black;
      z-index: 10;
    }
  }
  .phoneInnerShell{
    height: 95%;
    width: 90%;
    background-color: whitesmoke;
    border-radius: 15px;
    overflow-y: scroll;
    & .screenSaver{
      text-align: center;
      height: 95%;
      width: 90%;
      background-color: rgba(0,0,0,0.5);
      position: absolute;
      z-index: 5;
      border-radius: 15px;
      font-size: 3rem;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom-right-radius: 0%;
    }
    &::-webkit-scrollbar-track{
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
    }

    &::-webkit-scrollbar{
    width: 12px;
    background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb{
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: black;
    }
  }
  
  .phoneInnerShell:hover .screenSaver{
    display: none;
  }
  
  .phoneButton{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 44px;
    width: 60%;
    background-color:#472425 ;
    bottom: -20px;
    border-radius: 10px;
    z-index: 12;
    font-size: 2rem;
    color: white;
    animation: float 6s ease-in-out infinite;
    cursor: pointer;
  @keyframes float {
	0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-20px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
}
  }
      

`