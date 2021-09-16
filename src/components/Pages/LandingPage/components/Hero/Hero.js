import { HeroStyle, HeroSection,HeroSection2, HeroFirstName, HeroSecoundName, HeroMiddleName } from "./Hero.style";

import arrowRight from "../Images/arrow.svg"
import arrowDown from "../Images/arrowdown.svg"
import mainImage from "../Images/mainImage.svg"
import { useEffect, useState } from "react";


const Hero = () => {

  let [letr,setLetr]= useState([
    {word:0},
    {word:0},
    {word:0},
    {word:0},
    {word:0},
    {word:0},
    {word:0},
    {word:0},
    {word:0},
    {word:0},
    {word:0},
    {word:0},
    {word:0},
    {word:0},
    {word:0},
    {word:0},
    {word:0},
  ])
    let [counter,setCounter]= useState(0)
    useEffect(()=>{
      console.log(counter)
      
      setTimeout(()=>{

        if(counter>=16){
          setCounter(0)
          setLetr(letr.map((word)=>{
            return word.word=0
          }))
          console.log(letr)
        }else{
          setCounter(counter+1)
        }
        
        
        let newArr = [...letr]; 
        newArr[counter].word = 1; 
        setLetr(newArr)
      },300)

    },[counter])

  return ( 
    <HeroStyle>
      <HeroSection>

        <HeroFirstName>
          <h1>
            <span style={{opacity:letr[0].word}}>J</span>
            <span style={{opacity:letr[1].word}}>O</span>
            <span style={{opacity:letr[2].word}}>R</span>
            <span style={{opacity:letr[3].word}}>D</span>
            <span style={{opacity:letr[4].word}}>A</span>
            <span style={{opacity:letr[5].word}}>N</span>
          </h1>
          <img src={arrowRight} alt="" srcset="" />
        </HeroFirstName>

        <HeroMiddleName>
          <h1>
            <span style={{opacity:letr[6].word}}>E</span>
            <span style={{opacity:letr[7].word}}>D</span>
            <span style={{opacity:letr[8].word}}>D</span>
            <span style={{opacity:letr[9].word}}>I</span>
            <span style={{opacity:letr[10].word}}>E</span>
          </h1>
          <img src={arrowRight} alt="" srcset="" />
        </HeroMiddleName>

        <HeroSecoundName>
          <h1>
            <span style={{opacity:letr[11].word}}>L</span>
            <span style={{opacity:letr[12].word}}>I</span>
            <span style={{opacity:letr[13].word}}>N</span>
            <span style={{opacity:letr[14].word}}>T</span>
            <span style={{opacity:letr[15].word}}>O</span>
            <span style={{opacity:letr[16].word}}>N</span>
          </h1>
          <img src={arrowDown} alt="" srcset="" />
        </HeroSecoundName>

      </HeroSection>




      <HeroSection2 style={{flexDirection:"row"}}>
        <img className="logoIMG" src={mainImage} width="50%" alt="" srcset="" />
        <article>
          <p>
            My plan is to help companies create  their dream web applications.
          With time and dedication to every aspect of their site, i make dreams become reality. 
          </p>
        </article>
      </HeroSection2>

      
      

    </HeroStyle>
   );
}
 
export default Hero;