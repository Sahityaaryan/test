import React,{useState ,useEffect} from "react";
import RouterDOM from "react-dom";
 import Card from "./Card";
 import sdata from "./Sdata";
 import "./App.css";
  import {FaCamera, FaFacebookMessenger, FaFlask, FaHeart , FaMagento, FaMagic, FaNodeJs, FaSchool, FaSpotify, FaSun, FaTable, FaThermometerFull, FaUmbrella , } from "react-icons/fa";



export default function App(){

const iconsArray = [<FaCamera/> , <FaFacebookMessenger/> , <FaHeart/> , <FaMagento/>, <FaMagic/> , <FaNodeJs/>  , <FaSchool/> , 
 , <FaSpotify/> , <FaSun/>, <FaTable/>,  <FaThermometerFull/> , <FaUmbrella/> , <FaFlask/>]



// const click=()=>{
  
  let numOne = () => {let num =  Math.floor(Math.random()*11) + 1 ; return num}
  let numTwo = () => {let num =  Math.floor(Math.random()*11) + 1 ; return num}
  let numThree = () => {let num =  Math.floor(Math.random()*11) + 1 ; return num}


 // using UseState to change all this

 const [partOne , setPartOne] = useState( );
 const [partTwo , setPartTwo] = useState( );
 const [partThree , setPartThree] = useState( );
 const [statusOne ,  setStatusOne] = useState("");
 const [statusTwo ,  setStatusTwo] = useState("");
 const [statusThree ,  setStatusThree] = useState("");
 const [statusFour ,  setStatusFour] = useState("");


 const [partFour , setPartFour] = useState();
 const [partFive , setPartFive] = useState( );
 const [partSix , setPartSix] = useState( );

 const [partSeven , setPartSeven] = useState();
 const [partEight, setPartEight] = useState( );
 const [partNine , setPartNine] = useState( );

 const [partTen , setPartTen] = useState();
 const [partEleven, setPartEleven] = useState( );
 const [partTweleve , setPartTwelve] = useState( );

// here is the code to shuffle 






 const shuffle = async () =>{

   setPartTwo(iconsArray[numOne()])
    setPartThree(iconsArray[numOne()])
    setPartOne (iconsArray[numOne()])


      
// changeOne.then((val)=>{ console.log("hurrah");})
   
  
   setPartFour(iconsArray[numOne()])
   setPartFive(iconsArray[numTwo()])
   setPartSix (iconsArray[numThree()])
  
   setPartSeven(iconsArray[numOne()])
   setPartEight(iconsArray[numTwo()])
   setPartNine (iconsArray[numThree()])
  
   setPartTen(iconsArray[numOne()])
   setPartEleven(iconsArray[numTwo()])
   setPartTwelve (iconsArray[numThree()])
   
} 

useEffect(()=>{

    if( partOne == partTwo && partThree == partTwo){

      if(partOne == undefined && partTwo == undefined && partThree == undefined  ) {setStatusOne("let's start the game")}
     else setStatusOne("they are matching")
    }
    else{
      setStatusOne("they are not matching")
    }
    

    //setting status for the second row

    if( partFour == partFive && partSix == partFive){

      if(partFour == undefined && partFive == undefined && partSix == undefined  ) {setStatusTwo("let's start the game")}
     else setStatusTwo("they are matching")
    }
    else{
      setStatusTwo("they are not matching")
    }

    if( partSeven == partEight && partNine == partEight){

      if(partSeven == undefined && partEight == undefined && partNine == undefined  ) {setStatusThree("let's start the game")}
     else setStatusThree("they are matching")
    }
    else{
      setStatusThree("they are not matching")
    }

    if( partTen == partEleven && partTweleve == partEleven){

      if(partTen == undefined && partEleven == undefined && partTweleve == undefined  ) {setStatusFour("let's start the game")}
     else setStatusFour("they are matching")
    }
    else{
      setStatusFour("they are not matching")
    }

}, [partOne , partFour, partSeven , partTen])
   




      return(
        <>
    This is an awesome slot machine

   <div id="container">
        <div id="box">

        <ul id="slotTable">
        <li id='one'> 
        <div id="mainOne">
          <div class="slots" id="partOne">{partOne} </div>
          <div class="slots" id="partTwo">{partTwo}</div>
          <div class="slots"  id="partThree">{partThree}</div>
        </div>
        </li>

        <div id="statusMainOne" className="statusGood">{statusOne}</div>


        <li id='one'> 
        <div id="mainOne">
          <div class="slots" id="partFour">{partFive}</div>
          <div class="slots" id="partFive">{partFour}</div>
          <div class="slots" id="partSix" >{partSix}</div>
        </div>
        </li>

         <div id="statusMainTwo"  className="statusGood">{statusTwo}</div>

        <li id='one'> 
        <div id="mainOne">
          <div class="slots" id="partSeven" >{partSeven}</div>
          <div class="slots" id="partEight" >{partEight}</div>
          <div class="slots" id="partNine" >{partNine}</div>
        </div>
        </li>

         <div id="statusMainThree" className="statusGood">{statusThree}</div>

        <li id='one'> 
        <div id="mainOne">
          <div class="slots" id="partTen" >{partTen}</div>
          <div class="slots" id="partEleven" >{partEleven}</div>
          <div class="slots" id="partTwelve" >{partTweleve}</div>
        </div>
        </li>

         <div id="statusMainFour" className="statusGood">{statusFour}</div>
       

        </ul>

        <div id="shuffleButton"> <button id="shuffling" onClick={shuffle}>  Shuffle </button></div>
        </div>

   </div>

   

        </>
      )
    
}