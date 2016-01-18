/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         $("#Stage").css({"direction":"rtl"});
         $('#Stage').css('touch-action', 'none');
         document.ontouchmove = function(e) {e.preventDefault()};
         document.ontouchstart = function(e) {e.preventDefault()};
         document.ontouchend = function(e) {e.preventDefault()};
         $("#Stage").disableSelect;
         //BIND the click event on the reset button with the reset funciton
         sym.$("symReset").bind("click touchend",reset);
         //======= dragged weights original position==================================
         weightx=0;
         weighty=0;
         
         //===== F L A G S ======
         inTablePile=5; //means all 5 weights are currently in the pile
         inHolderPile=0; //means no. of weights placed in the holder is 0 .
         isdraggedFromHolder=false;
         isdraggedFromTable=false;
         //===== Save Hide Poistion ======
         HideX = "25000px";
         HideY = "25000px";
         //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         //~~~~~~~~~~~~~~~~~~~~~~~~   S Y M B O L S     P O S I T I O N S ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         //========= different items original postions
         holderX=sym.$("symHolderArrow").css("left");
         holderY=sym.$("symHolderArrow").css("top");
         snapX=sym.$("symSnap").css("left");
         snapY=sym.$("symSnap").css("top");
         springHeight=sym.$("symSpring").css("height");
         springX=sym.$("symSpring").css("left");
         springY=sym.$("symSpring").css("top");
         //======= result tables original position ===================
         resultX=sym.$("symResult").css("left");
         resultY=sym.$("symResult").css("top");
         result1X=sym.$("symResult1").css("left");
         result1Y=sym.$("symResult1").css("top");
         result2X=sym.$("symResult2").css("left");
         result2Y=sym.$("symResult2").css("top");
         result3X=sym.$("symResult3").css("left");
         result3Y=sym.$("symResult3").css("top");
         result4X=sym.$("symResult4").css("left");
         result4Y=sym.$("symResult4").css("top");
         result5X=sym.$("symResult5").css("left");
         result5Y=sym.$("symResult5").css("top");
         // hide all result tables 
         sym.$("symResult1").css({"left":HideX,"top":HideY});
         sym.$("symResult2").css({"left":HideX,"top":HideY});
         sym.$("symResult3").css({"left":HideX,"top":HideY});
         sym.$("symResult4").css({"left":HideX,"top":HideY});
         sym.$("symResult5").css({"left":HideX,"top":HideY});
         currentResult="symResult";  //to save the currently displayed result table
         prevResult=""; //to save the recent displayed table
         
         //====== Save the original position of the weights on the table
         w1x=sym.$("symWeight1").css("left"); //w1x means : Weight#1 in the pile (the wight on top of the pile) , x coo.
         w1y=sym.$("symWeight1").css("top");
         
      	w2x=sym.$("symWeight2").css("left");
      	w2y=sym.$("symWeight2").css("top");
      
      	w3x=sym.$("symWeight3").css("left");
      	w3y=sym.$("symWeight3").css("top");
      
      	w4x=sym.$("symWeight4").css("left");
      	w4y=sym.$("symWeight4").css("top");
      
      	w5x=sym.$("symWeight5").css("left");
      	w5y=sym.$("symWeight5").css("top");
      	//===== constant positions for the weights when placed in the Holder as a pile
      	Hw1x=sym.getSymbol("symHolderArrow").$("symWeight11").css("left"); //H: holder ,w1: Weight1 x : x coo.
         Hw1y=sym.getSymbol("symHolderArrow").$("symWeight11").css("top");
      
      	Hw2x=sym.getSymbol("symHolderArrow").$("symWeight22").css("left");
      	Hw2y=sym.getSymbol("symHolderArrow").$("symWeight22").css("top");
      
      	Hw3x=sym.getSymbol("symHolderArrow").$("symWeight33").css("left");
      	Hw3y=sym.getSymbol("symHolderArrow").$("symWeight33").css("top");
      
      	Hw4x=sym.getSymbol("symHolderArrow").$("symWeight44").css("left");
      	Hw4y=sym.getSymbol("symHolderArrow").$("symWeight44").css("top");
      
      	Hw5x=sym.getSymbol("symHolderArrow").$("symWeight55").css("left");
      	Hw5y=sym.getSymbol("symHolderArrow").$("symWeight55").css("top");
      
         //===== Save current Mouse Position ======
         CurrentX = 0;
         CurrentY = 0;
         this.onMove = function(posX,posY){
         	CurrentX = posX;
         	CurrentY = posY;
         }
         //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         //~~~~~~~~~~~~~~~~~~~~~~~~   D R A G G A B L E     F U N C T I O N S ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         //===== z-index ======
         largestZindex = 0;
        //====== make symbols draggable by calling fuction MakeDraggable for each symbol
        MakeDraggable1(sym.$("symWeight1"));
        MakeDraggable1(sym.$("symWeight2"));
        MakeDraggable1(sym.$("symWeight3"));
        MakeDraggable1(sym.$("symWeight4"));
        MakeDraggable1(sym.$("symWeight5"));
        MakeDraggable2(sym.getSymbol("symHolderArrow").$("symWeight11"));
        MakeDraggable2(sym.getSymbol("symHolderArrow").$("symWeight22"));
        MakeDraggable2(sym.getSymbol("symHolderArrow").$("symWeight33"));
        MakeDraggable2(sym.getSymbol("symHolderArrow").$("symWeight44"));
        MakeDraggable2(sym.getSymbol("symHolderArrow").$("symWeight55"));
        sym.getSymbol("symHolderArrow").$("symWeight11").draggable("disable");
        sym.getSymbol("symHolderArrow").$("symWeight22").draggable("disable");
        sym.getSymbol("symHolderArrow").$("symWeight33").draggable("disable");
        sym.getSymbol("symHolderArrow").$("symWeight44").draggable("disable");
        sym.getSymbol("symHolderArrow").$("symWeight55").draggable("disable");
      
      //========= FUNCTION MakeDraggable : to make any symbol draggable ======   
      function MakeDraggable1(e){
      width=e.width();
      height=e.height();
      e.draggable({
       	cursor:"move", cursorAt:{top: height/2, left:width/2}, 
         containment:"#Stage", scroll: false,
         start:function(){
         weightxx=e.css("left");
         weightyy=e.css("top");
         isdraggedFromTable=true;
         inTablePile--;
         largestZindex++;
         e.css({"z-index":largestZindex});
         shiftDown(e.attr("id"));
         },
         drag:function(){},
         stop:function(){}
      });
      }
      function MakeDraggable2(e){
      width=e.width();
      height=e.height();
      e.draggable({
       	cursor:"move", cursorAt:{top:height/2, left:width/2}, 
         containment:"#Stage", scroll: false,
         start:function(){
         weightx=e.css("left");
         weighty=e.css("top");
         isdraggedFromHolder=true; 
         inHolderPile--;
         largestZindex++;
         e.css({"z-index":largestZindex});
         shiftDownH(e.attr("id"));
         },
         drag:function(){},
         stop:function(){}
      });
      }
         //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         //~~~~~~~~~~~~~~~~~~~~~~~~   D R O P P A B L E      F U N C T I O N S ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      
       //**********************************    HOLDER DROPPABLE      *****************************************************
      sym.$("symSnap").droppable({   
      tolerance: "touch" , greedy: true,
      over:{},
      out:{},
      drop: function(event,ui){
      droppedObject=ui.draggable.attr('id'); //get the Id of the draggale that is dropped on this droppable
      if (isdraggedFromTable){
      if(inHolderPile==0){ //if the number of weights in the pile in the holder is zero,
      sym.$("#"+droppedObject).css({"left":weightxx, "top":weightyy});
      sym.$("symSpring").animate({"height":"+=33px"},500); //stretch the spring
      sym.$("symSpring").animate({"height":"-=27px"},500); //stretch the spring
      sym.$("symSpring").animate({"height":"+=27px"},2000); //stretch the spring
      sym.$("symWeight5").css({"left":HideX,"top":HideY}); //position the dragged weight in the bottom of the pile
      sym.getSymbol("symHolderArrow").$("symWeight11").css({"left":Hw1x, "top":Hw1y}); //show the weight#1 in the pile on the holder
      sym.getSymbol("symHolderArrow").$("symWeight11").css({"opacity":1});
      sym.getSymbol("symHolderArrow").$("symWeight11").draggable("enable");
      sym.getSymbol("symSpring").play(); //stretch the spring
      sym.$("symHolderArrow").animate({"top": "+=33px"},500); //shift down the holder
      sym.$("symHolderArrow").animate({"top": "-=27px"},500); //shift down the holder
      sym.$("symHolderArrow").animate({"top": "+=27px"},2000); //shift down the holder
      sym.$("symSnap").css({"top":"+=33px"}); //shift the hidden snapping area
      sym.$("symResult1").css({"left":result1X,"top":result1Y}); //display the first table of results
      prevResult=currentResult;
      currentResult="symResult1";
      sym.$(prevResult).css({"left":HideX,"top":HideY});
      shiftUp(droppedObject);
      }
      else if (inHolderPile==1){
      sym.$("#"+droppedObject).css({"left":weightxx, "top":weightyy});
      sym.$("symSpring").animate({"height":"+=39px"},500); //stretch the spring
      sym.$("symSpring").animate({"height":"-=27px"},500); //stretch the spring
      sym.$("symSpring").animate({"height":"+=27px"},2000); //stretch the spring
      sym.$("symSpring").css({"top":"-=5px"}); //stretch the spring
      sym.$("symWeight4").css({"left":HideX,"top":HideY});
      sym.getSymbol("symHolderArrow").$("symWeight22").css({"left":Hw2x, "top":Hw2y}); //show the weight#1 in the pile on the holder
      sym.getSymbol("symHolderArrow").$("symWeight22").css({"opacity":1});
      sym.getSymbol("symHolderArrow").$("symWeight22").draggable("enable");
      sym.$("symHolderArrow").animate({"top": "+=33px"},500); //shift down the holder
      sym.$("symHolderArrow").animate({"top": "-=27px"},500); //shift down the holder
      sym.$("symHolderArrow").animate({"top": "+=27px"},2000); //shift down the holder
      sym.$("symSnap").css({"top":"+=33px"});
      sym.$("symResult2").css({"left":result2X,"top":result2Y}); //display the first table of results
      prevResult=currentResult;
      currentResult="symResult2";
      sym.$(prevResult).css({"left":HideX,"top":HideY});
      shiftUp(droppedObject);
      }
      else if (inHolderPile==2){
      sym.$("#"+droppedObject).css({"left":weightxx, "top":weightyy});
      sym.$("symSpring").animate({"height":"+=40px"},500); //stretch the spring
      sym.$("symSpring").animate({"height":"-=27px"},500); //stretch the spring
      sym.$("symSpring").animate({"height":"+=27px"},2000); //stretch the spring
      sym.$("symSpring").css({"top":"-=3px"}); //stretch the spring
      sym.$("symWeight3").css({"left":HideX,"top":HideY});
      sym.getSymbol("symHolderArrow").$("symWeight33").css({"left":Hw3x, "top":Hw3y}); //show the weight#1 in the pile on the holder
      sym.getSymbol("symHolderArrow").$("symWeight33").css({"opacity":1});
      sym.getSymbol("symHolderArrow").$("symWeight33").draggable("enable");
      sym.$("symHolderArrow").animate({"top": "+=33px"},500); //shift down the holder
      sym.$("symHolderArrow").animate({"top": "-=27px"},500); //shift down the holder
      sym.$("symHolderArrow").animate({"top": "+=27px"},2000); //shift down the holder
      sym.$("symSnap").css({"top":"+=33px"});
      sym.$("symResult3").css({"left":result3X,"top":result3Y}); //display the first table of results
      prevResult=currentResult;
      currentResult="symResult3";
      sym.$(prevResult).css({"left":HideX,"top":HideY});
      shiftUp(droppedObject);
      }
      else if (inHolderPile==3){
      sym.$("#"+droppedObject).css({"left":weightxx, "top":weightyy});
      sym.$("symSpring").animate({"height":"+=40px"},500); //stretch the spring
      sym.$("symSpring").animate({"height":"-=27px"},500); //stretch the spring
      sym.$("symSpring").animate({"height":"+=27px"},2000); //stretch the spring
      sym.$("symSpring").css({"top":"-=3px"}); //stretch the spring
      sym.$("symWeight2").css({"left":HideX,"top":HideY}); 
      sym.getSymbol("symHolderArrow").$("symWeight44").css({"left":Hw4x, "top":Hw4y}); //show the weight#1 in the pile on the holder
      sym.getSymbol("symHolderArrow").$("symWeight44").css({"opacity":1});
      sym.getSymbol("symHolderArrow").$("symWeight44").draggable("enable");
      sym.$("symHolderArrow").animate({"top": "+=33px"},500); //shift down the holder
      sym.$("symHolderArrow").animate({"top": "-=27px"},500); //shift down the holder
      sym.$("symHolderArrow").animate({"top": "+=27px"},2000); //shift down the holder
      sym.$("symSnap").css({"top":"+=33px"});
      sym.$("symResult4").css({"left":result4X,"top":result4Y}); //display the first table of results
      prevResult=currentResult;
      currentResult="symResult4";
      sym.$(prevResult).css({"left":HideX,"top":HideY});
      shiftUp(droppedObject);
      }
      else if (inHolderPile==4){
      sym.$("#"+droppedObject).css({"left":weightxx, "top":weightyy});
      sym.$("symSpring").animate({"height":"+=42px"},500); //stretch the spring
      sym.$("symSpring").animate({"height":"-=27px"},500); //stretch the spring
      sym.$("symSpring").animate({"height":"+=27px"},2000); //stretch the spring
      sym.$("symSpring").css({"top":"-=3px"}); //stretch the spring
      sym.$("symWeight1").css({"left":HideX,"top":HideY});
      sym.getSymbol("symHolderArrow").$("symWeight55").css({"left":Hw5x, "top":Hw5y}); //show the weight#1 in the pile on the holder
      sym.getSymbol("symHolderArrow").$("symWeight55").css({"opacity":1});
      sym.getSymbol("symHolderArrow").$("symWeight55").draggable("enable");
      sym.$("symHolderArrow").animate({"top": "+=33px"},500); //shift down the holder
      sym.$("symHolderArrow").animate({"top": "-=27px"},500); //shift down the holder
      sym.$("symHolderArrow").animate({"top": "+=27px"},2000); //shift down the holder
      sym.$("symSnap").css({"top":"+=33px"});
      sym.$("symResult5").css({"left":result5X,"top":result5Y}); //display the first table of results
      prevResult=currentResult;
      currentResult="symResult5";
      sym.$(prevResult).css({"left":HideX,"top":HideY});
      shiftUp(droppedObject);
      }
      else
      alert("ERROR 3: inHolderPile>4");
      
      inHolderPile++;} // end if (isdraggedFromTable)
      
      else if(isdraggedFromHolder){
      shiftUpH2(droppedObject);
      sym.$("#"+droppedObject).css({"left":weightx, "top":weighty});
       //inHolderPile++;
      }
      isdraggedFromTable=false; // re-initializing the flags for the next drag
      isdraggedFromHolder=false;
      }//end function drop
      });
      //**********************************    STAGE DROPPALE      *****************************************************
      sym.$("#Stage").droppable({
      tolerance: "touch" , 
      over:{},
      out:{},
      drop: function(event,ui){
      droppedObject=ui.draggable.attr('id');
      if (isdraggedFromHolder){
      if(inTablePile==0){ //if the number of weights in the pile in the table is zero,
      sym.$("#"+droppedObject).css({"left":weightx,"top":weighty}); //position the dragged weight from the holder into its original position
      sym.$("symSpring").animate({"height":"-=42px"},500); //stretch the spring
      sym.$("symSpring").animate({"height":"+=27px"},500); //stretch the spring
      sym.$("symSpring").animate({"height":"-=27px"},2000); //stretch the spring
      sym.$("symSpring").css({"top":"+=3px"}); //stretch the spring
      sym.getSymbol("symHolderArrow").$("symWeight55").css({"left":HideX, "top":HideY});
      sym.getSymbol("symHolderArrow").$("symWeight55").css({"opacity":1});
      sym.$("symHolderArrow").animate({"top": "-=33px"},500); //shift up the holder
      sym.$("symHolderArrow").animate({"top": "+=27px"},500); //shift up the holder
      sym.$("symHolderArrow").animate({"top": "-=27px"},2000); //shift up the holder
      sym.$("symSnap").css({"top":"-=33px"});
      sym.$("symWeight1").css({"left":w1x, "top":w1y});
      sym.$("symResult4").css({"left":result4X,"top":result4Y}); //display the first table of results
      prevResult=currentResult;
      currentResult="symResult4";
      sym.$(prevResult).css({"left":HideX,"top":HideY});
      shiftUpH(droppedObject);
      }
      else if (inTablePile==1){
      sym.$("#"+droppedObject).css({"left":weightx,"top":weighty}); //position the dragged weight from the holder into its original position
      sym.$("symSpring").animate({"height":"-=40px"},500); //stretch the spring
      sym.$("symSpring").animate({"height":"+=27px"},500); //stretch the spring
      sym.$("symSpring").animate({"height":"-=27px"},2000); //stretch the spring
      sym.$("symSpring").css({"top":"+=3px"}); //stretch the spring
      sym.getSymbol("symHolderArrow").$("symWeight44").css({"left":HideX, "top":HideY});
      sym.getSymbol("symHolderArrow").$("symWeight44").css({"opacity":1});
      sym.$("symHolderArrow").animate({"top": "-=33px"},500); //shift up the holder
      sym.$("symHolderArrow").animate({"top": "+=27px"},500); //shift up the holder
      sym.$("symHolderArrow").animate({"top": "-=27px"},2000); //shift up the holder
      sym.$("symSnap").css({"top":"-=33px"});
      sym.$("symWeight2").css({"left":w2x, "top":w2y});
      sym.$("symResult3").css({"left":result3X,"top":result3Y}); //display the first table of results
      prevResult=currentResult;
      currentResult="symResult3";
      sym.$(prevResult).css({"left":HideX,"top":HideY});
      shiftUpH(droppedObject);
      }
      else if (inTablePile==2){
      sym.$("#"+droppedObject).css({"left":weightx,"top":weighty}); //position the dragged weight from the holder into its original position
      sym.$("symSpring").animate({"height":"-=40px"},500); //stretch the spring
      sym.$("symSpring").animate({"height":"+=27px"},500); //stretch the spring
      sym.$("symSpring").animate({"height":"-=27px"},2000); //stretch the spring
      sym.$("symSpring").css({"top":"+=3px"}); //stretch the spring
      sym.getSymbol("symHolderArrow").$("symWeight33").css({"left":HideX, "top":HideY});
      sym.getSymbol("symHolderArrow").$("symWeight33").css({"opacity":1});
      sym.$("symHolderArrow").animate({"top": "-=33px"},500); //shift up the holder
      sym.$("symHolderArrow").animate({"top": "+=27px"},500); //shift up the holder
      sym.$("symHolderArrow").animate({"top": "-=27px"},2000); //shift up the holder
      sym.$("symSnap").css({"top":"-=33px"});
      sym.$("symWeight3").css({"left":w3x, "top":w3y});
      sym.$("symResult2").css({"left":result2X,"top":result2Y}); //display the first table of results
      prevResult=currentResult;
      currentResult="symResult2";
      sym.$(prevResult).css({"left":HideX,"top":HideY});
      shiftUpH(droppedObject);
      }
      else if (inTablePile==3){
      sym.$("#"+droppedObject).css({"left":weightx,"top":weighty}); //position the dragged weight from the holder into its original position
      sym.$("symSpring").animate({"height":"-=39px"},500); //stretch the spring
      sym.$("symSpring").animate({"height":"+=27px"},500); //stretch the spring
      sym.$("symSpring").animate({"height":"-=27px"},2000); //stretch the spring
      sym.$("symSpring").css({"top":"+=5px"}); //stretch the spring
      sym.getSymbol("symHolderArrow").$("symWeight22").css({"left":HideX, "top":HideY});
      sym.getSymbol("symHolderArrow").$("symWeight22").css({"opacity":1});
      sym.$("symHolderArrow").animate({"top": "-=33px"},500); //shift up the holder
      sym.$("symHolderArrow").animate({"top": "+=27px"},500); //shift up the holder
      sym.$("symHolderArrow").animate({"top": "-=27px"},2000); //shift up the holder
      sym.$("symSnap").css({"top":"-=33px"});
      sym.$("symWeight4").css({"left":w4x, "top":w4y});
      sym.$("symResult1").css({"left":result1X,"top":result1Y}); //display the first table of results
      prevResult=currentResult;
      currentResult="symResult1";
      sym.$(prevResult).css({"left":HideX,"top":HideY});
      shiftUpH(droppedObject);
      } 
      else if (inTablePile==4){
      sym.$("#"+droppedObject).css({"left":weightx,"top":weighty}); //position the dragged weight from the holder into its original position
      sym.$("symSpring").animate({"height":"-=35px"},500); //stretch the spring
      sym.$("symSpring").animate({"height":"+=27px"},500); //stretch the spring
      sym.$("symSpring").animate({"height":"-=27px"},2000); //stretch the spring
      sym.getSymbol("symHolderArrow").$("symWeight11").css({"left":HideX, "top":HideY});
      sym.getSymbol("symHolderArrow").$("symWeight11").css({"opacity":1});
      sym.$("symHolderArrow").animate({"top": "-=33px"},500); //shift up the holder
      sym.$("symHolderArrow").animate({"top": "+=27px"},500); //shift up the holder
      sym.$("symHolderArrow").animate({"top": "-=27px"},2000); //shift up the holder
      sym.$("symSnap").css({"top":"-=33px"});
      sym.getSymbol("symSpring").playReverse(0);
      sym.$("symWeight5").css({"left":w5x, "top":w5y});
      sym.$("symResult").css({"left":resultX,"top":resultY}); //display the first table of results
      prevResult=currentResult;
      currentResult="symResult";
      sym.$(prevResult).css({"left":HideX,"top":HideY});
      shiftUpH(droppedObject);
      }
      else
      alert("flag inTablePile>4");
      inTablePile++;}// end if(isdraggedFromHolder)
      else if(isdraggedFromTable){
      shiftUp2(droppedObject);
      sym.$("#"+droppedObject).css({"left":weightxx, "top":weightyy});
      //setTimeout(shiftUp2(droppedObject),4000);
      //setTimeout(inTablePile++,4000); //may cause problems because the increment may happen before fun shift up is executed, so better use setTimeout ao it is exe. after a number of seconds
      
      }
      isdraggedFromTable=false; // re-initializing the flags for the next drag
      isdraggedFromHolder=false;
      }//end function drop
      });
      
         //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         //~~~~~~~~~~~~~~~~~~~~~~~~   S H I F T I N G      D O W N     F U N S. ~~~~~~~~~~~~~~~~~~~~~~~~~~~
         //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      
      function shiftDown(currentlyDragged){
      
      if (inTablePile==4){
      if(currentlyDragged=="Stage_symWeight1"){
      sym.$("symWeight2").css({"left":w1x, "top":w1y}); //setting period of time to 0 because there will be an overlap between the animation of the pile shifting down and the animation of the pile shifting up
      sym.$("symWeight3").css({"left":w2x, "top":w2y});
      sym.$("symWeight4").css({"left":w3x, "top":w3y});
      sym.$("symWeight5").css({"left":w4x, "top":w4y});
      }
      else if(currentlyDragged=="Stage_symWeight2"){
      sym.$("symWeight3").css({"left":w2x, "top":w2y});
      sym.$("symWeight4").css({"left":w3x, "top":w3y});
      sym.$("symWeight5").css({"left":w4x, "top":w4y});
      }
      else if(currentlyDragged=="Stage_symWeight3"){
      sym.$("symWeight4").css({"left":w3x, "top":w3y});
      sym.$("symWeight5").css({"left":w4x, "top":w4y});
      }
      else if(currentlyDragged=="Stage_symWeight4"){
      sym.$("symWeight5").css({"left":w4x, "top":w4y});
      }
      }//end if (inTablePile==4)
      else if (inTablePile==3){
      if(currentlyDragged=="Stage_symWeight1"){
      sym.$("symWeight2").css({"left":w1x, "top":w1y});
      sym.$("symWeight3").css({"left":w2x, "top":w2y});
      sym.$("symWeight4").css({"left":w3x, "top":w3y});
      }
      else if(currentlyDragged=="Stage_symWeight2"){
      sym.$("symWeight3").css({"left":w2x, "top":w2y});
      sym.$("symWeight4").css({"left":w3x, "top":w3y});
      }
      else if(currentlyDragged=="Stage_symWeight3"){
      sym.$("symWeight4").css({"left":w3x, "top":w3y});
      }
      } //end if(inTablePile==3)
      else if (inTablePile==2){
      if(currentlyDragged=="Stage_symWeight1"){
      sym.$("symWeight2").css({"left":w1x, "top":w1y});
      sym.$("symWeight3").css({"left":w2x, "top":w2y});
      }
      else if(currentlyDragged=="Stage_symWeight2"){
      sym.$("symWeight3").css({"left":w2x, "top":w2y});
      }
      }// end if (inTablePile==2)
      else if (inTablePile==1)
      sym.$("symWeight2").css({"left":w1x, "top":w1y});
      }//end function shiftDown()
      
      
      
      function shiftDownH(currentlyDragged){
      if (inHolderPile==4){
      if(currentlyDragged=="Stage_symHolderArrow_symWeight11"){
      sym.getSymbol("symHolderArrow").$("symWeight22").css({"left":Hw1x, "top":Hw1y});
      sym.getSymbol("symHolderArrow").$("symWeight33").css({"left":Hw2x, "top":Hw2y});
      sym.getSymbol("symHolderArrow").$("symWeight44").css({"left":Hw3x, "top":Hw3y});
      sym.getSymbol("symHolderArrow").$("symWeight55").css({"left":Hw4x, "top":Hw4y});
      }
      else if(currentlyDragged=="Stage_symHolderArrow_symWeight22"){
      sym.getSymbol("symHolderArrow").$("symWeight33").css({"left":Hw2x, "top":Hw2y});
      sym.getSymbol("symHolderArrow").$("symWeight44").css({"left":Hw3x, "top":Hw3y});
      sym.getSymbol("symHolderArrow").$("symWeight55").css({"left":Hw4x, "top":Hw4y});
      }
      else if(currentlyDragged=="Stage_symHolderArrow_symWeight33"){
      sym.getSymbol("symHolderArrow").$("symWeight44").css({"left":Hw3x, "top":Hw3y});
      sym.getSymbol("symHolderArrow").$("symWeight55").css({"left":Hw4x, "top":Hw4y});
      }
      else if(currentlyDragged=="Stage_symHolderArrow_symWeight44"){
      sym.getSymbol("symHolderArrow").$("symWeight55").css({"left":Hw4x, "top":Hw4y});
      }
      }//end if (inHolderPile==4)
      else if (inHolderPile==3){
      if(currentlyDragged=="Stage_symHolderArrow_symWeight11"){
      sym.getSymbol("symHolderArrow").$("symWeight22").css({"left":Hw1x, "top":Hw1y});
      sym.getSymbol("symHolderArrow").$("symWeight33").css({"left":Hw2x, "top":Hw2y});
      sym.getSymbol("symHolderArrow").$("symWeight44").css({"left":Hw3x, "top":Hw3y});
      }
      else if(currentlyDragged=="Stage_symHolderArrow_symWeight22"){
      sym.getSymbol("symHolderArrow").$("symWeight33").css({"left":Hw2x, "top":Hw2y});
      sym.getSymbol("symHolderArrow").$("symWeight44").css({"left":Hw3x, "top":Hw3y});
      }
      else if(currentlyDragged=="Stage_symHolderArrow_symWeight33"){
      sym.getSymbol("symHolderArrow").$("symWeight44").css({"left":Hw3x, "top":Hw3y});
      }
      } //end if(inHolderPile==3)
      else if (inHolderPile==2){
      if(currentlyDragged=="Stage_symHolderArrow_symWeight11"){
      sym.getSymbol("symHolderArrow").$("symWeight22").css({"left":Hw1x, "top":Hw1y});
      sym.getSymbol("symHolderArrow").$("symWeight33").css({"left":Hw2x, "top":Hw2y});
      }
      else if(currentlyDragged=="Stage_symHolderArrow_symWeight22"){
      sym.getSymbol("symHolderArrow").$("symWeight33").css({"left":Hw2x, "top":Hw2y});
      }
      }// end if (inHolderPile==2)
      else if (inHolderPile==1)
      sym.getSymbol("symHolderArrow").$("symWeight22").css({"left":Hw1x, "top":Hw1y});
      }//end function shiftDownH()
      
         //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         //~~~~~~~~~~~~~~~~~~~~~~~~   S H I F T I N G      U P     F U N S.  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      
      function shiftUp(dropped){
      if (inTablePile==4){
      if(dropped=="Stage_symWeight1"){
      sym.$("symWeight2").css({"left":w2x, "top":w2y});
      sym.$("symWeight3").css({"left":w3x, "top":w3y});
      sym.$("symWeight4").css({"left":w4x, "top":w4y});
      //sym.$("symWeight5").css({"left":w5x, "top":w5y});
      }
      else if(dropped=="Stage_symWeight2"){
      sym.$("symWeight3").css({"left":w3x, "top":w3y});
      sym.$("symWeight4").css({"left":w4x, "top":w4y});
      //sym.$("symWeight5").css({"left":w5x, "top":w5y});
      }
      else if(dropped=="Stage_symWeight3"){
      sym.$("symWeight4").css({"left":w4x, "top":w4y});
      //sym.$("symWeight5").css({"left":w5x, "top":w5y});
      }
      else if(dropped=="Stage_symWeight4"){
      //sym.$("symWeight5").css({"left":w5x, "top":w5y});
      }
      }//end if (inTablePile==4)
      else if (inTablePile==3){
      if(dropped=="Stage_symWeight1"){
      sym.$("symWeight2").css({"left":w2x, "top":w2y});
      sym.$("symWeight3").css({"left":w3x, "top":w3y});
      //sym.$("symWeight4").css({"left":w4x, "top":w4y});
      }
      else if(dropped=="Stage_symWeight2"){
      sym.$("symWeight3").css({"left":w3x, "top":w3y});
      //sym.$("symWeight4").css({"left":w4x, "top":w4y});
      }
      else if(dropped=="Stage_symWeight3"){
      //sym.$("symWeight4").css({"left":w4x, "top":w4y});
      }
      } //end if(inTablePile==3)
      else if (inTablePile==2){
      if(dropped=="Stage_symWeight1"){
      sym.$("symWeight2").css({"left":w2x, "top":w2y});
      //sym.$("symWeight3").css({"left":w3x, "top":w3y});
      }
      else if(dropped=="Stage_symWeight2"){
      //sym.$("symWeight3").css({"left":w3x, "top":w3y});
      }
      }// end if (inTablePile==2)
      //else if (inTablePile==1)
      //sym.$("symWeight2").css({"left":w2x, "top":w2y});
      }
      
      
      
      function shiftUpH(dropped){
      //alert(inHolderPile);
      //alert(dropped);
      if (inHolderPile==4){
      if(dropped=="Stage_symHolderArrow_symWeight11"){
      sym.getSymbol("symHolderArrow").$("symWeight22").css({"left":Hw2x, "top":Hw2y});
      sym.getSymbol("symHolderArrow").$("symWeight33").css({"left":Hw3x, "top":Hw3y});
      sym.getSymbol("symHolderArrow").$("symWeight44").css({"left":Hw4x, "top":Hw4y});
      //sym.$("symWeight5").css({"left":w5x, "top":w5y});
      }
      else if(dropped=="Stage_symHolderArrow_symWeight22"){
      sym.getSymbol("symHolderArrow").$("symWeight33").css({"left":Hw3x, "top":Hw3y});
      sym.getSymbol("symHolderArrow").$("symWeight44").css({"left":Hw4x, "top":Hw4y});
      //sym.$("symWeight5").css({"left":w5x, "top":w5y});
      }
      else if(dropped=="Stage_symHolderArrow_symWeight33"){
      sym.getSymbol("symHolderArrow").$("symWeight44").css({"left":Hw4x, "top":Hw4y});
      //sym.$("symWeight5").css({"left":w5x, "top":w5y});
      }
      else if(dropped=="Stage_symHolderArrow_symWeight44"){
      //sym.$("symWeight5").css({"left":w5x, "top":w5y});
      }
      }//end if (inHolderPile==4)
      else if (inHolderPile==3){
      if(dropped=="Stage_symHolderArrow_symWeight11"){
      sym.getSymbol("symHolderArrow").$("symWeight22").css({"left":Hw2x, "top":Hw2y});
      sym.getSymbol("symHolderArrow").$("symWeight33").css({"left":Hw3x, "top":Hw3y});
      //sym.$("symWeight4").css({"left":w4x, "top":w4y});
      }
      else if(dropped=="Stage_symHolderArrow_symWeight22"){
      sym.getSymbol("symHolderArrow").$("symWeight33").css({"left":Hw3x, "top":Hw3y});
      //sym.$("symWeight4").css({"left":w4x, "top":w4y});
      }
      else if(dropped=="Stage_symHolderArrow_symWeight33"){
      //sym.$("symWeight4").css({"left":w4x, "top":w4y});
      }
      } //end if(inHolderPile==3)
      else if (inHolderPile==2){
      if(dropped=="Stage_symHolderArrow_symWeight11"){
      sym.getSymbol("symHolderArrow").$("symWeight22").css({"left":Hw2x, "top":Hw2y});}
      else if(dropped=="Stage_symHolderArrow_symWeight22"){
      sym.getSymbol("symHolderArrow").$("symWeight22").css({"left":Hw2x, "top":Hw2y});
      }
      else if (inHolderPile==1){
      (dropped=="Stage_symHolderArrow_symWeight11")
      sym.getSymbol("symHolderArrow").$("symWeight22").css({"left":Hw2x, "top":Hw2y});
      }
      }// end if (inHolderPile==2)
      //else if (inHolderPile==1)
      //sym.$("symWeight2").css({"left":w2x, "top":w2y});
      }
      
      
      
      
      function shiftUp2(dropped){
      //to shift items up when the weight is dragged from the table and dropped on the stage
      //alert(dropped);
      //alert(inTablePile);
      if (inTablePile==4){
      if(dropped=="Stage_symWeight1"){
      sym.$("symWeight2").css({"left":w2x, "top":w2y});
      sym.$("symWeight3").css({"left":w3x, "top":w3y});
      sym.$("symWeight4").css({"left":w4x, "top":w4y});
      sym.$("symWeight5").css({"left":w5x, "top":w5y});
      }
      else if(dropped=="Stage_symWeight2"){
      sym.$("symWeight3").css({"left":w3x, "top":w3y});
      sym.$("symWeight4").css({"left":w4x, "top":w4y});
      sym.$("symWeight5").css({"left":w5x, "top":w5y});
      }
      else if(dropped=="Stage_symWeight3"){
      sym.$("symWeight4").css({"left":w4x, "top":w4y});
      sym.$("symWeight5").css({"left":w5x, "top":w5y});
      }
      else if(dropped=="Stage_symWeight4"){ ///////////////////////if dragged==5
      sym.$("symWeight5").css({"left":w5x, "top":w5y});}
      }//end if (inTablePile==4)
      else if (inTablePile==3){
      if(dropped=="Stage_symWeight1"){
      sym.$("symWeight2").css({"left":w2x, "top":w2y});
      sym.$("symWeight3").css({"left":w3x, "top":w3y});
      sym.$("symWeight4").css({"left":w4x, "top":w4y});
      }
      else if(dropped=="Stage_symWeight2"){
      sym.$("symWeight3").css({"left":w3x, "top":w3y});
      sym.$("symWeight4").css({"left":w4x, "top":w4y});
      }
      else if(dropped=="Stage_symWeight3"){
      sym.$("symWeight4").css({"left":w4x, "top":w4y});
      }
      } //end if(inTablePile==3)
      else if (inTablePile==2){
      if(dropped=="Stage_symWeight1"){
      sym.$("symWeight2").css({"left":w2x, "top":w2y});
      sym.$("symWeight3").css({"left":w3x, "top":w3y});
      }
      else if(dropped=="Stage_symWeight2"){
      sym.$("symWeight3").css({"left":w3x, "top":w3y});
      }
      }// end if (inTablePile==2)
      else if (inTablePile==1){
      if(dropped=="Stage_symWeight1")
      sym.$("symWeight2").css({"left":w2x, "top":w2y});
      }
      inTablePile++;
      }//end funciton shiftUp2
      
      
      
      
      function shiftUpH2(dropped){
      //to shift items up when the weight is dragged from the table and dropped on the stage
      //alert(dropped);
      if (inHolderPile==4){
      if(dropped=="Stage_symHolderArrow_symWeight11"){
      sym.getSymbol("symHolderArrow").$("symWeight22").css({"left":Hw2x, "top":Hw2y});
      sym.getSymbol("symHolderArrow").$("symWeight33").css({"left":Hw3x, "top":Hw3y});
      sym.getSymbol("symHolderArrow").$("symWeight44").css({"left":Hw4x, "top":Hw4y});
      sym.getSymbol("symHolderArrow").$("symWeight55").css({"left":Hw5x, "top":Hw5y});
      }
      else if(dropped=="Stage_symHolderArrow_symWeight22"){
      sym.getSymbol("symHolderArrow").$("symWeight33").css({"left":Hw3x, "top":Hw3y});
      sym.getSymbol("symHolderArrow").$("symWeight44").css({"left":Hw4x, "top":Hw4y});
      sym.getSymbol("symHolderArrow").$("symWeight55").css({"left":Hw5x, "top":Hw5y});
      }
      else if(dropped=="Stage_symHolderArrow_symWeight33"){
      sym.getSymbol("symHolderArrow").$("symWeight44").css({"left":Hw4x, "top":Hw4y});
      sym.getSymbol("symHolderArrow").$("symWeight55").css({"left":Hw5x, "top":Hw5y});
      }
      else if(dropped=="Stage_symHolderArrow_symWeight44"){
      sym.getSymbol("symHolderArrow").$("symWeight55").css({"left":Hw5x, "top":Hw5y});}
      }//end if (inHolderPile==4)
      else if (inHolderPile==3){
      if(dropped=="Stage_symHolderArrow_symWeight11"){
      sym.getSymbol("symHolderArrow").$("symWeight22").css({"left":Hw2x, "top":Hw2y});
      sym.getSymbol("symHolderArrow").$("symWeight33").css({"left":Hw3x, "top":Hw3y});
      sym.getSymbol("symHolderArrow").$("symWeight44").css({"left":Hw4x, "top":Hw4y});
      }
      else if(dropped=="Stage_symHolderArrow_symWeight22"){
      sym.getSymbol("symHolderArrow").$("symWeight33").css({"left":Hw3x, "top":Hw3y});
      sym.getSymbol("symHolderArrow").$("symWeight44").css({"left":Hw4x, "top":Hw4y});
      }
      else if(dropped=="Stage_symHolderArrow_symWeight33"){
      sym.getSymbol("symHolderArrow").$("symWeight44").css({"left":Hw4x, "top":Hw4y});
      }
      } //end if(inHolderPile)
      else if (inHolderPile==2){
      if(dropped=="Stage_symHolderArrow_symWeight11"){
      sym.getSymbol("symHolderArrow").$("symWeight22").css({"left":Hw2x, "top":Hw2y});
      sym.getSymbol("symHolderArrow").$("symWeight33").css({"left":Hw3x, "top":Hw3y});
      }
      else if(dropped=="Stage_symHolderArrow_symWeight22"){
      sym.getSymbol("symHolderArrow").$("symWeight33").css({"left":Hw3x, "top":Hw3y});
      }
      }// end if (inHolderPile==2)
      else if (inHolderPile==1){
      if (dropped=="Stage_symHolderArrow_symWeight11")
      sym.getSymbol("symHolderArrow").$("symWeight22").css({"left":Hw2x, "top":Hw2y});}
      inHolderPile++;
      }//end funciton shiftUpH2
      
      
         //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         //~~~~~~~~~~~~~~~~~~~~~~~~   R E S E T     F U N C T I O N   ~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~~~~~
         //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      function reset(){
      weightx=0;
      weighty=0;
      //restting flags
      inTablePile=5; 
      inHolderPile=0; 
      isdraggedFromHolder=false;
      isdraggedFromTable=false;
      //resetting result tables
         sym.$("symResult1").css({"left":HideX,"top":HideY});
         sym.$("symResult2").css({"left":HideX,"top":HideY});
         sym.$("symResult3").css({"left":HideX,"top":HideY});
         sym.$("symResult4").css({"left":HideX,"top":HideY});
         sym.$("symResult5").css({"left":HideX,"top":HideY});
         sym.$("symResult").css({"left":resultX,"top":resultY});
         currentResult="symResult";  //to save the currently displayed result table
         prevResult=""; //to save the recent displayed table
       //resetting weights
       sym.$("symWeight1").css({"left":w1x, "top":w1y});
       sym.$("symWeight2").css({"left":w2x, "top":w2y});
       sym.$("symWeight3").css({"left":w3x, "top":w3y});
       sym.$("symWeight4").css({"left":w4x, "top":w4y});
       sym.$("symWeight5").css({"left":w5x, "top":w5y});
       //resetting holder pile
       sym.getSymbol("symHolderArrow").$("symWeight11").css({"left":Hw1x,"top":Hw1y}); 
       sym.getSymbol("symHolderArrow").$("symWeight22").css({"left":Hw2x,"top":Hw2y}); 
       sym.getSymbol("symHolderArrow").$("symWeight33").css({"left":Hw3x,"top":Hw3y}); 
       sym.getSymbol("symHolderArrow").$("symWeight44").css({"left":Hw4x,"top":Hw4y}); 
       sym.getSymbol("symHolderArrow").$("symWeight55").css({"left":Hw5x,"top":Hw5y}); 
        sym.getSymbol("symHolderArrow").$("symWeight11").draggable("disable");
        sym.getSymbol("symHolderArrow").$("symWeight22").draggable("disable");
        sym.getSymbol("symHolderArrow").$("symWeight33").draggable("disable");
        sym.getSymbol("symHolderArrow").$("symWeight44").draggable("disable");
        sym.getSymbol("symHolderArrow").$("symWeight55").draggable("disable");
       sym.getSymbol("symHolderArrow").$("symWeight11").css({"opacity": 0});
       sym.getSymbol("symHolderArrow").$("symWeight22").css({"opacity": 0});
       sym.getSymbol("symHolderArrow").$("symWeight33").css({"opacity": 0});
       sym.getSymbol("symHolderArrow").$("symWeight44").css({"opacity": 0});
       sym.getSymbol("symHolderArrow").$("symWeight55").css({"opacity": 0});
        //resetting the holder and the spring
        sym.$("symHolderArrow").css({"left":holderX,"top": holderY});
        sym.$("symSpring").css({"height":springHeight});
        sym.$("symSnap").css({"left":snapX,"top":snapY});
        sym.$("symSpring").css({"left":springX,"top":springY});
      
      }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "mousemove", function(sym, e) {
         // insert code to be run when the mouse is moved over the object
         this.onMove(e.pageX,e.pageY);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'SpringSprite_symbol_1'
   (function(symbolName) {   
   
      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

   })("symSpring");
   //Edge symbol end:'symSpring'

   //=========================================================
   
   //Edge symbol: 'symHolder'
   (function(symbolName) {   
   
   })("symHolder");
   //Edge symbol end:'symHolder'

   //=========================================================
   
   //Edge symbol: 'symArrow'
   (function(symbolName) {   
   
   })("symArrow");
   //Edge symbol end:'symArrow'

   //=========================================================
   
   //Edge symbol: 'symHolderArrow'
   (function(symbolName) {   
   
   })("symHolderArrow");
   //Edge symbol end:'symHolderArrow'

   //=========================================================
   
   //Edge symbol: 'symCeiling'
   (function(symbolName) {   
   
   })("symCeiling");
   //Edge symbol end:'symCeiling'

   //=========================================================
   
   //Edge symbol: 'symReset'
   (function(symbolName) {   
   
   })("symReset");
   //Edge symbol end:'symReset'

   //=========================================================
   
   //Edge symbol: 'symResult'
   (function(symbolName) {   
   
   })("symResult");
   //Edge symbol end:'symResult'

   //=========================================================
   
   //Edge symbol: 'symRuler'
   (function(symbolName) {   
   
   })("symRuler");
   //Edge symbol end:'symRuler'

   //=========================================================
   
   //Edge symbol: 'symTable'
   (function(symbolName) {   
   
   })("symTable");
   //Edge symbol end:'symTable'

   //=========================================================
   
   //Edge symbol: 'symWeight1'
   (function(symbolName) {   
   
   })("symWeight1");
   //Edge symbol end:'symWeight1'

   //=========================================================
   
   //Edge symbol: 'symWeight2'
   (function(symbolName) {   
   
   })("symWeight2");
   //Edge symbol end:'symWeight2'

   //=========================================================
   
   //Edge symbol: 'symWeight3'
   (function(symbolName) {   
   
   })("symWeight3");
   //Edge symbol end:'symWeight3'

   //=========================================================
   
   //Edge symbol: 'symWeight4'
   (function(symbolName) {   
   
   })("symWeight4");
   //Edge symbol end:'symWeight4'

   //=========================================================
   
   //Edge symbol: 'symWeight5'
   (function(symbolName) {   
   
   })("symWeight5");
   //Edge symbol end:'symWeight5'

   //=========================================================
   
   //Edge symbol: 'symWeight6'
   (function(symbolName) {   
   
   })("symWeight6");
   //Edge symbol end:'symWeight6'

   //=========================================================
   
   //Edge symbol: 'symSnap'
   (function(symbolName) {   
   
   })("symSnap");
   //Edge symbol end:'symSnap'

   //=========================================================
   
   //Edge symbol: 'symPile1'
   (function(symbolName) {   
   
   })("symPile1");
   //Edge symbol end:'symPile1'

   //=========================================================
   
   //Edge symbol: 'symBackground'
   (function(symbolName) {   
   
   })("symBackground");
   //Edge symbol end:'symBackground'

   //=========================================================
   
   //Edge symbol: 'symResult5'
   (function(symbolName) {   
   
   })("symResult5");
   //Edge symbol end:'symResult5'

   //=========================================================
   
   //Edge symbol: 'symResult4'
   (function(symbolName) {   
   
   })("symResult4");
   //Edge symbol end:'symResult4'

   //=========================================================
   
   //Edge symbol: 'symResult3'
   (function(symbolName) {   
   
   })("symResult3");
   //Edge symbol end:'symResult3'

   //=========================================================
   
   //Edge symbol: 'symResult2'
   (function(symbolName) {   
   
   })("symResult2");
   //Edge symbol end:'symResult2'

   //=========================================================
   
   //Edge symbol: 'symResult1'
   (function(symbolName) {   
   
   })("symResult1");
   //Edge symbol end:'symResult1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-97825884");