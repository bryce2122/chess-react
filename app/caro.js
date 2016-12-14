import {Motion, spring} from 'react-motion';
import range from 'lodash.range';
var React = require('react');
var ReactDOM = require('react-dom');
var DragDropContext = require('react-dnd').DragDropContext
var square;
var PIECE;
var i;
var checkmecount = 0
var HTML5Backend = require('react-dnd-html5-backend');
var DragSource = require('react-dnd').DragSource;
var DropTarget = require('react-dnd').DropTarget;
var flow = require('lodash/flow');
var count = -1;
var BS1;
var dragstate;
var kkillcount = 0;
var arr = []
var count_number = 0
var prevept;
var prevepl;
var kntop = 0
var knleft = 0
var enemycount = 0
var pawnArrayx = []
var PropTypes = React.PropTypes;
var eptop = 265
var epleft = 133
var epkillcount = 0;
var moveArray = []
var a;
var bArray;
var grid = []
var killsquare = [0,1,2,3,4,5,6,7,8,9,10,12,13,14,15]
var prevkillsquare = [0,1,2,3,4,5,6,7,8,9,10,12,13,14,15]
var prevc = []
var pcheck = [1,7,6,7,2,7,5,7,0,6,1,6,2,6,3,6,4,6,5,6,6,6,7,6,0,7,7,7,3,7,4,7]
 
var whosemove;
var C1kill = 0;
var P1kill = 0;
var P2kill = 0;
var P3kill = 0;
var P4kill = 0;
var P5kill = 0;
var P6kill = 0;
var P7kill = 0;
var P8kill = 0;
var ECastle1kill = 0;
var ec1offsetx = 433
var ec1offsety = 97
var ec2offsetx = 870.5
var ec2offsety = 97
var C2kill = 0;

var knightArray = []
var eb1offsetx = 558
var eb1offsety = 97
var Eb1kill = 0;

var eb2offsetx = 745.5
var eb2offsety = 97
var Eb2kill = 0;





var Ep1kill = 0;

var ep1offsety = 159.5

var ep1offsetx;

var window_difference = (1366 - window.innerWidth) * 0.5
var pawn1_pixel_subtract = 433 - window_difference
var ep1offsetxa = pawn1_pixel_subtract

var pawn2_pixel_subtract = 495.5 - window_difference
var ep2offsetxa = pawn2_pixel_subtract



var pawn3_pixel_subtract = 558 - window_difference
var ep3offsetxa = pawn3_pixel_subtract

var pawn4_pixel_subtract = 620.5 - window_difference
var ep4offsetxa = pawn4_pixel_subtract

var pawn5_pixel_subtract = 683 - window_difference
var ep5offsetxa = pawn5_pixel_subtract


var pawn6_pixel_subtract = 745.5 - window_difference
var e6offsetxa = pawn5_pixel_subtract

var pawn7_pixel_subtract = 808 - window_difference
var ep7offsetxa = pawn6_pixel_subtract

var pawn8_pixel_subtract = 870.5 - window_difference
var ep8offsetxa = pawn7_pixel_subtract




var winx = Math.round(window.innerWidth * 0.317)
var Ep1kill = 0;
var ep2offsety = 159.5
var ep2offsetx = 495.5
var Ep2kill = 0;
var ep3offsety = 159.5
var ep3offsetx = 558
var Ep3kill = 0;
var ep4offsety = 159.5
var ep4offsetx = 620.5
var Ep4kill = 0;
var ep5offsety = 159.5
var ep5offsetx = 683
var Ep5kill = 0;
var ep6offsety = 159.5
var ep6offsetx = 745.5
var Ep6kill = 0;
var ep7offsety = 159.5
var ep7offsetx = 808
var Ep7kill = 0;
var ep8offsety = 159.5
var ep8offsetx = 870.5
var Ep8kill = 0;


var eqoffsetx = 620.5
var eqoffsety = 97;
var Eqkill = 0;




var ekoffsetx = 683
var ekoffsety = 97;
var Ekkill = 0;





var ek1offsetx = 495.5
var ek1offsety = 97
var Ek1kill = 0;
var ek2offsetx = 808
var ek2offsety = 97
var Ek2kill = 0;

var EPAWN1X;
var EPAWN1Y;
var EPAWN2X;
var EPAWN2Y;
var EPAWN3X;
var EPAWN3Y;
var EPAWN4X;
var EPAWN4Y;
var EPAWN5X;
var EPAWN5Y;
var EPAWN6X;
var EPAWN6Y;
var EPAWN7X;
var EPAWN7Y;
var EPAWN8X;
var EPAWN8Y;


var EBISHOP1X;
var EBISHOP1Y;
var EBISHOP2X;
var EBISHOP2Y

var EKNIGHT1X
var EKNIGHT1Y
var EKNIGHT2X
var EKNIGHT2Y

var ECASTLE1X
var ECASTLE1y
var ECASTLE2X
var ECASTLE2y

var EQUEENX
var EQUEENY

var EKINGX
var EKINGY



   var knightX = 1
   var knightY = 7
  var knight2X = 6
  var knight2Y = 7
  var bishopX = 2
  var bishopY = 7
  var bishop2X = 5
  var bishop2Y = 7 
  var pawn1X =  0
  var pawn1Y =  6
  var pawn2X =  1
  var pawn2Y =  6
  var pawn3X =  2
  var pawn3Y = 6
  var pawn4X = 3
  var pawn4Y = 6
  var pawn5X = 4
  var pawn5Y = 6
  var pawn6X = 5
  var pawn6Y = 6
  var pawn7X = 6
  var pawn7Y = 6
  var pawn8X = 7
  var pawn8Y = 6
  var castle1X = 0
  var castle1Y = 7
  var castle2X = 7
  var castle2Y = 7
  var queenX = 3
  var queenY = 7
  var kingX = 4
  var kingY = 7
  var drag_piece;
 var xOverlay;
 var yOverlay;

 var overlayCount = -1




var knOlArray = [[knightX,knightY],[knight2X,knight2Y]]


var cArray;



















var whitemove = [ 'Kingf2', 'Castlea4', 'Bishopd3', 'a3' ]

var blackmove = [ 'e6', 'h6', 'Bishopg7', 'Knightf6']

// Components 

//Constants 
var Xarray = []
var Yarray = []
 

// Diameter of the main button in pixels



var pawnArrayy = [[pawn1X,pawn1Y],[pawn2X,pawn2Y],[pawn3X,pawn3Y],[pawn4X,pawn4X],[pawn5X,pawn5Y],
                  [pawn6X,pawn6Y],[pawn7X,pawn7Y],[pawn8X,pawn8Y]]









console.log("XXXX")
console.log(winx)




function pawn1_Window_Update() {




 window_difference = (1366 - window.innerWidth) * 0.5
 pawn1_pixel_subtract = 433 - window_difference
 ep1offsetxa = pawn1_pixel_subtract
 ep3offsetxa = pawn3_pixel_subtract
}


setInterval(pawn1_Window_Update,100)







 var ECastle1 = React.createClass({
  render: function () {

    
  
return <span id="ec1" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: "20"
      }}>
      ♜</span>

  }
 });    

 var ECastle2 = React.createClass({
  render: function () {

    
  
return <span id="ec2" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: "20"
      }}>
      ♜</span>

  }
 });  






var EBishop = React.createClass({
  render: function () {

    
  
return <span id="eb" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative'
      }}>
      ♝</span>

  }
 });

var EBishop2 = React.createClass({
  render: function () {

    
  
return <span id="eb2" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: '20'
      }}>
      ♝</span>

  }
 });


var EKnight = React.createClass({
  render: function () {

    
  
return <span id="ek1" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: "20"
      }}>
      ♞</span>

  }
 });


var EKnight2 = React.createClass({
  render: function () {

    
  
return <span id="ek2" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: "20"
      }}>
      ♞</span>

  }
 });












var EQueen = React.createClass({
  render: function () {

    
  
return <span id ="eq" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: '20'
      }}>
      ♛</span>

  }
 });

var EKing = React.createClass({
  render: function () {

    
  
return <span id="ek" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: "20"
      }}>
      ♚</span>

  }
 });



var EPawn = React.createClass({
  render: function () {

    
  
return <span id="ep" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: "20"
      }}>
      ♟</span>

  }
 });




var EPawn2 = React.createClass({
  render: function () {

    
  
return <span id="ep2" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: "20"
      }}>
      ♟</span>

  }
 });

 var EPawn3 = React.createClass({
  render: function () {

    
  
return <span id="ep3" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: "20"
      }}>
      ♟</span>

  }
 });
 


var EPawn4 = React.createClass({
  render: function () {

    
  
return <span id="ep4" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: "20"
      }}>
      ♟</span>

  }
 });


var EPawn5 = React.createClass({
  render: function () {

    
  
return <span id="ep5" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: "20"
      }}>
      ♟</span>

  }
 });


var EPawn6 = React.createClass({
  render: function () {

    
  
return <span id="ep6" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: "20"
      }}>
      ♟</span>

  }
 });


var EPawn7 = React.createClass({
  render: function () {

    
  
return <span id="ep7" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: "20"
      }}>
      ♟</span>

  }
 });


var EPawn8 = React.createClass({
  render: function () {

    
  
return <span id="ep8" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: "20"
      }}>
      ♟</span>

  }
 });













var castlePosition1 = [0,7]
var castlePosition2 = [7,7]
var queenPosition = [3,7]
var kingPosition = [4,7]
var knightPosition = [1, 7];
var knightPosition2 = [6,7]
var bishopPosition = [2,7]
var bishopPosition2 = [5,7]
var pawnPosition1 = [0,6]
var pawnPosition2 = [1,6]
var pawnPosition3 = [2,6]
var pawnPosition4 = [3,6]
var pawnPosition5 = [4,6]
var pawnPosition6 = [5,6]
var pawnPosition7 = [6,6]
var pawnPosition8 = [7,6]






var observer = null;

function emitChange() {
  observer(knightPosition2);

}



var moveKnight = function (toX, toY) {
  knightPosition = [toX, toY];
  count_number++
  

   if(count_number == 0){

      overlayCount == -1


    }
 

 else if(count_number == 1){


  overlayCount = 0
 }


 else if(count_number > 1) {


  overlayCount += 2
 }
  emitChange();
}

var canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === 1 && (dy) === -2) 
}

var moveKnight2 = function (toX, toY) {
  knightPosition2 = [toX, toY];
   count_number++
  

   if(count_number == 0){

      overlayCount == -1


    }
 

 else if(count_number == 1){


  overlayCount = 0
 }


 else if(count_number > 1) {


  overlayCount += 2
 }

emitChange();
  
}

var canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === -1 && (dy) === -2 ) 
        
}

var moveBishop = function (toX, toY) {
  bishopPosition = [toX, toY];
   count_number++
  

    if(count_number == 0){

      overlayCount == -1


    }
 

 else if(count_number == 1){


  overlayCount = 0
 }


 else if(count_number > 1) {


  overlayCount += 2
 }














  emitChange();
}

var canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}







var moveBishop2 = function (toX, toY) {
  bishopPosition2 = [toX, toY];
   count_number++
  
    if(count_number == 0){

      overlayCount == -1


    }
 

 else if(count_number == 1){


  overlayCount = 0
 }


 else if(count_number > 1) {


  overlayCount += 2
 }
















  emitChange();
}

var canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === -3 && (dy) === -3) 
         
}

var movePawn1 = function (toX, toY) {
  pawnPosition1 = [toX, toY];
  count_number++;
  
     if(count_number == 0){

      overlayCount == -1


    }
 

 else if(count_number == 1){


  overlayCount = 0
 }


 else if(count_number > 1) {


  overlayCount += 2
 }













  emitChange();
}

var canMovePawn1 = function (toX, toY) {
  const x = pawnPosition1[0];
  const y = pawnPosition1[1];
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}


var movePawn2 = function (toX, toY) {
  pawnPosition2 = [toX, toY];
  count_number++
  
     if(count_number == 0){

      overlayCount == -1


    }
 

 else if(count_number == 1){


  overlayCount = 0
 }


 else if(count_number > 1) {


  overlayCount += 2
 }









  emitChange();
}

var canMovePawn2 = function (toX, toY) {
  const x = pawnPosition2[0];
  const y = pawnPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

 return (dy === -1 && dx === -1 || dy === -1 && dx === 0)
}


var movePawn3 = function (toX, toY) {
  pawnPosition3 = [toX, toY];
   count_number++
  

  

   if(count_number == 0){

      overlayCount == -1


    }
 

 else if(count_number == 1){


  overlayCount = 0
 }


 else if(count_number > 1) {


  overlayCount += 2
 }











  emitChange();
}

var canMovePawn3 = function (toX, toY) {
  const x = pawnPosition3[0];
  const y = pawnPosition3[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === 0 && (dy) === -1) 
         
}


var movePawn4 = function (toX, toY) {
  pawnPosition4 = [toX, toY];
   count_number++
  

      if(count_number == 0){

      overlayCount == -1


    }
 

 else if(count_number == 1){


  overlayCount = 0
 }


 else if(count_number > 1) {


  overlayCount += 2
 }









  emitChange();
}

var canMovePawn4 = function (toX, toY) {
  const x = pawnPosition4[0];
  const y = pawnPosition4[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === 0 && (dy) === -2) 
         
}


var movePawn5 = function (toX, toY) {
  pawnPosition5 = [toX, toY];
   count_number++
  

    if(count_number == 0){

      overlayCount == -1


    }
 

 else if(count_number == 1){


  overlayCount = 0
 }


 else if(count_number > 1) {


  overlayCount += 2
 }

emitChange();
}

var canMovePawn5 = function (toX, toY) {
  const x = pawnPosition5[0];
  const y = pawnPosition5[1];
  const dx = toX - x;
  const dy = toY - y;

  return (dy === -2 && dx === 0);
}

var movePawn6 = function (toX, toY) {
  pawnPosition6 = [toX, toY];
   count_number++
 

      if(count_number == 0){

      overlayCount == -1


    }
 

 else if(count_number == 1){


  overlayCount = 0
 }


 else if(count_number > 1) {


  overlayCount += 2
 }









  emitChange();
}

var canMovePawn6 = function (toX, toY) {
  const x = pawnPosition6[0];
  const y = pawnPosition6[1];
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}



var movePawn7 = function (toX, toY) {
  pawnPosition7 = [toX, toY];
   count_number++
  
   

      if(count_number == 0){

      overlayCount == -1


    }
 

 else if(count_number == 1){


  overlayCount = 0
 }


 else if(count_number > 1) {


  overlayCount += 2
 }

   







  emitChange();
}

var canMovePawn7 = function (toX, toY) {
  const x = pawnPosition7[0];
  const y = pawnPosition7[1];
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}


var movePawn8 = function (toX, toY) {
  pawnPosition8 = [toX, toY];
   count_number++
  


      if(count_number == 0){

      overlayCount == -1


    }
 

 else if(count_number == 1){


  overlayCount = 0
 }


 else if(count_number > 1) {


  overlayCount += 2
 }






  emitChange();
}

var canMovePawn8 = function (toX, toY) {
  const x = pawnPosition8[0];
  const y = pawnPosition8[1];
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}




var moveQueen = function (toX, toY) {
  queenPosition = [toX, toY];
   count_number++
  

      if(count_number == 0){

      overlayCount == -1


    }
 

 else if(count_number == 1){


  overlayCount = 0
 }


 else if(count_number > 1) {


  overlayCount += 2
 }











  emitChange();
}

var canMoveQueen = function (toX, toY) {
  const x = queenPosition[0];
  const y = queenPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}


var moveKing = function (toX, toY) {
  kingPosition = [toX, toY];
   

      count_number++


      if(count_number == 0){

      overlayCount == -1


    }
 

 else if(count_number == 1){


  overlayCount = 0
 }


 else if(count_number > 1) {


  overlayCount += 2
 }







   
  emitChange();
}

var canMoveKing = function (toX, toY) {
  const x = kingPosition[0];
  const y = kingPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}


var moveCastle1 = function (toX, toY) {
  castlePosition1 = [toX, toY];
  count_number++
  

      if(count_number == 0){

      overlayCount == -1


    }
 

 else if(count_number == 1){


  overlayCount = 0
 }


 else if(count_number > 1) {


  overlayCount += 2
 }








  emitChange();
}

var canMoveCastle1 = function (toX, toY) {
  const x = castlePosition1[0];
  const y = castlePosition1[1];
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}

var moveCastle2 = function (toX, toY) {
  castlePosition2 = [toX, toY];
   count_number++
  

      if(count_number == 0){

      overlayCount == -1


    }
 

 else if(count_number == 1){


  overlayCount = 0
 }


 else if(count_number > 1) {


  overlayCount += 2
 }









  emitChange();
}

var canMoveCastle2 = function (toX, toY) {
  const x = castlePosition2[0];
  const y = castlePosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}


























var ItemTypes = {
  KNIGHT: 'knight',
  KNIGHT2: 'knight'

};

var knightSource = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};

var knight2Source = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};


var bishopSource = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};

var bishop2Source = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};

var pawn1Source = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};
var pawn2Source = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};

var pawn3Source = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};

var pawn4Source = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};

var pawn5Source = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};

var pawn6Source = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};

var pawn7Source = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};

var pawn8Source = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};


var castle1Source = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};

var castle2Source = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};


var queenSource = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};


var kingSource = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};







function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}


var Knight = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;
    if(isDragging){
      dragstate = "k"
    }
    return connectDragSource(
      <span id="wk" style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
       
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♞
      </span>
    );
  }
});


var k = "knight"
var K = DragSource(k, knightSource, collect)(Knight);




var Knight2 = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    if(isDragging){

      dragstate = "k2";
    }

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
        
        cursor: 'move',
        position: 'relative',
        zIndex: 30
      }}>
        ♞
      </span>
    );
  }
});


var k2 = "knight2"

var K2 = DragSource(k2, knight2Source, collect)(Knight2);



var Bishop1 = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
        
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♝
      </span>
    );
  }
});

var b1 = "bishop"

var B1 = DragSource(b1, bishopSource, collect)(Bishop1);






var Bishop2 = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
        
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♝
      </span>
    );
  }
});


var b2 = "bishop2"

var B2 = DragSource(b2, bishop2Source, collect)(Bishop2);



var Pawn1 = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
       
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♟
      </span>
    );
  }
});


var p1 = "pawn1"

var P1 = DragSource(p1, pawn1Source, collect)(Pawn1);

var Pawn2 = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♟
      </span>
    );
  }
});


var p2 = "pawn2"

var P2 = DragSource(p2, pawn2Source, collect)(Pawn2);


var Pawn3 = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
        
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♟
      </span>
    );
  }
});


var p3 = "pawn3"

var P3 = DragSource(p3, pawn3Source, collect)(Pawn3);

var Pawn4 = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
       
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♟
      </span>
    );
  }
});


var p4 = "pawn4"

var P4 = DragSource(p4, pawn4Source, collect)(Pawn4);



var Pawn5 = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
        
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♟
      </span>
    );
  }
});


var p5 = "pawn5"

var P5 = DragSource(p5, pawn5Source, collect)(Pawn5);

var Pawn6 = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
        
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♟
      </span>
    );
  }
});


var p6 = "pawn6"

var P6 = DragSource(p6, pawn6Source, collect)(Pawn6);


var Pawn7 = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
        
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♟
      </span>
    );
  }
});


var p7 = "pawn7"

var P7 = DragSource(p7, pawn7Source, collect)(Pawn7);


var Pawn8 = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
        
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♟
      </span>
    );
  }
});


var p8 = "pawn8"

var P8 = DragSource(p8, pawn8Source, collect)(Pawn8);



var Castle1 = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
        
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♜
      </span>
    );
  }
});


var c1 = "castle1"

var C1 = DragSource(c1, castle1Source, collect)(Castle1);


var Castle2 = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
      
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♜
      </span>
    );
  }
});


var c2 = "castle2"

var C2 = DragSource(c2, castle2Source, collect)(Castle2);




var Queen = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
       
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♛
      </span>
    );
  }
});


var q = "queen"

var Q = DragSource(q, queenSource, collect)(Queen);

var King = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
        
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♔
      </span>
    );
  }
});


var king = "king"

var KING = DragSource(king, kingSource, collect)(King);

















var Square = React.createClass({
  propTypes: {
    black: PropTypes.bool
  },

  render: function () {
    var black = this.props.black;
    var fill = black ? 'grey' : 'green';
    var stroke = "black"
    return (
      <div style={{
        backgroundColor: fill,
        color: stroke,
        width: '100%',
        height: '100%'
      }}>
        {this.props.children}
      </div>
    );
  }
});
















var squareTargetK = {
  canDrop: function (props) {
    return canMoveKnight(props.x, props.y);
  },

  drop: function (props) {
    moveKnight(props.x, props.y);
  }


};

var squareTargetK2 = {
  canDrop: function (props) {
    return canMoveKnight2(props.x, props.y);
  },

  drop: function (props) {
    moveKnight2(props.x, props.y);
  }


};

var squareTargetB1 = {
  canDrop: function (props) {
    return canMoveBishop(props.x, props.y);
  },

  drop: function (props) {
   moveBishop(props.x, props.y);
  }


};


var squareTargetB2 = {
  canDrop: function (props) {
    return canMoveBishop2(props.x, props.y);
  },

  drop: function (props) {
    moveBishop2(props.x, props.y);
  }


};


var squareTargetP1 = {
  canDrop: function (props) {
    return canMovePawn1(props.x, props.y);
  },

  drop: function (props) {
    movePawn1(props.x, props.y);
  }


};

var squareTargetP2 = {
  canDrop: function (props) {
    return canMovePawn2(props.x, props.y);
  },

  drop: function (props) {
    movePawn2(props.x, props.y);
  }


};


var squareTargetP3 = {
  canDrop: function (props) {
    return canMovePawn3(props.x, props.y);
  },

  drop: function (props) {
    movePawn3(props.x, props.y);
  }


};


var squareTargetP4 = {
  canDrop: function (props) {
    return canMovePawn4(props.x, props.y);
  },

  drop: function (props) {
    movePawn4(props.x, props.y);
  }


};


var squareTargetP5 = {
  canDrop: function (props) {
    return canMovePawn5(props.x, props.y);
  },

  drop: function (props) {
    movePawn5(props.x, props.y);
  }


};


var squareTargetP6 = {
  canDrop: function (props) {
    return canMovePawn6(props.x, props.y);
  },

  drop: function (props) {
    movePawn6(props.x, props.y);
  }


};


var squareTargetP7 = {
  canDrop: function (props) {
    return canMovePawn7(props.x, props.y);
  },

  drop: function (props) {
    movePawn7(props.x, props.y);
  }


};

var squareTargetP8 = {
  canDrop: function (props) {
    return canMovePawn8(props.x, props.y);
  },

  drop: function (props) {
    movePawn8(props.x, props.y);
  }


};



var squareTargetC1 = {
  canDrop: function (props) {
    return canMoveCastle1(props.x, props.y);
  },

  drop: function (props) {
    moveCastle1(props.x, props.y);
  }


};

var squareTargetC2 = {
  canDrop: function (props) {
    return canMoveCastle2(props.x, props.y);
  },

  drop: function (props) {
    moveCastle2(props.x, props.y);
  }


};


var squareTargetQ = {
  canDrop: function (props) {
    return canMoveQueen(props.x, props.y);
  },

  drop: function (props) {
    moveQueen(props.x, props.y);
  }


};

var squareTargetKING = {
  canDrop: function (props) {
    return canMoveKing(props.x, props.y);
  },

  drop: function (props) {
    moveKing(props.x, props.y);
  }


};














function collectme(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    


  };
}
 function collectme2(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    


  };
}






// var BoardSquare = React.createClass({
//   propTypes: {
//     x: PropTypes.number.isRequired,
//     y: PropTypes.number.isRequired,
//     isOver: PropTypes.bool.isRequired,
//     canDrop: PropTypes.bool.isRequired
//   },

//   renderOverlay: function (color) {
//     return (
//       <div style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         height: '100%',
//         width: '100%',
//         zIndex: 6, 
//         opacity: 0.5,
//         backgroundColor: color,
//       }} />
//     );
//   },

//   render: function () {
//     var x = this.props.x;
//     var y = this.props.y;
//     var connectDropTarget = this.props.connectDropTarget;
//     var isOver = this.props.isOver;
//     var black = (x + y) % 2 === 1;
//     var canDrop = this.props.canDrop
//     return connectDropTarget(
//       <div style={{
       
//         width: '100%',
//         height: '100%',
        
//       }}>
//         <Square black={black}>
//           {this.props.children}
//         </Square>
//         {x == 2 && y == 7 && count < 140 && this.renderOverlay('purple')}
//         {x == 5 && y == 7 && count > 140 && count < 260 && this.renderOverlay('purple')}
//         {isOver && !canDrop && this.renderOverlay('red')}
//         {!isOver && canDrop && this.renderOverlay('yellow')}
//         {isOver && canDrop && this.renderOverlay('blue')}
//       </div>
//     );
//   }
// })

 var BoardSquare = React.createClass({
  propTypes: {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired
  },

  renderOverlay: function (color) {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color,
      }} />
    );
  },

  render: function () {
    var x = this.props.x;
    var y = this.props.y;
    var connectDropTarget = this.props.connectDropTarget;
    var isOver = this.props.isOver;
    var black = (x + y) % 2 === 1;
    var canDrop = this.props.canDrop
  

    return connectDropTarget(
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>
        <Square black={black}>
          {this.props.children}
        </Square>
      
        {x == xOverlay && y == yOverlay && count == overlayCount && this.renderOverlay('blue')}
      
      
        
        {!isOver && canDrop && this.renderOverlay('blue')}
        {isOver && canDrop && this.renderOverlay('blue')}
      </div>
    );
  }
})



















 var flowme = "what"
 function bf() {

  return (flow(
   DropTarget(ItemTypes.KNIGHT, squareTargetK, collectme),
   DropTarget(yes, squareTargetK2, collectme),
   DropTarget(ItemTypes.KNIGHT, squareTargetK, collectme)
   


)(BoardSquare));


 }

 var BS1 = DropTarget(ItemTypes.KNIGHT, squareTargetK, collectme)(BoardSquare)
 
 var BS2 = DropTarget(k2, squareTargetK2, collectme)(BoardSquare)

 var BishopBoard1 = DropTarget(b1, squareTargetB1, collectme)(BoardSquare)

var BishopBoard2 = DropTarget(b2, squareTargetB2, collectme)(BoardSquare)
    
var PB1 =  DropTarget(p1, squareTargetP1, collectme)(BoardSquare)
var PB2 =  DropTarget(p2, squareTargetP2, collectme)(BoardSquare)
var PB3 =  DropTarget(p3, squareTargetP3, collectme)(BoardSquare)
var PB4 =  DropTarget(p4, squareTargetP4, collectme)(BoardSquare)
var PB5 =  DropTarget(p5, squareTargetP5, collectme)(BoardSquare)
var PB6 =  DropTarget(p6, squareTargetP6, collectme)(BoardSquare)
var PB7 =  DropTarget(p7, squareTargetP7, collectme)(BoardSquare)
var PB8 =  DropTarget(p8, squareTargetP8, collectme)(BoardSquare)
var CB1 =  DropTarget(c1, squareTargetC1, collectme)(BoardSquare)
var CB2 =  DropTarget(c2, squareTargetC2, collectme)(BoardSquare)
var QB =  DropTarget(q, squareTargetQ, collectme)(BoardSquare)
var KB =  DropTarget(king, squareTargetKING, collectme)(BoardSquare)





var Board = React.createClass({
  propTypes: {
    knightPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired
  },

  

componentDidMount() {

setInterval(this.checkposec1,100)
setInterval(this.checkposek1,100)
setInterval(this.checkposep3,100)


},

checkposep3(){

try { var ep3t = ($("#ep3").offset().top - 97) % 62.5 == 0
var ep3l = ( $("#ep3").offset().left- ep3offsetxa) % 62.5 == 0
    
if(ep3offsetx != $("#ep3").offset().left && ep3t === true && ep3l === true ||
ep3offsety != $("#ep3").offset().top && ep3t === true && ep3l === true){


whosemove = "black"
emitChange()

    }

  else {

whosemove = "white"

  }

}




catch(e){

Ep3kill++;

}








},



checkposek1() {


try { 

var ek1t = ($("#ek1").offset().top - 97) % 62.5 == 0
var ek1l = ( $("#ek1").offset().left- 433) % 62.5 == 0
    
if(ek1offsetx != $("#ek1").offset().left && ek1t === true && ek1l === true ||
ek1offsety != $("#ek1").offset().top && ek1t === true && ek1l === true) {

whosemove = "black"
emitChange()
}

else {

whosemove = "white"

}
  
}

catch(e){

Ek1kill++;
whosemove = "white"

}


},


checkposec1() {

try { 



var t = ($("#ec1").offset().top - 97) % 62.5 == 0
var l = ( $("#ec1").offset().left- 433) % 62.5 == 0

if(ec1offsetx != $("#ec1").offset().left && t === true && l === true ||
ec1offsety != $("#ec1").offset().top && t === true && l === true ){

  whosemove = "black"
  emitChange()
  

}

else {

  whosemove = "white"
}

}

catch(e){

Ep3kill++;
whosemove = "white"

}


},



renderSquare: function (i,BS) {
  var x = i % 8;
  var y = Math.floor(i / 8);
  var kn = this.renderPiece(x,y)
  knOlArray = [[knightX,knightY],[knight2X,knight2Y]]
  pawnArrayy = [[pawn1X,pawn1Y],[pawn2X,pawn2Y],[pawn3X,pawn3Y],[pawn4X,pawn4Y],[pawn5X,pawn5Y],
                  [pawn6X,pawn6Y],[pawn7X,pawn7Y],[pawn8X,pawn8Y]]

  bArray = [[bishopX,bishopY],[bishop2X,bishop2Y]]

  cArray = [[castle1X,castle1Y],[castle2X,castle2Y]]

 // console.log(kn)
  
  // var black = (x + y) % 2 === 1;

  var whiteone = whitemove[count_number]
  var ydiff;
  var xdiff; 
    if(whiteone.length < 3){
      console.log("JJJJJJJJSJFDSJFSDFSDFSDFSD")
    
         if(/a/.test(whiteone) == true){
    xOverlay = 0
     xdiff = xOverlay
    var pawnx_filter = pawnArrayy.filter(c => c[0] == 0)

      

       if(/1/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 7 )
    ydiff = 7


      }





     else if(/2/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 6 )
    ydiff = 6


      }



      else if(/3/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c =>  c[1] == 6 )
    ydiff = 5


      }


  
     else  if(/4/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 5 || c[1] == 6 )
    ydiff = 4


      }



    else if(/5/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 4 )
    ydiff = 3


      }




   else if(/6/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 3 )
    ydiff = 2


      }


  else if(/7/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 2 )
    ydiff = 1


      }


 else if(/8/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 1 )
    ydiff = 0


      }
 






 var pawn_piece = pawny_filter[0]
    

   if(pawn_piece[0] == pawn1X && pawn_piece[1] == pawn1Y){

    drag_piece = "PB1"

  var xdis = xdiff - pawn1X
   var ydis = ydiff - pawn1Y

     canMovePawn1 = function (toX, toY) {
  const x = pawnPosition1[0];
  const y = pawnPosition1[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}












   }


  else if(pawn_piece[0] == pawn2X && pawn_piece[1] == pawn2Y){

    drag_piece = "PB2"

   var xdis = xdiff - pawn2X
   var ydis = ydiff - pawn2Y

     canMovePawn2 = function (toX, toY) {
  const x = pawnPosition2[0];
  const y = pawnPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}






   }

 else if(pawn_piece[0] == pawn3X && pawn_piece[1] == pawn3Y){

    drag_piece = "PB3"

   var xdis = xdiff - pawn3X
   var ydis = ydiff - pawn3Y

     canMovePawn3 = function (toX, toY) {
  const x = pawnPosition3[0];
  const y = pawnPosition3[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}



   }

 else if(pawn_piece[0] == pawn4X && pawn_piece[1] == pawn4Y){

  var xdis = xdiff - pawn4X
   var ydis = ydiff - pawn4Y

     canMovePawn4 = function (toX, toY) {
  const x = pawnPosition4[0];
  const y = pawnPosition4[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}






    drag_piece = "PB4"

   }

 else if(pawn_piece[0] == pawn5X && pawn_piece[1] == pawn5Y){

    
    var xdis = xdiff - pawn5X
   var ydis = ydiff - pawn5Y

     canMovePawn5 = function (toX, toY) {
  const x = pawnPosition5[0];
  const y = pawnPosition5[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}











    drag_piece = "PB5"

   }

  else if(pawn_piece[0] == pawn6X && pawn_piece[1] == pawn6Y){

   
   var xdis = xdiff - pawn6X
   var ydis = ydiff - pawn6Y

     canMovePawn6 = function (toX, toY) {
  const x = pawnPosition6[0];
  const y = pawnPosition6[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}








    drag_piece = "PB6"

   }

    
else if(pawn_piece[0] == pawn7X && pawn_piece[1] == pawn7Y){

   
    var xdis = xdiff - pawn7X
   var ydis = ydiff - pawn7Y

     canMovePawn7 = function (toX, toY) {
  const x = pawnPosition7[0];
  const y = pawnPosition7[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}







    drag_piece = "PB7"

   }
    
else if(pawn_piece[0] == pawn8X && pawn_piece[1] == pawn8Y){

    var xdis = xdiff - pawn8X
   var ydis = ydiff - pawn8Y

     canMovePawn8 = function (toX, toY) {
  const x = pawnPosition8[0];
  const y = pawnPosition8[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}






    drag_piece = "PB8"

   }
else {

  drag_piece = "PB5"
}



    



    yOverlay = pawn_piece[1]
    console.log("MMMMMMMMM")
    console.log(drag_piece)
    console.log(yOverlay)
    console.log(xOverlay)
    console.log(overlayCount)
    // count_number++;

    
    
    
  




  }

 else if(/b/.test(whiteone) == true){
    xOverlay = 1
     xdiff = xOverlay
    var pawnx_filter = pawnArrayy.filter(c => c[0] == 1)

      

       if(/1/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 7 )
    ydiff = 7


      }





     else if(/2/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 6 )
    ydiff = 6


      }



      else if(/3/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c =>  c[1] == 6 )
    ydiff = 5


      }


  
     else  if(/4/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 5 || c[1] == 6 )
    ydiff = 4


      }



    else if(/5/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 4 )
    ydiff = 3


      }




   else if(/6/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 3 )
    ydiff = 2


      }


  else if(/7/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 2 )
    ydiff = 1


      }


 else if(/8/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 1 )
    ydiff = 0


      }
 






 var pawn_piece = pawny_filter[0]
    

   if(pawn_piece[0] == pawn1X && pawn_piece[1] == pawn1Y){

    drag_piece = "PB1"

  var xdis = xdiff - pawn1X
   var ydis = ydiff - pawn1Y

     canMovePawn1 = function (toX, toY) {
  const x = pawnPosition1[0];
  const y = pawnPosition1[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}












   }


  else if(pawn_piece[0] == pawn2X && pawn_piece[1] == pawn2Y){

    drag_piece = "PB2"

   var xdis = xdiff - pawn2X
   var ydis = ydiff - pawn2Y

     canMovePawn2 = function (toX, toY) {
  const x = pawnPosition2[0];
  const y = pawnPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}






   }

 else if(pawn_piece[0] == pawn3X && pawn_piece[1] == pawn3Y){

    drag_piece = "PB3"

   var xdis = xdiff - pawn3X
   var ydis = ydiff - pawn3Y

     canMovePawn3 = function (toX, toY) {
  const x = pawnPosition3[0];
  const y = pawnPosition3[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}



   }

 else if(pawn_piece[0] == pawn4X && pawn_piece[1] == pawn4Y){

  var xdis = xdiff - pawn4X
   var ydis = ydiff - pawn4Y

     canMovePawn4 = function (toX, toY) {
  const x = pawnPosition4[0];
  const y = pawnPosition4[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}






    drag_piece = "PB4"

   }

 else if(pawn_piece[0] == pawn5X && pawn_piece[1] == pawn5Y){

    
    var xdis = xdiff - pawn5X
   var ydis = ydiff - pawn5Y

     canMovePawn5 = function (toX, toY) {
  const x = pawnPosition5[0];
  const y = pawnPosition5[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}











    drag_piece = "PB5"

   }

  else if(pawn_piece[0] == pawn6X && pawn_piece[1] == pawn6Y){

   
   var xdis = xdiff - pawn6X
   var ydis = ydiff - pawn6Y

     canMovePawn6 = function (toX, toY) {
  const x = pawnPosition6[0];
  const y = pawnPosition6[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}








    drag_piece = "PB6"

   }

    
else if(pawn_piece[0] == pawn7X && pawn_piece[1] == pawn7Y){

   
    var xdis = xdiff - pawn7X
   var ydis = ydiff - pawn7Y

     canMovePawn7 = function (toX, toY) {
  const x = pawnPosition7[0];
  const y = pawnPosition7[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}







    drag_piece = "PB7"

   }
    
else if(pawn_piece[0] == pawn8X && pawn_piece[1] == pawn8Y){

    var xdis = xdiff - pawn8X
   var ydis = ydiff - pawn8Y

     canMovePawn8 = function (toX, toY) {
  const x = pawnPosition8[0];
  const y = pawnPosition8[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}






    drag_piece = "PB8"

   }
else {

  drag_piece = "PB5"
}



    



    yOverlay = pawn_piece[1]
    console.log("MMMMMMMMM")
    console.log(drag_piece)
    console.log(yOverlay)
    console.log(xOverlay)
    console.log(overlayCount)
    // count_number++;

    
    
    
  




  }


         


















        












































































         else if(/c/.test(whiteone) == true){
    xOverlay = 2
    var xdiff = xOverlay
    var pawnx_filter = pawnArrayy.filter(c => c[0] == 2)

      

       if(/1/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 7 )
    ydiff = 7


      }





     else if(/2/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 6 )
    ydiff = 6


      }



      else if(/3/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c =>  c[1] == 6 )
    ydiff = 5


      }


  
     else  if(/4/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 5 || c[1] == 6 )
    ydiff = 4


      }



    else if(/5/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 4 )
    ydiff = 3


      }




   else if(/6/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 3 )
    ydiff = 2


      }


  else if(/7/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 2 )
    ydiff = 1


      }


 else if(/8/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 1 )
    ydiff = 0


      }
 






 var pawn_piece = pawny_filter[0]
    

   if(pawn_piece[0] == pawn1X && pawn_piece[1] == pawn1Y){

    drag_piece = "PB1"

  var xdis = 2 - pawn1X
   var ydis = ydiff - pawn1Y

     canMovePawn1 = function (toX, toY) {
  const x = pawnPosition1[0];
  const y = pawnPosition1[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}












   }


  else if(pawn_piece[0] == pawn2X && pawn_piece[1] == pawn2Y){

    drag_piece = "PB2"

   var xdis = xdiff - pawn2X
   var ydis = ydiff - pawn2Y

     canMovePawn2 = function (toX, toY) {
  const x = pawnPosition2[0];
  const y = pawnPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}






   }

 else if(pawn_piece[0] == pawn3X && pawn_piece[1] == pawn3Y){

    drag_piece = "PB3"

   var xdis = xdiff - pawn3X
   var ydis = ydiff - pawn3Y

     canMovePawn3 = function (toX, toY) {
  const x = pawnPosition3[0];
  const y = pawnPosition3[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}



   }

 else if(pawn_piece[0] == pawn4X && pawn_piece[1] == pawn4Y){

  var xdis = xdiff - pawn4X
   var ydis = ydiff - pawn4Y

     canMovePawn4 = function (toX, toY) {
  const x = pawnPosition4[0];
  const y = pawnPosition4[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}






    drag_piece = "PB4"

   }

 else if(pawn_piece[0] == pawn5X && pawn_piece[1] == pawn5Y){

    
    var xdis = xdiff - pawn5X
   var ydis = ydiff - pawn5Y

     canMovePawn5 = function (toX, toY) {
  const x = pawnPosition5[0];
  const y = pawnPosition5[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}











    drag_piece = "PB5"

   }

  else if(pawn_piece[0] == pawn6X && pawn_piece[1] == pawn6Y){

   
   var xdis = xdiff - pawn6X
   var ydis = ydiff - pawn6Y

     canMovePawn6 = function (toX, toY) {
  const x = pawnPosition6[0];
  const y = pawnPosition6[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}








    drag_piece = "PB6"

   }

    
else if(pawn_piece[0] == pawn7X && pawn_piece[1] == pawn7Y){

   
    var xdis = xdiff - pawn7X
   var ydis = ydiff - pawn7Y

     canMovePawn7 = function (toX, toY) {
  const x = pawnPosition7[0];
  const y = pawnPosition7[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}







    drag_piece = "PB7"

   }
    
else if(pawn_piece[0] == pawn8X && pawn_piece[1] == pawn8Y){

    var xdis = xdiff - pawn8X
   var ydis = ydiff - pawn8Y

     canMovePawn8 = function (toX, toY) {
  const x = pawnPosition8[0];
  const y = pawnPosition8[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}






    drag_piece = "PB8"

   }
else {

  drag_piece = "PB5"
}



    



    yOverlay = pawn_piece[1]
    console.log("MMMMMMMMM")
    console.log(drag_piece)
    console.log(yOverlay)
    console.log(xOverlay)
    console.log(overlayCount)
    // count_number++;

    
    
    
  




  }



else if(/d/.test(whiteone) == true){
    xOverlay = 3
     xdiff = xOverlay
    console.log("HHHEEEEERRRyyyRREEE")
    console.log(pawn4X)
    console.log(pawn4Y)
    var pawnx_filter = pawnArrayy.filter(c => c[0] == 3)

      

       if(/1/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 7 )
    ydiff = 7


      }





     else if(/2/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 6 )
    ydiff = 6


      }



      else if(/3/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c =>  c[1] == 6 )
    ydiff = 5


      }


  
     else  if(/4/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 5 || c[1] == 6 )
    ydiff = 4


      }



    else if(/5/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 4 )
    ydiff = 3


      }




   else if(/6/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 3 )
    ydiff = 2


      }


  else if(/7/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 2 )
    ydiff = 1


      }


 else if(/8/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 1 )
    ydiff = 0


      }
 






 var pawn_piece = pawny_filter[0]
   console.log("NO HERE")
   console.log(pawnx_filter) 

   if(pawn_piece[0] == pawn1X && pawn_piece[1] == pawn1Y){

    drag_piece = "PB1"

  var xdis = xdiff - pawn1X
   var ydis = ydiff - pawn1Y

     canMovePawn1 = function (toX, toY) {
  const x = pawnPosition1[0];
  const y = pawnPosition1[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}












   }


  else if(pawn_piece[0] == pawn2X && pawn_piece[1] == pawn2Y){

    drag_piece = "PB2"

   var xdis = xdiff - pawn2X
   var ydis = ydiff - pawn2Y

     canMovePawn2 = function (toX, toY) {
  const x = pawnPosition2[0];
  const y = pawnPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}






   }

 else if(pawn_piece[0] == pawn3X && pawn_piece[1] == pawn3Y){

    drag_piece = "PB3"

   var xdis = xdiff - pawn3X
   var ydis = ydiff - pawn3Y

     canMovePawn3 = function (toX, toY) {
  const x = pawnPosition3[0];
  const y = pawnPosition3[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}



   }

 else if(pawn_piece[0] == pawn4X && pawn_piece[1] == pawn4Y){

  var xdis = xdiff - pawn4X
   var ydis = ydiff - pawn4Y

     canMovePawn4 = function (toX, toY) {
  const x = pawnPosition4[0];
  const y = pawnPosition4[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}






    drag_piece = "PB4"

   }

 else if(pawn_piece[0] == pawn5X && pawn_piece[1] == pawn5Y){

    
    var xdis = xdiff - pawn5X
   var ydis = ydiff - pawn5Y

     canMovePawn5 = function (toX, toY) {
  const x = pawnPosition5[0];
  const y = pawnPosition5[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}











    drag_piece = "PB5"

   }

  else if(pawn_piece[0] == pawn6X && pawn_piece[1] == pawn6Y){

   
   var xdis = xdiff - pawn6X
   var ydis = ydiff - pawn6Y

     canMovePawn6 = function (toX, toY) {
  const x = pawnPosition6[0];
  const y = pawnPosition6[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}








    drag_piece = "PB6"

   }

    
else if(pawn_piece[0] == pawn7X && pawn_piece[1] == pawn7Y){

   
    var xdis = xdiff - pawn7X
   var ydis = ydiff - pawn7Y

     canMovePawn7 = function (toX, toY) {
  const x = pawnPosition7[0];
  const y = pawnPosition7[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}







    drag_piece = "PB7"

   }
    
else if(pawn_piece[0] == pawn8X && pawn_piece[1] == pawn8Y){

    var xdis = xdiff - pawn8X
   var ydis = ydiff - pawn8Y

     canMovePawn8 = function (toX, toY) {
  const x = pawnPosition8[0];
  const y = pawnPosition8[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}






    drag_piece = "PB8"

   }
else {

  drag_piece = "PB5"
}



    



    yOverlay = pawn_piece[1]
    console.log("MMMMMMMMM")
    console.log(drag_piece)
    console.log(yOverlay)
    console.log(xOverlay)
    console.log(overlayCount)
    // count_number++;

    
    
    
  




  }



else if(/e/.test(whiteone) == true){
    xOverlay = 4
     xdiff = xOverlay
    console.log("HHHEEEEERRRRREEE")
    console.log(pawn4X)
    console.log(pawn4Y)
    var pawnx_filter = pawnArrayy.filter(c => c[0] == 4)

      

       if(/1/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 7 )
    ydiff = 7


      }





     else if(/2/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 6 )
    ydiff = 6


      }



      else if(/3/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c =>  c[1] == 6 )
    ydiff = 5


      }


  
     else  if(/4/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 5 || c[1] == 6 )
    ydiff = 4


      }



    else if(/5/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 4 )
    ydiff = 3


      }




   else if(/6/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 3 )
    ydiff = 2


      }


  else if(/7/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 2 )
    ydiff = 1


      }


 else if(/8/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 1 )
    ydiff = 0


      }
 






 var pawn_piece = pawny_filter[0]
   console.log("NO HERE")
   console.log(pawnx_filter) 

   if(pawn_piece[0] == pawn1X && pawn_piece[1] == pawn1Y){

    drag_piece = "PB1"

  var xdis = xdiff - pawn1X
   var ydis = ydiff - pawn1Y

     canMovePawn1 = function (toX, toY) {
  const x = pawnPosition1[0];
  const y = pawnPosition1[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}












   }


  else if(pawn_piece[0] == pawn2X && pawn_piece[1] == pawn2Y){

    drag_piece = "PB2"

   var xdis = xdiff - pawn2X
   var ydis = ydiff - pawn2Y

     canMovePawn2 = function (toX, toY) {
  const x = pawnPosition2[0];
  const y = pawnPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}






   }

 else if(pawn_piece[0] == pawn3X && pawn_piece[1] == pawn3Y){

    drag_piece = "PB3"

   var xdis = xdiff - pawn3X
   var ydis = ydiff - pawn3Y

     canMovePawn3 = function (toX, toY) {
  const x = pawnPosition3[0];
  const y = pawnPosition3[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}



   }

 else if(pawn_piece[0] == pawn4X && pawn_piece[1] == pawn4Y){

  var xdis = xdiff - pawn4X
   var ydis = ydiff - pawn4Y

     canMovePawn4 = function (toX, toY) {
  const x = pawnPosition4[0];
  const y = pawnPosition4[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}






    drag_piece = "PB4"

   }

 else if(pawn_piece[0] == pawn5X && pawn_piece[1] == pawn5Y){

    
    var xdis = xdiff - pawn5X
   var ydis = ydiff - pawn5Y

     canMovePawn5 = function (toX, toY) {
  const x = pawnPosition5[0];
  const y = pawnPosition5[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}











    drag_piece = "PB5"

   }

  else if(pawn_piece[0] == pawn6X && pawn_piece[1] == pawn6Y){

   
   var xdis = xdiff - pawn6X
   var ydis = ydiff - pawn6Y

     canMovePawn6 = function (toX, toY) {
  const x = pawnPosition6[0];
  const y = pawnPosition6[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}








    drag_piece = "PB6"

   }

    
else if(pawn_piece[0] == pawn7X && pawn_piece[1] == pawn7Y){

   
    var xdis = xdiff - pawn7X
   var ydis = ydiff - pawn7Y

     canMovePawn7 = function (toX, toY) {
  const x = pawnPosition7[0];
  const y = pawnPosition7[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}







    drag_piece = "PB7"

   }
    
else if(pawn_piece[0] == pawn8X && pawn_piece[1] == pawn8Y){

    var xdis = xdiff - pawn8X
   var ydis = ydiff - pawn8Y

     canMovePawn8 = function (toX, toY) {
  const x = pawnPosition8[0];
  const y = pawnPosition8[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}






    drag_piece = "PB8"

   }
else {

  drag_piece = "PB5"
}



    



    yOverlay = pawn_piece[1]
    console.log("MMMMMMMMM")
    console.log(drag_piece)
    console.log(yOverlay)
    console.log(xOverlay)
    console.log(overlayCount)
    // count_number++;

    
    
    
  




  }


    


  else if(/f/.test(whiteone) == true){
    xOverlay = 5
     xdiff = xOverlay
    console.log("YYYYYY")
    console.log(pawn4X)
    console.log(pawn4Y)
    var pawnx_filter = pawnArrayy.filter(c => c[0] == 5)
    console.log(pawnx_filter)
      

       if(/1/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 7 )
    ydiff = 7


      }





     else if(/2/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 6 )
    ydiff = 6


      }



      else if(/3/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c =>  c[1] == 6 )
    ydiff = 5


      }


  
     else  if(/4/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 5 || c[1] == 6 )
    ydiff = 4


      }



    else if(/5/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 4 )
    ydiff = 3


      }




   else if(/6/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 3 )
    ydiff = 2


      }


  else if(/7/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 2 )
    ydiff = 1


      }


 else if(/8/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 1 )
    ydiff = 0


      }
 






 var pawn_piece = pawny_filter[0]
   console.log("NO HERE")
   console.log(pawnx_filter) 

   if(pawn_piece[0] == pawn1X && pawn_piece[1] == pawn1Y){

    drag_piece = "PB1"

  var xdis = xdiff - pawn1X
   var ydis = ydiff - pawn1Y

     canMovePawn1 = function (toX, toY) {
  const x = pawnPosition1[0];
  const y = pawnPosition1[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}












   }


  else if(pawn_piece[0] == pawn2X && pawn_piece[1] == pawn2Y){

    drag_piece = "PB2"

   var xdis = xdiff - pawn2X
   var ydis = ydiff - pawn2Y

     canMovePawn2 = function (toX, toY) {
  const x = pawnPosition2[0];
  const y = pawnPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}






   }

 else if(pawn_piece[0] == pawn3X && pawn_piece[1] == pawn3Y){

    drag_piece = "PB3"

   var xdis = xdiff - pawn3X
   var ydis = ydiff - pawn3Y

     canMovePawn3 = function (toX, toY) {
  const x = pawnPosition3[0];
  const y = pawnPosition3[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}



   }

 else if(pawn_piece[0] == pawn4X && pawn_piece[1] == pawn4Y){

  var xdis = xdiff - pawn4X
   var ydis = ydiff - pawn4Y

     canMovePawn4 = function (toX, toY) {
  const x = pawnPosition4[0];
  const y = pawnPosition4[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}






    drag_piece = "PB4"

   }

 else if(pawn_piece[0] == pawn5X && pawn_piece[1] == pawn5Y){

    
    var xdis = xdiff - pawn5X
   var ydis = ydiff - pawn5Y

     canMovePawn5 = function (toX, toY) {
  const x = pawnPosition5[0];
  const y = pawnPosition5[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}











    drag_piece = "PB5"

   }

  else if(pawn_piece[0] == pawn6X && pawn_piece[1] == pawn6Y){

   
   var xdis = xdiff - pawn6X
   var ydis = ydiff - pawn6Y

     canMovePawn6 = function (toX, toY) {
  const x = pawnPosition6[0];
  const y = pawnPosition6[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}








    drag_piece = "PB6"

   }

    
else if(pawn_piece[0] == pawn7X && pawn_piece[1] == pawn7Y){

   
    var xdis = xdiff - pawn7X
   var ydis = ydiff - pawn7Y

     canMovePawn7 = function (toX, toY) {
  const x = pawnPosition7[0];
  const y = pawnPosition7[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}







    drag_piece = "PB7"

   }
    
else if(pawn_piece[0] == pawn8X && pawn_piece[1] == pawn8Y){

    var xdis = xdiff - pawn8X
   var ydis = ydiff - pawn8Y

     canMovePawn8 = function (toX, toY) {
  const x = pawnPosition8[0];
  const y = pawnPosition8[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}






    drag_piece = "PB8"

   }
else {

  drag_piece = "PB5"
}



    



    yOverlay = pawn_piece[1]
    console.log("MMMMMMMMM")
    console.log(drag_piece)
    console.log(yOverlay)
    console.log(xOverlay)
    console.log(overlayCount)
    // count_number++;

    
    
    
  




  }




else if(/g/.test(whiteone) == true){
    xOverlay = 6
     xdiff = xOverlay
    console.log("HHHEEEEERRRRREEE")
    console.log(pawn4X)
    console.log(pawn4Y)
    var pawnx_filter = pawnArrayy.filter(c => c[0] == 6)

      

       if(/1/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 7 )
    ydiff = 7


      }





     else if(/2/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 6 )
    ydiff = 6


      }



      else if(/3/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c =>  c[1] == 6 )
    ydiff = 5


      }


  
     else  if(/4/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 5 || c[1] == 6 )
    ydiff = 4


      }



    else if(/5/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 4 )
    ydiff = 3


      }




   else if(/6/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 3 )
    ydiff = 2


      }


  else if(/7/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 2 )
    ydiff = 1


      }


 else if(/8/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 1 )
    ydiff = 0


      }
 






 var pawn_piece = pawny_filter[0]
   console.log("NO HERE")
   console.log(pawnx_filter) 

   if(pawn_piece[0] == pawn1X && pawn_piece[1] == pawn1Y){

    drag_piece = "PB1"

  var xdis = xdiff - pawn1X
   var ydis = ydiff - pawn1Y

     canMovePawn1 = function (toX, toY) {
  const x = pawnPosition1[0];
  const y = pawnPosition1[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}












   }


  else if(pawn_piece[0] == pawn2X && pawn_piece[1] == pawn2Y){

    drag_piece = "PB2"

   var xdis = xdiff - pawn2X
   var ydis = ydiff - pawn2Y

     canMovePawn2 = function (toX, toY) {
  const x = pawnPosition2[0];
  const y = pawnPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}






   }

 else if(pawn_piece[0] == pawn3X && pawn_piece[1] == pawn3Y){

    drag_piece = "PB3"

   var xdis = xdiff - pawn3X
   var ydis = ydiff - pawn3Y

     canMovePawn3 = function (toX, toY) {
  const x = pawnPosition3[0];
  const y = pawnPosition3[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}



   }

 else if(pawn_piece[0] == pawn4X && pawn_piece[1] == pawn4Y){

  var xdis = xdiff - pawn4X
   var ydis = ydiff - pawn4Y

     canMovePawn4 = function (toX, toY) {
  const x = pawnPosition4[0];
  const y = pawnPosition4[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}






    drag_piece = "PB4"

   }

 else if(pawn_piece[0] == pawn5X && pawn_piece[1] == pawn5Y){

    
    var xdis = xdiff - pawn5X
   var ydis = ydiff - pawn5Y

     canMovePawn5 = function (toX, toY) {
  const x = pawnPosition5[0];
  const y = pawnPosition5[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}











    drag_piece = "PB5"

   }

  else if(pawn_piece[0] == pawn6X && pawn_piece[1] == pawn6Y){

   
   var xdis = xdiff - pawn6X
   var ydis = ydiff - pawn6Y

     canMovePawn6 = function (toX, toY) {
  const x = pawnPosition6[0];
  const y = pawnPosition6[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}








    drag_piece = "PB6"

   }

    
else if(pawn_piece[0] == pawn7X && pawn_piece[1] == pawn7Y){

   
    var xdis = xdiff - pawn7X
   var ydis = ydiff - pawn7Y

     canMovePawn7 = function (toX, toY) {
  const x = pawnPosition7[0];
  const y = pawnPosition7[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}







    drag_piece = "PB7"

   }
    
else if(pawn_piece[0] == pawn8X && pawn_piece[1] == pawn8Y){

    var xdis = xdiff - pawn8X
   var ydis = ydiff - pawn8Y

     canMovePawn8 = function (toX, toY) {
  const x = pawnPosition8[0];
  const y = pawnPosition8[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}






    drag_piece = "PB8"

   }
else {

  drag_piece = "PB5"
}



    



    yOverlay = pawn_piece[1]
    console.log("MMMMMMMMM")
    console.log(drag_piece)
    console.log(yOverlay)
    console.log(xOverlay)
    console.log(overlayCount)
    // count_number++;

    
    
    
  




  }





else if(/h/.test(whiteone) == true){
    xOverlay = 7
     xdiff = xOverlay
    console.log("HHHEEEEERRRRREEE")
    console.log(pawn4X)
    console.log(pawn4Y)
    var pawnx_filter = pawnArrayy.filter(c => c[0] == 7)

      

       if(/1/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 7 )
    ydiff = 7


      }





     else if(/2/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 6 )
    ydiff = 6


      }



      else if(/3/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c =>  c[1] == 6 )
    ydiff = 5


      }


  
     else  if(/4/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 5 || c[1] == 6 )
    ydiff = 4


      }



    else if(/5/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 4 )
    ydiff = 3


      }




   else if(/6/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 3 )
    ydiff = 2


      }


  else if(/7/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 2 )
    ydiff = 1


      }


 else if(/8/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 1 )
    ydiff = 0


      }
 






 var pawn_piece = pawny_filter[0]
   console.log("NO HERE")
   console.log(pawnx_filter) 

   if(pawn_piece[0] == pawn1X && pawn_piece[1] == pawn1Y){

    drag_piece = "PB1"

  var xdis = xdiff - pawn1X
   var ydis = ydiff - pawn1Y

     canMovePawn1 = function (toX, toY) {
  const x = pawnPosition1[0];
  const y = pawnPosition1[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}












   }


  else if(pawn_piece[0] == pawn2X && pawn_piece[1] == pawn2Y){

    drag_piece = "PB2"

   var xdis = xdiff - pawn2X
   var ydis = ydiff - pawn2Y

     canMovePawn2 = function (toX, toY) {
  const x = pawnPosition2[0];
  const y = pawnPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}






   }

 else if(pawn_piece[0] == pawn3X && pawn_piece[1] == pawn3Y){

    drag_piece = "PB3"

   var xdis = xdiff - pawn3X
   var ydis = ydiff - pawn3Y

     canMovePawn3 = function (toX, toY) {
  const x = pawnPosition3[0];
  const y = pawnPosition3[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}



   }

 else if(pawn_piece[0] == pawn4X && pawn_piece[1] == pawn4Y){

  var xdis = xdiff - pawn4X
   var ydis = ydiff - pawn4Y

     canMovePawn4 = function (toX, toY) {
  const x = pawnPosition4[0];
  const y = pawnPosition4[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}






    drag_piece = "PB4"

   }

 else if(pawn_piece[0] == pawn5X && pawn_piece[1] == pawn5Y){

    
    var xdis = xdiff - pawn5X
   var ydis = ydiff - pawn5Y

     canMovePawn5 = function (toX, toY) {
  const x = pawnPosition5[0];
  const y = pawnPosition5[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}











    drag_piece = "PB5"

   }

  else if(pawn_piece[0] == pawn6X && pawn_piece[1] == pawn6Y){

   
   var xdis = xdiff - pawn6X
   var ydis = ydiff - pawn6Y

     canMovePawn6 = function (toX, toY) {
  const x = pawnPosition6[0];
  const y = pawnPosition6[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}








    drag_piece = "PB6"

   }

    
else if(pawn_piece[0] == pawn7X && pawn_piece[1] == pawn7Y){

   
    var xdis = xdiff - pawn7X
   var ydis = ydiff - pawn7Y

     canMovePawn7 = function (toX, toY) {
  const x = pawnPosition7[0];
  const y = pawnPosition7[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}







    drag_piece = "PB7"

   }
    
else if(pawn_piece[0] == pawn8X && pawn_piece[1] == pawn8Y){

    var xdis = xdiff - pawn8X
   var ydis = ydiff - pawn8Y

     canMovePawn8 = function (toX, toY) {
  const x = pawnPosition8[0];
  const y = pawnPosition8[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis) 
         
}






    drag_piece = "PB8"

   }
else {

  drag_piece = "PB5"
}



    



    yOverlay = pawn_piece[1]
    console.log("MMMMMMMMM")
    console.log(drag_piece)
    console.log(yOverlay)
    console.log(xOverlay)
    console.log(overlayCount)
    // count_number++;

    
    
    
  




  }



}



else if(whiteone.length == 4){



if(/ax/.test(whiteone) == true){
    xOverlay = 0
     xdiff = xOverlay
    var pawnx_filter = pawnArrayy.filter(c => c[0] == 0)

      

       if(/1/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 7 )
    ydiff = 7


      }





     else if(/2/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 6 )
    ydiff = 6


      }



      else if(/3/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c =>  c[1] == 6 )
    ydiff = 5


      }


  
     else  if(/4/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 5 || c[1] == 6 )
    ydiff = 4


      }



    else if(/5/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 4 )
    ydiff = 3


      }




   else if(/6/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 3 )
    ydiff = 2


      }


  else if(/7/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 2 )
    ydiff = 1


      }


 else if(/8/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 1 )
    ydiff = 0


      }
 






 var pawn_piece = pawny_filter[0]
    

   if(pawn_piece[0] == pawn1X && pawn_piece[1] == pawn1Y){

    drag_piece = "PB1"

  var xdis = xdiff - pawn1X
   var ydis = ydiff - pawn1Y

     canMovePawn1 = function (toX, toY) {
  const x = pawnPosition1[0];
  const y = pawnPosition1[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}












   }


  else if(pawn_piece[0] == pawn2X && pawn_piece[1] == pawn2Y){

    drag_piece = "PB2"

   var xdis = xdiff - pawn2X
   var ydis = ydiff - pawn2Y

     canMovePawn2 = function (toX, toY) {
  const x = pawnPosition2[0];
  const y = pawnPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}






   }

 else if(pawn_piece[0] == pawn3X && pawn_piece[1] == pawn3Y){

    drag_piece = "PB3"

   var xdis = xdiff - pawn3X
   var ydis = ydiff - pawn3Y

     canMovePawn3 = function (toX, toY) {
  const x = pawnPosition3[0];
  const y = pawnPosition3[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}



   }

 else if(pawn_piece[0] == pawn4X && pawn_piece[1] == pawn4Y){

  var xdis = xdiff - pawn4X
   var ydis = ydiff - pawn4Y

     canMovePawn4 = function (toX, toY) {
  const x = pawnPosition4[0];
  const y = pawnPosition4[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}






    drag_piece = "PB4"

   }

 else if(pawn_piece[0] == pawn5X && pawn_piece[1] == pawn5Y){

    
    var xdis = xdiff - pawn5X
   var ydis = ydiff - pawn5Y

     canMovePawn5 = function (toX, toY) {
  const x = pawnPosition5[0];
  const y = pawnPosition5[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}











    drag_piece = "PB5"

   }

  else if(pawn_piece[0] == pawn6X && pawn_piece[1] == pawn6Y){

   
   var xdis = xdiff - pawn6X
   var ydis = ydiff - pawn6Y

     canMovePawn6 = function (toX, toY) {
  const x = pawnPosition6[0];
  const y = pawnPosition6[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}








    drag_piece = "PB6"

   }

    
else if(pawn_piece[0] == pawn7X && pawn_piece[1] == pawn7Y){

   
    var xdis = xdiff - pawn7X
   var ydis = ydiff - pawn7Y

     canMovePawn7 = function (toX, toY) {
  const x = pawnPosition7[0];
  const y = pawnPosition7[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}







    drag_piece = "PB7"

   }
    
else if(pawn_piece[0] == pawn8X && pawn_piece[1] == pawn8Y){

    var xdis = xdiff - pawn8X
   var ydis = ydiff - pawn8Y

     canMovePawn8 = function (toX, toY) {
  const x = pawnPosition8[0];
  const y = pawnPosition8[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}






    drag_piece = "PB8"

   }
else {

  drag_piece = "PB5"
}



    



    yOverlay = pawn_piece[1]
    console.log("MMMMMMMMM")
    console.log(drag_piece)
    console.log(yOverlay)
    console.log(xOverlay)
    console.log(overlayCount)
    // count_number++;

    
    
    
  




  }

 else if(/bx/.test(whiteone) == true){
    xOverlay = 1
     xdiff = xOverlay
    var pawnx_filter = pawnArrayy.filter(c => c[0] == 1)

      if(/a/.test(whiteone) == true){

       if(/1/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 7 )
    ydiff = 7


      }





     else if(/2/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 6 )
    ydiff = 6


      }



      else if(/3/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c =>  c[1] == 6 )
    ydiff = 5


      }


  
     else  if(/4/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 5 || c[1] == 6 )
    ydiff = 4


      }



    else if(/5/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 4 )
    ydiff = 3


      }




   else if(/6/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 3 )
    ydiff = 2


      }


  else if(/7/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 2 )
    ydiff = 1


      }


 else if(/8/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 1 )
    ydiff = 0


      }
 






 var pawn_piece = pawny_filter[0]
    

   if(pawn_piece[0] == pawn1X && pawn_piece[1] == pawn1Y){

    drag_piece = "PB1"

  var xdis = xdiff - pawn1X
   var ydis = ydiff - pawn1Y

     canMovePawn1 = function (toX, toY) {
  const x = pawnPosition1[0];
  const y = pawnPosition1[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}












   }


  else if(pawn_piece[0] == pawn2X && pawn_piece[1] == pawn2Y){

    drag_piece = "PB2"

   var xdis = xdiff - pawn2X
   var ydis = ydiff - pawn2Y

     canMovePawn2 = function (toX, toY) {
  const x = pawnPosition2[0];
  const y = pawnPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}






   }

 else if(pawn_piece[0] == pawn3X && pawn_piece[1] == pawn3Y){

    drag_piece = "PB3"

   var xdis = xdiff - pawn3X
   var ydis = ydiff - pawn3Y

     canMovePawn3 = function (toX, toY) {
  const x = pawnPosition3[0];
  const y = pawnPosition3[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}



   }

 else if(pawn_piece[0] == pawn4X && pawn_piece[1] == pawn4Y){

  var xdis = xdiff - pawn4X
   var ydis = ydiff - pawn4Y

     canMovePawn4 = function (toX, toY) {
  const x = pawnPosition4[0];
  const y = pawnPosition4[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}






    drag_piece = "PB4"

   }

 else if(pawn_piece[0] == pawn5X && pawn_piece[1] == pawn5Y){

    
    var xdis = xdiff - pawn5X
   var ydis = ydiff - pawn5Y

     canMovePawn5 = function (toX, toY) {
  const x = pawnPosition5[0];
  const y = pawnPosition5[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}











    drag_piece = "PB5"

   }

  else if(pawn_piece[0] == pawn6X && pawn_piece[1] == pawn6Y){

   
   var xdis = xdiff - pawn6X
   var ydis = ydiff - pawn6Y

     canMovePawn6 = function (toX, toY) {
  const x = pawnPosition6[0];
  const y = pawnPosition6[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}








    drag_piece = "PB6"

   }

    
else if(pawn_piece[0] == pawn7X && pawn_piece[1] == pawn7Y){

   
    var xdis = xdiff - pawn7X
   var ydis = ydiff - pawn7Y

     canMovePawn7 = function (toX, toY) {
  const x = pawnPosition7[0];
  const y = pawnPosition7[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}







    drag_piece = "PB7"

   }
    
else if(pawn_piece[0] == pawn8X && pawn_piece[1] == pawn8Y){

    var xdis = xdiff - pawn8X
   var ydis = ydiff - pawn8Y

     canMovePawn8 = function (toX, toY) {
  const x = pawnPosition8[0];
  const y = pawnPosition8[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}






    drag_piece = "PB8"

   }
else {

  drag_piece = "PB5"
}

}

else if(/c/.test(whiteone) == true){


       if(/1/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 7 )
    ydiff = 7


      }





     else if(/2/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 6 )
    ydiff = 6


      }



      else if(/3/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c =>  c[1] == 6 )
    ydiff = 5


      }


  
     else  if(/4/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 5 || c[1] == 6 )
    ydiff = 4


      }



    else if(/5/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 4 )
    ydiff = 3


      }




   else if(/6/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 3 )
    ydiff = 2


      }


  else if(/7/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 2 )
    ydiff = 1


      }


 else if(/8/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 1 )
    ydiff = 0


      }
 






 var pawn_piece = pawny_filter[0]
    

   if(pawn_piece[0] == pawn1X && pawn_piece[1] == pawn1Y){

    drag_piece = "PB1"

  var xdis = xdiff - pawn1X
   var ydis = ydiff - pawn1Y

     canMovePawn1 = function (toX, toY) {
  const x = pawnPosition1[0];
  const y = pawnPosition1[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}












   }


  else if(pawn_piece[0] == pawn2X && pawn_piece[1] == pawn2Y){

    drag_piece = "PB2"

   var xdis = xdiff - pawn2X
   var ydis = ydiff - pawn2Y

     canMovePawn2 = function (toX, toY) {
  const x = pawnPosition2[0];
  const y = pawnPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}






   }

 else if(pawn_piece[0] == pawn3X && pawn_piece[1] == pawn3Y){

    drag_piece = "PB3"

   var xdis = xdiff - pawn3X
   var ydis = ydiff - pawn3Y

     canMovePawn3 = function (toX, toY) {
  const x = pawnPosition3[0];
  const y = pawnPosition3[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}



   }

 else if(pawn_piece[0] == pawn4X && pawn_piece[1] == pawn4Y){

  var xdis = xdiff - pawn4X
   var ydis = ydiff - pawn4Y

     canMovePawn4 = function (toX, toY) {
  const x = pawnPosition4[0];
  const y = pawnPosition4[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}






    drag_piece = "PB4"

   }

 else if(pawn_piece[0] == pawn5X && pawn_piece[1] == pawn5Y){

    
    var xdis = xdiff - pawn5X
   var ydis = ydiff - pawn5Y

     canMovePawn5 = function (toX, toY) {
  const x = pawnPosition5[0];
  const y = pawnPosition5[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}











    drag_piece = "PB5"

   }

  else if(pawn_piece[0] == pawn6X && pawn_piece[1] == pawn6Y){

   
   var xdis = xdiff - pawn6X
   var ydis = ydiff - pawn6Y

     canMovePawn6 = function (toX, toY) {
  const x = pawnPosition6[0];
  const y = pawnPosition6[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}








    drag_piece = "PB6"

   }

    
else if(pawn_piece[0] == pawn7X && pawn_piece[1] == pawn7Y){

   
    var xdis = xdiff - pawn7X
   var ydis = ydiff - pawn7Y

     canMovePawn7 = function (toX, toY) {
  const x = pawnPosition7[0];
  const y = pawnPosition7[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}







    drag_piece = "PB7"

   }
    
else if(pawn_piece[0] == pawn8X && pawn_piece[1] == pawn8Y){

    var xdis = xdiff - pawn8X
   var ydis = ydiff - pawn8Y

     canMovePawn8 = function (toX, toY) {
  const x = pawnPosition8[0];
  const y = pawnPosition8[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}






    drag_piece = "PB8"

   }
else {

  drag_piece = "PB5"
}






























}

    



    yOverlay = pawn_piece[1]
    console.log("MMMMMMMMM")
    console.log(drag_piece)
    console.log(yOverlay)
    console.log(xOverlay)
    console.log(overlayCount)
    // count_number++;

    
    
    
  




  }


         








else if(/cx/.test(whiteone) == true){
    xOverlay = 2
    var xdiff = xOverlay
    var pawnx_filter = pawnArrayy.filter(c => c[0] == 2)

      if(/b/.test(whiteone) == true) {

       if(/1/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 7 )
    ydiff = 7


      }





     else if(/2/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 6 )
    ydiff = 6


      }



      else if(/3/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c =>  c[1] == 6 )
    ydiff = 5


      }


  
     else  if(/4/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 5 || c[1] == 6 )
    ydiff = 4


      }



    else if(/5/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 4 )
    ydiff = 3


      }




   else if(/6/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 3 )
    ydiff = 2


      }


  else if(/7/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 2 )
    ydiff = 1


      }


 else if(/8/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 1 )
    ydiff = 0


      }
 






 var pawn_piece = pawny_filter[0]
    

   if(pawn_piece[0] == pawn1X && pawn_piece[1] == pawn1Y){

    drag_piece = "PB1"

  var xdis = 2 - pawn1X
   var ydis = ydiff - pawn1Y

     canMovePawn1 = function (toX, toY) {
  const x = pawnPosition1[0];
  const y = pawnPosition1[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}












   }


  else if(pawn_piece[0] == pawn2X && pawn_piece[1] == pawn2Y){

    drag_piece = "PB2"

   var xdis = xdiff - pawn2X
   var ydis = ydiff - pawn2Y

     canMovePawn2 = function (toX, toY) {
  const x = pawnPosition2[0];
  const y = pawnPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}






   }

 else if(pawn_piece[0] == pawn3X && pawn_piece[1] == pawn3Y){

    drag_piece = "PB3"

   var xdis = xdiff - pawn3X
   var ydis = ydiff - pawn3Y

     canMovePawn3 = function (toX, toY) {
  const x = pawnPosition3[0];
  const y = pawnPosition3[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}



   }

 else if(pawn_piece[0] == pawn4X && pawn_piece[1] == pawn4Y){

  var xdis = xdiff - pawn4X
   var ydis = ydiff - pawn4Y

     canMovePawn4 = function (toX, toY) {
  const x = pawnPosition4[0];
  const y = pawnPosition4[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}






    drag_piece = "PB4"

   }

 else if(pawn_piece[0] == pawn5X && pawn_piece[1] == pawn5Y){

    
    var xdis = xdiff - pawn5X
   var ydis = ydiff - pawn5Y

     canMovePawn5 = function (toX, toY) {
  const x = pawnPosition5[0];
  const y = pawnPosition5[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}











    drag_piece = "PB5"

   }

  else if(pawn_piece[0] == pawn6X && pawn_piece[1] == pawn6Y){

   
   var xdis = xdiff - pawn6X
   var ydis = ydiff - pawn6Y

     canMovePawn6 = function (toX, toY) {
  const x = pawnPosition6[0];
  const y = pawnPosition6[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}








    drag_piece = "PB6"

   }

    
else if(pawn_piece[0] == pawn7X && pawn_piece[1] == pawn7Y){

   
    var xdis = xdiff - pawn7X
   var ydis = ydiff - pawn7Y

     canMovePawn7 = function (toX, toY) {
  const x = pawnPosition7[0];
  const y = pawnPosition7[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}







    drag_piece = "PB7"

   }
    
else if(pawn_piece[0] == pawn8X && pawn_piece[1] == pawn8Y){

    var xdis = xdiff - pawn8X
   var ydis = ydiff - pawn8Y

     canMovePawn8 = function (toX, toY) {
  const x = pawnPosition8[0];
  const y = pawnPosition8[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}






    drag_piece = "PB8"

   }
else {

  drag_piece = "PB5"
}

}

else if(/d/.test(whiteone) == true){

      if(/1/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 7 )
    ydiff = 7


      }





     else if(/2/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 6 )
    ydiff = 6


      }



      else if(/3/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c =>  c[1] == 6 )
    ydiff = 5


      }


  
     else  if(/4/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 5 || c[1] == 6 )
    ydiff = 4


      }



    else if(/5/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 4 )
    ydiff = 3


      }




   else if(/6/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 3 )
    ydiff = 2


      }


  else if(/7/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 2 )
    ydiff = 1


      }


 else if(/8/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 1 )
    ydiff = 0


      }
 






 var pawn_piece = pawny_filter[0]
    

   if(pawn_piece[0] == pawn1X && pawn_piece[1] == pawn1Y){

    drag_piece = "PB1"

  var xdis = 2 - pawn1X
   var ydis = ydiff - pawn1Y

     canMovePawn1 = function (toX, toY) {
  const x = pawnPosition1[0];
  const y = pawnPosition1[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}












   }


  else if(pawn_piece[0] == pawn2X && pawn_piece[1] == pawn2Y){

    drag_piece = "PB2"

   var xdis = xdiff - pawn2X
   var ydis = ydiff - pawn2Y

     canMovePawn2 = function (toX, toY) {
  const x = pawnPosition2[0];
  const y = pawnPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}






   }

 else if(pawn_piece[0] == pawn3X && pawn_piece[1] == pawn3Y){

    drag_piece = "PB3"

   var xdis = xdiff - pawn3X
   var ydis = ydiff - pawn3Y

     canMovePawn3 = function (toX, toY) {
  const x = pawnPosition3[0];
  const y = pawnPosition3[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}



   }

 else if(pawn_piece[0] == pawn4X && pawn_piece[1] == pawn4Y){

  var xdis = xdiff - pawn4X
   var ydis = ydiff - pawn4Y

     canMovePawn4 = function (toX, toY) {
  const x = pawnPosition4[0];
  const y = pawnPosition4[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}






    drag_piece = "PB4"

   }

 else if(pawn_piece[0] == pawn5X && pawn_piece[1] == pawn5Y){

    
    var xdis = xdiff - pawn5X
   var ydis = ydiff - pawn5Y

     canMovePawn5 = function (toX, toY) {
  const x = pawnPosition5[0];
  const y = pawnPosition5[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}











    drag_piece = "PB5"

   }

  else if(pawn_piece[0] == pawn6X && pawn_piece[1] == pawn6Y){

   
   var xdis = xdiff - pawn6X
   var ydis = ydiff - pawn6Y

     canMovePawn6 = function (toX, toY) {
  const x = pawnPosition6[0];
  const y = pawnPosition6[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}








    drag_piece = "PB6"

   }

    
else if(pawn_piece[0] == pawn7X && pawn_piece[1] == pawn7Y){

   
    var xdis = xdiff - pawn7X
   var ydis = ydiff - pawn7Y

     canMovePawn7 = function (toX, toY) {
  const x = pawnPosition7[0];
  const y = pawnPosition7[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}







    drag_piece = "PB7"

   }
    
else if(pawn_piece[0] == pawn8X && pawn_piece[1] == pawn8Y){

    var xdis = xdiff - pawn8X
   var ydis = ydiff - pawn8Y

     canMovePawn8 = function (toX, toY) {
  const x = pawnPosition8[0];
  const y = pawnPosition8[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}






    drag_piece = "PB8"

   }
else {

  drag_piece = "PB5"
}




























}
    



   




















    yOverlay = pawn_piece[1]
    console.log("MMMMMMMMM")
    console.log(drag_piece)
    console.log(yOverlay)
    console.log(xOverlay)
    console.log(overlayCount)
    // count_number++;

    
    
    
  




  }



else if(/dx/.test(whiteone) == true){
    xOverlay = 3
     xdiff = xOverlay
    console.log("HHHEEEEERRRyyyRREEE")
    console.log(pawn4X)
    console.log(pawn4Y)
    var pawnx_filter = pawnArrayy.filter(c => c[0] == 3)

      if(/c/.test(whiteone) == true) {

       if(/1/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 7 )
    ydiff = 7


      }





     else if(/2/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 6 )
    ydiff = 6


      }



      else if(/3/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c =>  c[1] == 6 )
    ydiff = 5


      }


  
     else  if(/4/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 5 || c[1] == 6 )
    ydiff = 4


      }



    else if(/5/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 4 )
    ydiff = 3


      }




   else if(/6/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 3 )
    ydiff = 2


      }


  else if(/7/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 2 )
    ydiff = 1


      }


 else if(/8/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 1 )
    ydiff = 0


      }
 






 var pawn_piece = pawny_filter[0]
   console.log("NO HERE")
   console.log(pawnx_filter) 

   if(pawn_piece[0] == pawn1X && pawn_piece[1] == pawn1Y){

    drag_piece = "PB1"

  var xdis = xdiff - pawn1X
   var ydis = ydiff - pawn1Y

     canMovePawn1 = function (toX, toY) {
  const x = pawnPosition1[0];
  const y = pawnPosition1[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}












   }


  else if(pawn_piece[0] == pawn2X && pawn_piece[1] == pawn2Y){

    drag_piece = "PB2"

   var xdis = xdiff - pawn2X
   var ydis = ydiff - pawn2Y

     canMovePawn2 = function (toX, toY) {
  const x = pawnPosition2[0];
  const y = pawnPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}






   }

 else if(pawn_piece[0] == pawn3X && pawn_piece[1] == pawn3Y){

    drag_piece = "PB3"

   var xdis = xdiff - pawn3X
   var ydis = ydiff - pawn3Y

     canMovePawn3 = function (toX, toY) {
  const x = pawnPosition3[0];
  const y = pawnPosition3[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}



   }

 else if(pawn_piece[0] == pawn4X && pawn_piece[1] == pawn4Y){

  var xdis = xdiff - pawn4X
   var ydis = ydiff - pawn4Y

     canMovePawn4 = function (toX, toY) {
  const x = pawnPosition4[0];
  const y = pawnPosition4[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}






    drag_piece = "PB4"

   }

 else if(pawn_piece[0] == pawn5X && pawn_piece[1] == pawn5Y){

    
    var xdis = xdiff - pawn5X
   var ydis = ydiff - pawn5Y

     canMovePawn5 = function (toX, toY) {
  const x = pawnPosition5[0];
  const y = pawnPosition5[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}











    drag_piece = "PB5"

   }

  else if(pawn_piece[0] == pawn6X && pawn_piece[1] == pawn6Y){

   
   var xdis = xdiff - pawn6X
   var ydis = ydiff - pawn6Y

     canMovePawn6 = function (toX, toY) {
  const x = pawnPosition6[0];
  const y = pawnPosition6[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}








    drag_piece = "PB6"

   }

    
else if(pawn_piece[0] == pawn7X && pawn_piece[1] == pawn7Y){

   
    var xdis = xdiff - pawn7X
   var ydis = ydiff - pawn7Y

     canMovePawn7 = function (toX, toY) {
  const x = pawnPosition7[0];
  const y = pawnPosition7[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}







    drag_piece = "PB7"

   }
    
else if(pawn_piece[0] == pawn8X && pawn_piece[1] == pawn8Y){

    var xdis = xdiff - pawn8X
   var ydis = ydiff - pawn8Y

     canMovePawn8 = function (toX, toY) {
  const x = pawnPosition8[0];
  const y = pawnPosition8[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}






    drag_piece = "PB8"

   }
else {

  drag_piece = "PB5"
}
}


else if(/e/.test(whiteone) == true){


       if(/1/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 7 )
    ydiff = 7


      }





     else if(/2/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 6 )
    ydiff = 6


      }



      else if(/3/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c =>  c[1] == 6 )
    ydiff = 5


      }


  
     else  if(/4/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 5 || c[1] == 6 )
    ydiff = 4


      }



    else if(/5/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 4 )
    ydiff = 3


      }




   else if(/6/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 3 )
    ydiff = 2


      }


  else if(/7/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 2 )
    ydiff = 1


      }


 else if(/8/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 1 )
    ydiff = 0


      }
 






 var pawn_piece = pawny_filter[0]
   console.log("NO HERE")
   console.log(pawnx_filter) 

   if(pawn_piece[0] == pawn1X && pawn_piece[1] == pawn1Y){

    drag_piece = "PB1"

  var xdis = xdiff - pawn1X
   var ydis = ydiff - pawn1Y

     canMovePawn1 = function (toX, toY) {
  const x = pawnPosition1[0];
  const y = pawnPosition1[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}












   }


  else if(pawn_piece[0] == pawn2X && pawn_piece[1] == pawn2Y){

    drag_piece = "PB2"

   var xdis = xdiff - pawn2X
   var ydis = ydiff - pawn2Y

     canMovePawn2 = function (toX, toY) {
  const x = pawnPosition2[0];
  const y = pawnPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}






   }

 else if(pawn_piece[0] == pawn3X && pawn_piece[1] == pawn3Y){

    drag_piece = "PB3"

   var xdis = xdiff - pawn3X
   var ydis = ydiff - pawn3Y

     canMovePawn3 = function (toX, toY) {
  const x = pawnPosition3[0];
  const y = pawnPosition3[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}



   }

 else if(pawn_piece[0] == pawn4X && pawn_piece[1] == pawn4Y){

  var xdis = xdiff - pawn4X
   var ydis = ydiff - pawn4Y

     canMovePawn4 = function (toX, toY) {
  const x = pawnPosition4[0];
  const y = pawnPosition4[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}






    drag_piece = "PB4"

   }

 else if(pawn_piece[0] == pawn5X && pawn_piece[1] == pawn5Y){

    
    var xdis = xdiff - pawn5X
   var ydis = ydiff - pawn5Y

     canMovePawn5 = function (toX, toY) {
  const x = pawnPosition5[0];
  const y = pawnPosition5[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}











    drag_piece = "PB5"

   }

  else if(pawn_piece[0] == pawn6X && pawn_piece[1] == pawn6Y){

   
   var xdis = xdiff - pawn6X
   var ydis = ydiff - pawn6Y

     canMovePawn6 = function (toX, toY) {
  const x = pawnPosition6[0];
  const y = pawnPosition6[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}








    drag_piece = "PB6"

   }

    
else if(pawn_piece[0] == pawn7X && pawn_piece[1] == pawn7Y){

   
    var xdis = xdiff - pawn7X
   var ydis = ydiff - pawn7Y

     canMovePawn7 = function (toX, toY) {
  const x = pawnPosition7[0];
  const y = pawnPosition7[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}







    drag_piece = "PB7"

   }
    
else if(pawn_piece[0] == pawn8X && pawn_piece[1] == pawn8Y){

    var xdis = xdiff - pawn8X
   var ydis = ydiff - pawn8Y

     canMovePawn8 = function (toX, toY) {
  const x = pawnPosition8[0];
  const y = pawnPosition8[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}






    drag_piece = "PB8"

   }
else {

  drag_piece = "PB5"
}



























}


    



    yOverlay = pawn_piece[1]
    console.log("MMMMMMMMM")
    console.log(drag_piece)
    console.log(yOverlay)
    console.log(xOverlay)
    console.log(overlayCount)
    // count_number++;

    
    
    
  




  }



else if(/ex/.test(whiteone) == true){
    xOverlay = 4
     xdiff = xOverlay
    console.log("HHHEEEEERRRRREEE")
    console.log(pawn4X)
    console.log(pawn4Y)
    var pawnx_filter = pawnArrayy.filter(c => c[0] == 4)

      if(/d/.test(whiteone) == true){

       if(/1/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 7 )
    ydiff = 7


      }





     else if(/2/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 6 )
    ydiff = 6


      }



      else if(/3/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c =>  c[1] == 6 )
    ydiff = 5


      }


  
     else  if(/4/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 5 || c[1] == 6 )
    ydiff = 4


      }



    else if(/5/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 4 )
    ydiff = 3


      }




   else if(/6/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 3 )
    ydiff = 2


      }


  else if(/7/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 2 )
    ydiff = 1


      }


 else if(/8/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 1 )
    ydiff = 0


      }
 






 var pawn_piece = pawny_filter[0]
   console.log("NO HERE")
   console.log(pawnx_filter) 

   if(pawn_piece[0] == pawn1X && pawn_piece[1] == pawn1Y){

    drag_piece = "PB1"

  var xdis = xdiff - pawn1X
   var ydis = ydiff - pawn1Y

     canMovePawn1 = function (toX, toY) {
  const x = pawnPosition1[0];
  const y = pawnPosition1[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}












   }


  else if(pawn_piece[0] == pawn2X && pawn_piece[1] == pawn2Y){

    drag_piece = "PB2"

   var xdis = xdiff - pawn2X
   var ydis = ydiff - pawn2Y

     canMovePawn2 = function (toX, toY) {
  const x = pawnPosition2[0];
  const y = pawnPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}






   }

 else if(pawn_piece[0] == pawn3X && pawn_piece[1] == pawn3Y){

    drag_piece = "PB3"

   var xdis = xdiff - pawn3X
   var ydis = ydiff - pawn3Y

     canMovePawn3 = function (toX, toY) {
  const x = pawnPosition3[0];
  const y = pawnPosition3[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}



   }

 else if(pawn_piece[0] == pawn4X && pawn_piece[1] == pawn4Y){

  var xdis = xdiff - pawn4X
   var ydis = ydiff - pawn4Y

     canMovePawn4 = function (toX, toY) {
  const x = pawnPosition4[0];
  const y = pawnPosition4[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}






    drag_piece = "PB4"

   }

 else if(pawn_piece[0] == pawn5X && pawn_piece[1] == pawn5Y){

    
    var xdis = xdiff - pawn5X
   var ydis = ydiff - pawn5Y

     canMovePawn5 = function (toX, toY) {
  const x = pawnPosition5[0];
  const y = pawnPosition5[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}











    drag_piece = "PB5"

   }

  else if(pawn_piece[0] == pawn6X && pawn_piece[1] == pawn6Y){

   
   var xdis = xdiff - pawn6X
   var ydis = ydiff - pawn6Y

     canMovePawn6 = function (toX, toY) {
  const x = pawnPosition6[0];
  const y = pawnPosition6[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}








    drag_piece = "PB6"

   }

    
else if(pawn_piece[0] == pawn7X && pawn_piece[1] == pawn7Y){

   
    var xdis = xdiff - pawn7X
   var ydis = ydiff - pawn7Y

     canMovePawn7 = function (toX, toY) {
  const x = pawnPosition7[0];
  const y = pawnPosition7[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}







    drag_piece = "PB7"

   }
    
else if(pawn_piece[0] == pawn8X && pawn_piece[1] == pawn8Y){

    var xdis = xdiff - pawn8X
   var ydis = ydiff - pawn8Y

     canMovePawn8 = function (toX, toY) {
  const x = pawnPosition8[0];
  const y = pawnPosition8[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}






    drag_piece = "PB8"

   }
else {

  drag_piece = "PB5"
}
}

else if(/f/.test(whiteone) == true){

  if(/1/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 7 )
    ydiff = 7


      }





     else if(/2/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 6 )
    ydiff = 6


      }



      else if(/3/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c =>  c[1] == 6 )
    ydiff = 5


      }


  
     else  if(/4/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 5 || c[1] == 6 )
    ydiff = 4


      }



    else if(/5/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 4 )
    ydiff = 3


      }




   else if(/6/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 3 )
    ydiff = 2


      }


  else if(/7/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 2 )
    ydiff = 1


      }


 else if(/8/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 1 )
    ydiff = 0


      }
 






 var pawn_piece = pawny_filter[0]
   console.log("NO HERE")
   console.log(pawnx_filter) 

   if(pawn_piece[0] == pawn1X && pawn_piece[1] == pawn1Y){

    drag_piece = "PB1"

  var xdis = xdiff - pawn1X
   var ydis = ydiff - pawn1Y

     canMovePawn1 = function (toX, toY) {
  const x = pawnPosition1[0];
  const y = pawnPosition1[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}












   }


  else if(pawn_piece[0] == pawn2X && pawn_piece[1] == pawn2Y){

    drag_piece = "PB2"

   var xdis = xdiff - pawn2X
   var ydis = ydiff - pawn2Y

     canMovePawn2 = function (toX, toY) {
  const x = pawnPosition2[0];
  const y = pawnPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}






   }

 else if(pawn_piece[0] == pawn3X && pawn_piece[1] == pawn3Y){

    drag_piece = "PB3"

   var xdis = xdiff - pawn3X
   var ydis = ydiff - pawn3Y

     canMovePawn3 = function (toX, toY) {
  const x = pawnPosition3[0];
  const y = pawnPosition3[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}



   }

 else if(pawn_piece[0] == pawn4X && pawn_piece[1] == pawn4Y){

  var xdis = xdiff - pawn4X
   var ydis = ydiff - pawn4Y

     canMovePawn4 = function (toX, toY) {
  const x = pawnPosition4[0];
  const y = pawnPosition4[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}






    drag_piece = "PB4"

   }

 else if(pawn_piece[0] == pawn5X && pawn_piece[1] == pawn5Y){

    
    var xdis = xdiff - pawn5X
   var ydis = ydiff - pawn5Y

     canMovePawn5 = function (toX, toY) {
  const x = pawnPosition5[0];
  const y = pawnPosition5[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}











    drag_piece = "PB5"

   }

  else if(pawn_piece[0] == pawn6X && pawn_piece[1] == pawn6Y){

   
   var xdis = xdiff - pawn6X
   var ydis = ydiff - pawn6Y

     canMovePawn6 = function (toX, toY) {
  const x = pawnPosition6[0];
  const y = pawnPosition6[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}








    drag_piece = "PB6"

   }

    
else if(pawn_piece[0] == pawn7X && pawn_piece[1] == pawn7Y){

   
    var xdis = xdiff - pawn7X
   var ydis = ydiff - pawn7Y

     canMovePawn7 = function (toX, toY) {
  const x = pawnPosition7[0];
  const y = pawnPosition7[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}







    drag_piece = "PB7"

   }
    
else if(pawn_piece[0] == pawn8X && pawn_piece[1] == pawn8Y){

    var xdis = xdiff - pawn8X
   var ydis = ydiff - pawn8Y

     canMovePawn8 = function (toX, toY) {
  const x = pawnPosition8[0];
  const y = pawnPosition8[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1&& (dy) === ydis) 
         
}






    drag_piece = "PB8"

   }
else {

  drag_piece = "PB5"
}
    






















}
    yOverlay = pawn_piece[1]
    console.log("MMMMMMMMM")
    console.log(drag_piece)
    console.log(yOverlay)
    console.log(xOverlay)
    console.log(overlayCount)
    // count_number++;

    
    
    
  




  }


    


  else if(/fx/.test(whiteone) == true){
    xOverlay = 5
     xdiff = xOverlay
    console.log("YYYYYY")
    console.log(pawn4X)
    console.log(pawn4Y)
    var pawnx_filter = pawnArrayy.filter(c => c[0] == 5)
    console.log(pawnx_filter)
      
      if(/e/.test(whiteone) == true) {
       
       if(/1/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 7 )
    ydiff = 7


      }





     else if(/2/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 6 )
    ydiff = 6


      }



      else if(/3/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c =>  c[1] == 6 )
    ydiff = 5


      }


  
     else  if(/4/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 5 || c[1] == 6 )
    ydiff = 4


      }



    else if(/5/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 4 )
    ydiff = 3


      }




   else if(/6/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 3 )
    ydiff = 2


      }


  else if(/7/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 2 )
    ydiff = 1


      }


 else if(/8/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 1 )
    ydiff = 0


      }
 






 var pawn_piece = pawny_filter[0]
   console.log("NO HERE")
   console.log(pawnx_filter) 

   if(pawn_piece[0] == pawn1X && pawn_piece[1] == pawn1Y){

    drag_piece = "PB1"

  var xdis = xdiff - pawn1X
   var ydis = ydiff - pawn1Y

     canMovePawn1 = function (toX, toY) {
  const x = pawnPosition1[0];
  const y = pawnPosition1[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}












   }


  else if(pawn_piece[0] == pawn2X && pawn_piece[1] == pawn2Y){

    drag_piece = "PB2"

   var xdis = xdiff - pawn2X
   var ydis = ydiff - pawn2Y

     canMovePawn2 = function (toX, toY) {
  const x = pawnPosition2[0];
  const y = pawnPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}






   }

 else if(pawn_piece[0] == pawn3X && pawn_piece[1] == pawn3Y){

    drag_piece = "PB3"

   var xdis = xdiff - pawn3X
   var ydis = ydiff - pawn3Y

     canMovePawn3 = function (toX, toY) {
  const x = pawnPosition3[0];
  const y = pawnPosition3[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}



   }

 else if(pawn_piece[0] == pawn4X && pawn_piece[1] == pawn4Y){

  var xdis = xdiff - pawn4X
   var ydis = ydiff - pawn4Y

     canMovePawn4 = function (toX, toY) {
  const x = pawnPosition4[0];
  const y = pawnPosition4[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}






    drag_piece = "PB4"

   }

 else if(pawn_piece[0] == pawn5X && pawn_piece[1] == pawn5Y){

    
    var xdis = xdiff - pawn5X
   var ydis = ydiff - pawn5Y

     canMovePawn5 = function (toX, toY) {
  const x = pawnPosition5[0];
  const y = pawnPosition5[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}











    drag_piece = "PB5"

   }

  else if(pawn_piece[0] == pawn6X && pawn_piece[1] == pawn6Y){

   
   var xdis = xdiff - pawn6X
   var ydis = ydiff - pawn6Y

     canMovePawn6 = function (toX, toY) {
  const x = pawnPosition6[0];
  const y = pawnPosition6[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}








    drag_piece = "PB6"

   }

    
else if(pawn_piece[0] == pawn7X && pawn_piece[1] == pawn7Y){

   
    var xdis = xdiff - pawn7X
   var ydis = ydiff - pawn7Y

     canMovePawn7 = function (toX, toY) {
  const x = pawnPosition7[0];
  const y = pawnPosition7[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}







    drag_piece = "PB7"

   }
    
else if(pawn_piece[0] == pawn8X && pawn_piece[1] == pawn8Y){

    var xdis = xdiff - pawn8X
   var ydis = ydiff - pawn8Y

     canMovePawn8 = function (toX, toY) {
  const x = pawnPosition8[0];
  const y = pawnPosition8[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}






    drag_piece = "PB8"

   }
else {

  drag_piece = "PB5"
}
}


    else if(/g/.test(whiteone) == true){

          if(/1/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 7 )
    ydiff = 7


      }





     else if(/2/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 6 )
    ydiff = 6


      }



      else if(/3/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c =>  c[1] == 6 )
    ydiff = 5


      }


  
     else  if(/4/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 5 || c[1] == 6 )
    ydiff = 4


      }



    else if(/5/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 4 )
    ydiff = 3


      }




   else if(/6/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 3 )
    ydiff = 2


      }


  else if(/7/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 2 )
    ydiff = 1


      }


 else if(/8/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 1 )
    ydiff = 0


      }
 






 var pawn_piece = pawny_filter[0]
   console.log("NO HERE")
   console.log(pawnx_filter) 

   if(pawn_piece[0] == pawn1X && pawn_piece[1] == pawn1Y){

    drag_piece = "PB1"

  var xdis = xdiff - pawn1X
   var ydis = ydiff - pawn1Y

     canMovePawn1 = function (toX, toY) {
  const x = pawnPosition1[0];
  const y = pawnPosition1[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}












   }


  else if(pawn_piece[0] == pawn2X && pawn_piece[1] == pawn2Y){

    drag_piece = "PB2"

   var xdis = xdiff - pawn2X
   var ydis = ydiff - pawn2Y

     canMovePawn2 = function (toX, toY) {
  const x = pawnPosition2[0];
  const y = pawnPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}






   }

 else if(pawn_piece[0] == pawn3X && pawn_piece[1] == pawn3Y){

    drag_piece = "PB3"

   var xdis = xdiff - pawn3X
   var ydis = ydiff - pawn3Y

     canMovePawn3 = function (toX, toY) {
  const x = pawnPosition3[0];
  const y = pawnPosition3[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}



   }

 else if(pawn_piece[0] == pawn4X && pawn_piece[1] == pawn4Y){

  var xdis = xdiff - pawn4X
   var ydis = ydiff - pawn4Y

     canMovePawn4 = function (toX, toY) {
  const x = pawnPosition4[0];
  const y = pawnPosition4[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}






    drag_piece = "PB4"

   }

 else if(pawn_piece[0] == pawn5X && pawn_piece[1] == pawn5Y){

    
    var xdis = xdiff - pawn5X
   var ydis = ydiff - pawn5Y

     canMovePawn5 = function (toX, toY) {
  const x = pawnPosition5[0];
  const y = pawnPosition5[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}











    drag_piece = "PB5"

   }

  else if(pawn_piece[0] == pawn6X && pawn_piece[1] == pawn6Y){

   
   var xdis = xdiff - pawn6X
   var ydis = ydiff - pawn6Y

     canMovePawn6 = function (toX, toY) {
  const x = pawnPosition6[0];
  const y = pawnPosition6[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}








    drag_piece = "PB6"

   }

    
else if(pawn_piece[0] == pawn7X && pawn_piece[1] == pawn7Y){

   
    var xdis = xdiff - pawn7X
   var ydis = ydiff - pawn7Y

     canMovePawn7 = function (toX, toY) {
  const x = pawnPosition7[0];
  const y = pawnPosition7[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}







    drag_piece = "PB7"

   }
    
else if(pawn_piece[0] == pawn8X && pawn_piece[1] == pawn8Y){

    var xdis = xdiff - pawn8X
   var ydis = ydiff - pawn8Y

     canMovePawn8 = function (toX, toY) {
  const x = pawnPosition8[0];
  const y = pawnPosition8[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}






    drag_piece = "PB8"

   }
else {

  drag_piece = "PB5"
}



















    










    }



    




















    yOverlay = pawn_piece[1]
    console.log("MMMMMMMMM")
    console.log(drag_piece)
    console.log(yOverlay)
    console.log(xOverlay)
    console.log(overlayCount)
    // count_number++;

    
    
    
  




  }




else if(/gx/.test(whiteone) == true){
    xOverlay = 6
     xdiff = xOverlay
    console.log("HHHEEEEERRRRREEE")
    console.log(pawn4X)
    console.log(pawn4Y)
    var pawnx_filter = pawnArrayy.filter(c => c[0] == 6)

      if(/f/.test(whiteone) == true) {

       if(/1/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 7 )
    ydiff = 7


      }





     else if(/2/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 6 )
    ydiff = 6


      }



      else if(/3/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c =>  c[1] == 6 )
    ydiff = 5


      }


  
     else  if(/4/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 5 || c[1] == 6 )
    ydiff = 4


      }



    else if(/5/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 4 )
    ydiff = 3


      }




   else if(/6/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 3 )
    ydiff = 2


      }


  else if(/7/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 2 )
    ydiff = 1


      }


 else if(/8/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 1 )
    ydiff = 0


      }
 






 var pawn_piece = pawny_filter[0]
   console.log("NO HERE")
   console.log(pawnx_filter) 

   if(pawn_piece[0] == pawn1X && pawn_piece[1] == pawn1Y){

    drag_piece = "PB1"

  var xdis = xdiff - pawn1X
   var ydis = ydiff - pawn1Y

     canMovePawn1 = function (toX, toY) {
  const x = pawnPosition1[0];
  const y = pawnPosition1[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}












   }


  else if(pawn_piece[0] == pawn2X && pawn_piece[1] == pawn2Y){

    drag_piece = "PB2"

   var xdis = xdiff - pawn2X
   var ydis = ydiff - pawn2Y

     canMovePawn2 = function (toX, toY) {
  const x = pawnPosition2[0];
  const y = pawnPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}






   }

 else if(pawn_piece[0] == pawn3X && pawn_piece[1] == pawn3Y){

    drag_piece = "PB3"

   var xdis = xdiff - pawn3X
   var ydis = ydiff - pawn3Y

     canMovePawn3 = function (toX, toY) {
  const x = pawnPosition3[0];
  const y = pawnPosition3[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}



   }

 else if(pawn_piece[0] == pawn4X && pawn_piece[1] == pawn4Y){

  var xdis = xdiff - pawn4X
   var ydis = ydiff - pawn4Y

     canMovePawn4 = function (toX, toY) {
  const x = pawnPosition4[0];
  const y = pawnPosition4[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}






    drag_piece = "PB4"

   }

 else if(pawn_piece[0] == pawn5X && pawn_piece[1] == pawn5Y){

    
    var xdis = xdiff - pawn5X
   var ydis = ydiff - pawn5Y

     canMovePawn5 = function (toX, toY) {
  const x = pawnPosition5[0];
  const y = pawnPosition5[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}











    drag_piece = "PB5"

   }

  else if(pawn_piece[0] == pawn6X && pawn_piece[1] == pawn6Y){

   
   var xdis = xdiff - pawn6X
   var ydis = ydiff - pawn6Y

     canMovePawn6 = function (toX, toY) {
  const x = pawnPosition6[0];
  const y = pawnPosition6[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}








    drag_piece = "PB6"

   }

    
else if(pawn_piece[0] == pawn7X && pawn_piece[1] == pawn7Y){

   
    var xdis = xdiff - pawn7X
   var ydis = ydiff - pawn7Y

     canMovePawn7 = function (toX, toY) {
  const x = pawnPosition7[0];
  const y = pawnPosition7[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}







    drag_piece = "PB7"

   }
    
else if(pawn_piece[0] == pawn8X && pawn_piece[1] == pawn8Y){

    var xdis = xdiff - pawn8X
   var ydis = ydiff - pawn8Y

     canMovePawn8 = function (toX, toY) {
  const x = pawnPosition8[0];
  const y = pawnPosition8[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}






    drag_piece = "PB8"

   }
else {

  drag_piece = "PB5"
}

}



else if(/h/.test(whiteone) == true){


       if(/1/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 7 )
    ydiff = 7


      }





     else if(/2/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 6 )
    ydiff = 6


      }



      else if(/3/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c =>  c[1] == 6 )
    ydiff = 5


      }


  
     else  if(/4/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 5 || c[1] == 6 )
    ydiff = 4


      }



    else if(/5/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 4 )
    ydiff = 3


      }




   else if(/6/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 3 )
    ydiff = 2


      }


  else if(/7/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 2 )
    ydiff = 1


      }


 else if(/8/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 1 )
    ydiff = 0


      }
 






 var pawn_piece = pawny_filter[0]
   console.log("NO HERE")
   console.log(pawnx_filter) 

   if(pawn_piece[0] == pawn1X && pawn_piece[1] == pawn1Y){

    drag_piece = "PB1"

  var xdis = xdiff - pawn1X
   var ydis = ydiff - pawn1Y

     canMovePawn1 = function (toX, toY) {
  const x = pawnPosition1[0];
  const y = pawnPosition1[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}












   }


  else if(pawn_piece[0] == pawn2X && pawn_piece[1] == pawn2Y){

    drag_piece = "PB2"

   var xdis = xdiff - pawn2X
   var ydis = ydiff - pawn2Y

     canMovePawn2 = function (toX, toY) {
  const x = pawnPosition2[0];
  const y = pawnPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}






   }

 else if(pawn_piece[0] == pawn3X && pawn_piece[1] == pawn3Y){

    drag_piece = "PB3"

   var xdis = xdiff - pawn3X
   var ydis = ydiff - pawn3Y

     canMovePawn3 = function (toX, toY) {
  const x = pawnPosition3[0];
  const y = pawnPosition3[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}



   }

 else if(pawn_piece[0] == pawn4X && pawn_piece[1] == pawn4Y){

  var xdis = xdiff - pawn4X
   var ydis = ydiff - pawn4Y

     canMovePawn4 = function (toX, toY) {
  const x = pawnPosition4[0];
  const y = pawnPosition4[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}






    drag_piece = "PB4"

   }

 else if(pawn_piece[0] == pawn5X && pawn_piece[1] == pawn5Y){

    
    var xdis = xdiff - pawn5X
   var ydis = ydiff - pawn5Y

     canMovePawn5 = function (toX, toY) {
  const x = pawnPosition5[0];
  const y = pawnPosition5[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}











    drag_piece = "PB5"

   }

  else if(pawn_piece[0] == pawn6X && pawn_piece[1] == pawn6Y){

   
   var xdis = xdiff - pawn6X
   var ydis = ydiff - pawn6Y

     canMovePawn6 = function (toX, toY) {
  const x = pawnPosition6[0];
  const y = pawnPosition6[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}








    drag_piece = "PB6"

   }

    
else if(pawn_piece[0] == pawn7X && pawn_piece[1] == pawn7Y){

   
    var xdis = xdiff - pawn7X
   var ydis = ydiff - pawn7Y

     canMovePawn7 = function (toX, toY) {
  const x = pawnPosition7[0];
  const y = pawnPosition7[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}







    drag_piece = "PB7"

   }
    
else if(pawn_piece[0] == pawn8X && pawn_piece[1] == pawn8Y){

    var xdis = xdiff - pawn8X
   var ydis = ydiff - pawn8Y

     canMovePawn8 = function (toX, toY) {
  const x = pawnPosition8[0];
  const y = pawnPosition8[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis + 1 && (dy) === ydis) 
         
}






    drag_piece = "PB8"

   }
else {

  drag_piece = "PB5"
}


































}

    



    yOverlay = pawn_piece[1]
    console.log("MMMMMMMMM")
    console.log(drag_piece)
    console.log(yOverlay)
    console.log(xOverlay)
    console.log(overlayCount)
    // count_number++;

    
    
    
  




  }





else if(/hx/.test(whiteone) == true){
    xOverlay = 7
     xdiff = xOverlay
    console.log("HHHEEEEERRRRREEE")
    console.log(pawn4X)
    console.log(pawn4Y)
    var pawnx_filter = pawnArrayy.filter(c => c[0] == 7)

      

       if(/1/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 7 )
    ydiff = 7


      }





     else if(/2/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 6 )
    ydiff = 6


      }



      else if(/3/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c =>  c[1] == 6 )
    ydiff = 5


      }


  
     else  if(/4/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 5 || c[1] == 6 )
    ydiff = 4


      }



    else if(/5/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 4 )
    ydiff = 3


      }




   else if(/6/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 3 )
    ydiff = 2


      }


  else if(/7/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 2 )
    ydiff = 1


      }


 else if(/8/.test(whiteone) == true){

    var pawny_filter = pawnx_filter.filter(c => c[1] == 1 )
    ydiff = 0


      }
 






 var pawn_piece = pawny_filter[0]
   console.log("NO HERE")
   console.log(pawnx_filter) 

   if(pawn_piece[0] == pawn1X && pawn_piece[1] == pawn1Y){

    drag_piece = "PB1"

  var xdis = xdiff - pawn1X
   var ydis = ydiff - pawn1Y

     canMovePawn1 = function (toX, toY) {
  const x = pawnPosition1[0];
  const y = pawnPosition1[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}












   }


  else if(pawn_piece[0] == pawn2X && pawn_piece[1] == pawn2Y){

    drag_piece = "PB2"

   var xdis = xdiff - pawn2X
   var ydis = ydiff - pawn2Y

     canMovePawn2 = function (toX, toY) {
  const x = pawnPosition2[0];
  const y = pawnPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}






   }

 else if(pawn_piece[0] == pawn3X && pawn_piece[1] == pawn3Y){

    drag_piece = "PB3"

   var xdis = xdiff - pawn3X
   var ydis = ydiff - pawn3Y

     canMovePawn3 = function (toX, toY) {
  const x = pawnPosition3[0];
  const y = pawnPosition3[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}



   }

 else if(pawn_piece[0] == pawn4X && pawn_piece[1] == pawn4Y){

  var xdis = xdiff - pawn4X
   var ydis = ydiff - pawn4Y

     canMovePawn4 = function (toX, toY) {
  const x = pawnPosition4[0];
  const y = pawnPosition4[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}






    drag_piece = "PB4"

   }

 else if(pawn_piece[0] == pawn5X && pawn_piece[1] == pawn5Y){

    
    var xdis = xdiff - pawn5X
   var ydis = ydiff - pawn5Y

     canMovePawn5 = function (toX, toY) {
  const x = pawnPosition5[0];
  const y = pawnPosition5[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}











    drag_piece = "PB5"

   }

  else if(pawn_piece[0] == pawn6X && pawn_piece[1] == pawn6Y){

   
   var xdis = xdiff - pawn6X
   var ydis = ydiff - pawn6Y

     canMovePawn6 = function (toX, toY) {
  const x = pawnPosition6[0];
  const y = pawnPosition6[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}








    drag_piece = "PB6"

   }

    
else if(pawn_piece[0] == pawn7X && pawn_piece[1] == pawn7Y){

   
    var xdis = xdiff - pawn7X
   var ydis = ydiff - pawn7Y

     canMovePawn7 = function (toX, toY) {
  const x = pawnPosition7[0];
  const y = pawnPosition7[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}







    drag_piece = "PB7"

   }
    
else if(pawn_piece[0] == pawn8X && pawn_piece[1] == pawn8Y){

    var xdis = xdiff - pawn8X
   var ydis = ydiff - pawn8Y

     canMovePawn8 = function (toX, toY) {
  const x = pawnPosition8[0];
  const y = pawnPosition8[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis - 1 && (dy) === ydis) 
         
}






    drag_piece = "PB8"

   }
else {

  drag_piece = "PB5"
}



    



    yOverlay = pawn_piece[1]
    console.log("MMMMMMMMM")
    console.log(drag_piece)
    console.log(yOverlay)
    console.log(xOverlay)
    console.log(overlayCount)
    // count_number++;

    
    
    
  




  }




}


























  else {

    if(/Knight/.test(whiteone) == true){


      

      
      if(/a\d/.test(whiteone) == true){


  var xfactor = 0

      
       if(/1/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(7 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(7 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)




var this_knight = knight_Ol_filter[0]
xOverlay = this_knight[0]
yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  

  var ydis = 7 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

   var ydis = 7 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









}




      }//end of 1





else if(/2/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(6 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(6 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





var this_knight = knight_Ol_filter[0]
xOverlay = this_knight[0]
yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  

  var ydis = 6 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"


  var ydis = 6 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}





}




      }//end of 2





else if(/3/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(5 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(5 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





      var this_knight = knight_Ol_filter[0]
      xOverlay = this_knight[0]
      yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
     var ydis = 5 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

  var ydis = 5 - knight2Y
 var xdis = xfactor - knight2X

console.log("YAAAKYIKKK")
console.log(xdis)
console.log(ydis)
console.log(knight2X)


   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}




}




      }//end of 3


  else if(/4/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(4 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(4 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
  var ydis = 4 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}




  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

   var ydis = 4 - knight2Y
  var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








}




      }//end of 4


  else if(/5/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(3 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(3 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
 var ydis = 3 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

  var ydis = 3 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








}




      }//end of 5


  else if(/6/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(2 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(2 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
    var ydis = 2 - knightY
    var xdis = xfactor - knightX

      canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}

  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"


 



 var ydis = 2 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}





}




      }//end of 6


  else if(/7/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(1 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(1 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)




    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
    var ydis = 1 - knightY
    var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}







  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  
   var ydis = 1 - knight2Y
   var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









  drag_piece = "BS2"
}




      }//end of 7


  else if(/8/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(0 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(0 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)


    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
    var ydis = 0 - knightY
    var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}
  




  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"
  var ydis = 0 - knight2Y
  var xdis = 5 - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}






}




      }//end of 8







}// end of h




else if(/b\d/.test(whiteone) == true){


  var xfactor = 1

      
       if(/1/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(7 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(7 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)




var this_knight = knight_Ol_filter[0]
xOverlay = this_knight[0]
yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  

  var ydis = 7 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

   var ydis = 7 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









}




      }//end of 1





else if(/2/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(6 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(6 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





var this_knight = knight_Ol_filter[0]
xOverlay = this_knight[0]
yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  

  var ydis = 6 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"


  var ydis = 6 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}





}




      }//end of 2





else if(/3/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(5 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(5 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





      var this_knight = knight_Ol_filter[0]
      xOverlay = this_knight[0]
      yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
     var ydis = 5 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

  var ydis = 5 - knight2Y
 var xdis = xfactor - knight2X

console.log("YAAAKYIKKK")
console.log(xdis)
console.log(ydis)
console.log(knight2X)


   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}




}




      }//end of 3


  else if(/4/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(4 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(4 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
  var ydis = 4 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}




  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

   var ydis = 4 - knight2Y
  var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








}




      }//end of 4


  else if(/5/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(3 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(3 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
 var ydis = 3 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

  var ydis = 3 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








}




      }//end of 5


  else if(/6/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(2 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(2 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
    var ydis = 2 - knightY
    var xdis = xfactor - knightX

      canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}

  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"


 



 var ydis = 2 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}





}




      }//end of 6


  else if(/7/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(1 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(1 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)




    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
    var ydis = 1 - knightY
    var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}







  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  
   var ydis = 1 - knight2Y
   var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









  drag_piece = "BS2"
}




      }//end of 7


  else if(/8/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(0 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(0 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)


    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
    var ydis = 0 - knightY
    var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}
  




  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"
  var ydis = 0 - knight2Y
  var xdis = 5 - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}






}




      }//end of 8







}// end of h
































































































      else if(/c\d/.test(whiteone) == true){


  var xfactor = 2

      
       if(/1/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(7 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(7 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)




var this_knight = knight_Ol_filter[0]
xOverlay = this_knight[0]
yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  

  var ydis = 7 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

   var ydis = 7 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









}




      }//end of 1





else if(/2/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(6 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(6 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





var this_knight = knight_Ol_filter[0]
xOverlay = this_knight[0]
yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  

  var ydis = 6 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"


  var ydis = 6 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}





}




      }//end of 2





else if(/3/.test(whiteone) == true){


    console.log("ROGER ROGER WE GOT A PROBLEM")




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(5 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(5 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





      var this_knight = knight_Ol_filter[0]
      xOverlay = this_knight[0]
      yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
  var ydis = 5 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

  var ydis = 5 - knight2Y
 var xdis = xfactor - knight2X

console.log("YAAAKYIKKK")
console.log(xdis)
console.log(ydis)
console.log(knight2X)


   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}




}




      }//end of 3


  else if(/4/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(4 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(4 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
  var ydis = 4 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}




  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

   var ydis = 4 - knight2Y
  var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








}




      }//end of 4


  else if(/5/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(3 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(3 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
 var ydis = 3 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

  var ydis = 3 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








}




      }//end of 5


  else if(/6/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(2 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(2 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
    var ydis = 2 - knightY
    var xdis = xfactor - knightX

      canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}

  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"


 



 var ydis = 2 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}





}




      }//end of 6


  else if(/7/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(1 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(1 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)




    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
    var ydis = 1 - knightY
    var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}







  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  
   var ydis = 1 - knight2Y
   var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









  drag_piece = "BS2"
}




      }//end of 7


  else if(/8/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(0 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(0 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)


    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
    var ydis = 0 - knightY
    var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}
  




  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"
  var ydis = 0 - knight2Y
  var xdis = 5 - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}






}




      }//end of 8







}// end of h










      































































































      else if(/d\d/.test(whiteone) == true){


  var xfactor = 3

      
       if(/1/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(7 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(7 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)




var this_knight = knight_Ol_filter[0]
xOverlay = this_knight[0]
yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  

  var ydis = 7 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

   var ydis = 7 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









}




      }//end of 1





else if(/2/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(6 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(6 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





var this_knight = knight_Ol_filter[0]
xOverlay = this_knight[0]
yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  

  var ydis = 6 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"


  var ydis = 6 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}





}




      }//end of 2





else if(/3/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(5 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(5 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





      var this_knight = knight_Ol_filter[0]
      xOverlay = this_knight[0]
      yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
     var ydis = 5 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

  var ydis = 5 - knight2Y
 var xdis = xfactor - knight2X

console.log("YAAAKYIKKK")
console.log(xdis)
console.log(ydis)
console.log(knight2X)


   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}




}




      }//end of 3


  else if(/4/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(4 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(4 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
  var ydis = 4 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}




  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

   var ydis = 4 - knight2Y
  var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








}




      }//end of 4


  else if(/5/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(3 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(3 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
 var ydis = 3 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

  var ydis = 3 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








}




      }//end of 5


  else if(/6/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(2 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(2 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
    var ydis = 2 - knightY
    var xdis = xfactor - knightX

      canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}

  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"


 



 var ydis = 2 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}





}




      }//end of 6


  else if(/7/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(1 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(1 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)




    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
    var ydis = 1 - knightY
    var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}







  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  
   var ydis = 1 - knight2Y
   var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









  drag_piece = "BS2"
}




      }//end of 7


  else if(/8/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(0 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(0 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)


    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
    var ydis = 0 - knightY
    var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}
  




  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"
  var ydis = 0 - knight2Y
  var xdis = 5 - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}






}




      }//end of 8







}// end of h




















































































else if(/e\d/.test(whiteone) == true){


  var xfactor = 4

      
       if(/1/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(7 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(7 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)




var this_knight = knight_Ol_filter[0]
xOverlay = this_knight[0]
yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  

  var ydis = 7 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

   var ydis = 7 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









}




      }//end of 1





else if(/2/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(6 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(6 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





var this_knight = knight_Ol_filter[0]
xOverlay = this_knight[0]
yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  

  var ydis = 6 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"


  var ydis = 6 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}





}




      }//end of 2





else if(/3/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(5 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(5 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





      var this_knight = knight_Ol_filter[0]
      xOverlay = this_knight[0]
      yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
     var ydis = 5 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

  var ydis = 5 - knight2Y
 var xdis = xfactor - knight2X

console.log("YAAAKYIKKK")
console.log(xdis)
console.log(ydis)
console.log(knight2X)


   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}




}




      }//end of 3


  else if(/4/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(4 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(4 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
  var ydis = 4 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}




  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

   var ydis = 4 - knight2Y
  var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








}




      }//end of 4


  else if(/5/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(3 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(3 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
 var ydis = 3 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

  var ydis = 3 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








}




      }//end of 5


  else if(/6/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(2 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(2 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
    var ydis = 2 - knightY
    var xdis = xfactor - knightX

      canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}

  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"


 



 var ydis = 2 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}





}




      }//end of 6


  else if(/7/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(1 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(1 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)




    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
    var ydis = 1 - knightY
    var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}







  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  
   var ydis = 1 - knight2Y
   var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









  drag_piece = "BS2"
}




      }//end of 7


  else if(/8/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(0 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(0 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)


    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
    var ydis = 0 - knightY
    var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}
  




  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"
  var ydis = 0 - knight2Y
  var xdis = 5 - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}






}




      }//end of 8







}// end of h
























































































































      else if(/f/.test(whiteone) == true){

     console.log("FFFFFFFF")
     console.log("F is true")
     console.log(knOlArray)
      var xfactor = 5

      
       if(/1/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(7 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(7 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)




var this_knight = knight_Ol_filter[0]
xOverlay = this_knight[0]
yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  

  var ydis = 7 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

   var ydis = 7 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









}




      }//end of 1





else if(/2/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(6 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(6 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





var this_knight = knight_Ol_filter[0]
xOverlay = this_knight[0]
yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  

  var ydis = 6 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"


  var ydis = 6 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}





}




      }//end of 2





else if(/3/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(5 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(5 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





      var this_knight = knight_Ol_filter[0]
      xOverlay = this_knight[0]
      yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
     var ydis = 5 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

  var ydis = 5 - knight2Y
 var xdis = xfactor - knight2X

console.log("YAAAKYIKKK")
console.log(xdis)
console.log(ydis)
console.log(knight2X)


   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}




}




      }//end of 3


  else if(/4/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(4 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(4 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
  var ydis = 4 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}




  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

   var ydis = 4 - knight2Y
  var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








}




      }//end of 4


  else if(/5/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(3 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(3 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
 var ydis = 3 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

  var ydis = 3 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








}




      }//end of 5


  else if(/6/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(2 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(2 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
    var ydis = 2 - knightY
    var xdis = xfactor - knightX

      canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}

  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"


 



 var ydis = 2 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}





}




      }//end of 6


  else if(/7/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(1 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(1 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)




    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
    var ydis = 1 - knightY
    var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}







  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  
   var ydis = 1 - knight2Y
   var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









  drag_piece = "BS2"
}




      }//end of 7


  else if(/8/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(0 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(0 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)


    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
    var ydis = 0 - knightY
    var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}
  




  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"
  var ydis = 0 - knight2Y
  var xdis = 5 - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}






}




      }//end of 8


} //end of f





else if(/g\d/.test(whiteone) == true){


  var xfactor = 6

      
       if(/1/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(7 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(7 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)




var this_knight = knight_Ol_filter[0]
xOverlay = this_knight[0]
yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  

  var ydis = 7 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

   var ydis = 7 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









}




      }//end of 1





else if(/2/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(6 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(6 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





var this_knight = knight_Ol_filter[0]
xOverlay = this_knight[0]
yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  

  var ydis = 6 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"


  var ydis = 6 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}





}




      }//end of 2





else if(/3/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(5 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(5 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





      var this_knight = knight_Ol_filter[0]
      xOverlay = this_knight[0]
      yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
     var ydis = 5 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

  var ydis = 5 - knight2Y
 var xdis = xfactor - knight2X

console.log("YAAAKYIKKK")
console.log(xdis)
console.log(ydis)
console.log(knight2X)


   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}




}




      }//end of 3


  else if(/4/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(4 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(4 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
  var ydis = 4 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}




  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

   var ydis = 4 - knight2Y
  var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








}




      }//end of 4


  else if(/5/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(3 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(3 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
 var ydis = 3 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

  var ydis = 3 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








}




      }//end of 5


  else if(/6/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(2 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(2 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
    var ydis = 2 - knightY
    var xdis = xfactor - knightX

      canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}

  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"


 



 var ydis = 2 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}





}




      }//end of 6


  else if(/7/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(1 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(1 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)




    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
    var ydis = 1 - knightY
    var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}







  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  
   var ydis = 1 - knight2Y
   var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









  drag_piece = "BS2"
}




      }//end of 7


  else if(/8/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(0 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(0 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)


    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
    var ydis = 0 - knightY
    var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}
  




  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"
  var ydis = 0 - knight2Y
  var xdis = 5 - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}






}




      }//end of 8







}// end of h





























































































































































































else if(/h\d/.test(whiteone) == true){


  var xfactor = 7

      
       if(/1/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(7 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(7 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)




var this_knight = knight_Ol_filter[0]
xOverlay = this_knight[0]
yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  

  var ydis = 7 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

   var ydis = 7 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









}




      }//end of 1





else if(/2/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(6 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(6 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





var this_knight = knight_Ol_filter[0]
xOverlay = this_knight[0]
yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  

  var ydis = 6 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"


  var ydis = 6 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}





}




      }//end of 2





else if(/3/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(5 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(5 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





      var this_knight = knight_Ol_filter[0]
      xOverlay = this_knight[0]
      yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
     var ydis = 5 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

  var ydis = 5 - knight2Y
 var xdis = xfactor - knight2X

console.log("YAAAKYIKKK")
console.log(xdis)
console.log(ydis)
console.log(knight2X)


   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}




}




      }//end of 3


  else if(/4/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(4 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(4 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
  var ydis = 4 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}




  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

   var ydis = 4 - knight2Y
  var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








}




      }//end of 4


  else if(/5/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(3 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(3 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
 var ydis = 3 - knightY
 var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"

  var ydis = 3 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}








}




      }//end of 5


  else if(/6/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(2 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(2 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)





    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
  
    var ydis = 2 - knightY
    var xdis = xfactor - knightX

      canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}

  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"


 



 var ydis = 2 - knight2Y
 var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}





}




      }//end of 6


  else if(/7/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(1 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(1 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)




    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
    var ydis = 1 - knightY
    var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}







  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  
   var ydis = 1 - knight2Y
   var xdis = xfactor - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}









  drag_piece = "BS2"
}




      }//end of 7


  else if(/8/.test(whiteone) == true){


    




     var knight_Ol_filter = knOlArray.filter(c => Math.abs(0 - c[1]) == 2 && Math.abs(xfactor - c[0]) == 1
|| Math.abs(0 - c[1]) == 1 && Math.abs(xfactor - c[0]) == 2)


    var this_knight = knight_Ol_filter[0]
    xOverlay = this_knight[0]
    yOverlay = this_knight[1]
      



  if(knightX == this_knight[0] && knightY == this_knight[1]){


    drag_piece = "BS1"
    var ydis = 0 - knightY
    var xdis = xfactor - knightX





   canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}
  




  }

else if(knight2X == this_knight[0] && knight2Y == this_knight[1]){


  drag_piece = "BS2"
  var ydis = 0 - knight2Y
  var xdis = 5 - knight2X





   canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdis && (dy) === ydis ) 
        
}






}




      }//end of 8







}// end of h













// count_number++


    }// end of knight



else if(/Bishop/.test(whiteone) == true){

if (/a/.test(whiteone) == true){


  if(/0/.test(whiteone) == true) {



var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (8 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)















}

 else if(/1/.test(whiteone) == true) {



var this_piece = bArray[0]
drag_piece = "BishopBoard1"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (7 - this_piece[1]) 
var xdiff = (0 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}


}

else if(/2/.test(whiteone) == true) {



var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (6 - this_piece[1]) 
var xdiff = (0 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}









}

else if(/3/.test(whiteone) == true) {




var this_piece = bArray[0]
drag_piece = "BishopBoard1"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (5 - this_piece[1]) 
var xdiff = (0 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}










}


else if(/4/.test(whiteone) == true) {



var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (4 - this_piece[1]) 
var xdiff = (0 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}











}

else if(/5/.test(whiteone) == true) {


var this_piece = bArray[0]
drag_piece = "BishopBoard1"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (3 - this_piece[1]) 
var xdiff = (0 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}












}

else if(/6/.test(whiteone) == true) {



var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (2 - this_piece[1]) 
var xdiff = (0 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}



}
 
else if(/7/.test(whiteone) == true) {


var this_piece = bArray[0]
drag_piece = "BishopBoard1"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (1 - this_piece[1]) 
var xdiff = (0 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}


}
 
else if(/8/.test(whiteone) == true) {


var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (0 - this_piece[1]) 
var xdiff = (0 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}



}

}

 else if(/b/.test(whiteone) == true){

  if(/0/.test(whiteone) == true) {


var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (8 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)


}

 else if(/1/.test(whiteone) == true) {


var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (7 - this_piece[1]) 
var xdiff = (1 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}



}

else if(/2/.test(whiteone) == true) {


var this_piece = bArray[0]
drag_piece = "BishopBoard"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (6 - this_piece[1]) 
var xdiff = (1 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}





}

else if(/3/.test(whiteone) == true) {



var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (5 - this_piece[1]) 
var xdiff = (1 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}


}


else if(/4/.test(whiteone) == true) {


var this_piece = bArray[0]
drag_piece = "BishopBoard"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (4 - this_piece[1]) 
var xdiff = (1 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}



}

else if(/5/.test(whiteone) == true) {


var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (3 - this_piece[1]) 
var xdiff = (1 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}


}

else if(/6/.test(whiteone) == true) {


var this_piece = bArray[0]
drag_piece = "BishopBoard"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (2 - this_piece[1]) 
var xdiff = (1 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}



}
 
else if(/7/.test(whiteone) == true) {





var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (1 - this_piece[1]) 
var xdiff = (1 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}


}

else if(/8/.test(whiteone) == true) {

var this_piece = bArray[0]
drag_piece = "BishopBoard"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (0 - this_piece[1]) 
var xdiff = (1 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}

}

 


 }

else if(/c/.test(whiteone) == 'c'){

  if(/0/.test(whiteone) == true) {



var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (8 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)


}

 else if(/1/.test(whiteone) == true) {





var this_piece = bArray[0]
drag_piece = "BishopBoard"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (7 - this_piece[1]) 
var xdiff = (2 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}


}

else if(/2/.test(whiteone) == true) {


var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (6 - this_piece[1]) 
var xdiff = (2 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}



}

else if(/3/.test(whiteone) == true) {


var this_piece = bArray[0]
drag_piece = "BishopBoard"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (5 - this_piece[1]) 
var xdiff = (2 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}



}


else if(/4/.test(whiteone) == true) {


var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (4 - this_piece[1]) 
var xdiff = (2 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}



}

else if(/5/.test(whiteone) == true) {


var this_piece = bArray[0]
drag_piece = "BishopBoard"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (3 - this_piece[1]) 
var xdiff = (2 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}



}

else if(/6/.test(whiteone) == true) {


var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (2 - this_piece[1]) 
var xdiff = (2 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}



}
 
else if(/7/.test(whiteone) == true) {


var this_piece = bArray[0]
drag_piece = "BishopBoard"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (1 - this_piece[1]) 
var xdiff = (2 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}


}

else if(/8/.test(whiteone) == true) {

var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (0 - this_piece[1]) 
var xdiff = (2 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}


}


}

else if(/d/.test(whiteone) == true){


  if(/0/.test(whiteone) == true) {


var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (8 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)


}

 else if(/1/.test(whiteone) == true) {




var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (7 - this_piece[1]) 
var xdiff = (3 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}



}

else if(/2/.test(whiteone) == true) {



var this_piece = bArray[0]
drag_piece = "BishopBoard"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (6 - this_piece[1]) 
var xdiff = (3 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}



}

else if(/3/.test(whiteone) == true) {


var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (5 - this_piece[1]) 
var xdiff = (3 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}

}


else if(/4/.test(whiteone) == true) {




var this_piece = bArray[0]
drag_piece = "BishopBoard"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (4 - this_piece[1]) 
var xdiff = (3 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}


}

else if(/5/.test(whiteone) == true) {


var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (3 - this_piece[1]) 
var xdiff = (3 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}




}

else if(/6/.test(whiteone) == true) {


var this_piece = bArray[0]
drag_piece = "BishopBoard"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (2 - this_piece[1]) 
var xdiff = (3 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}


}
 
else if(/7/.test(whiteone) == true) {


var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (1 - this_piece[1]) 
var xdiff = (3 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}




}

else if(/8/.test(whiteone) == true) {



var this_piece = bArray[0]
drag_piece = "BishopBoard"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (0 - this_piece[1]) 
var xdiff = (3 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}


}


}


else if(/e/.test(whiteone) == true ){

  if(/0/.test(whiteone) == true) {


var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (8 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)



}

 else if(/1/.test(whiteone) == true) {


var this_piece = bArray[0]
drag_piece = "BishopBoard"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (7 - this_piece[1]) 
var xdiff = (4 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}



}

else if(/2/.test(whiteone) == true) {



var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (6 - this_piece[1]) 
var xdiff = (4 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}





}

else if(/3/.test(whiteone) == true) {


var this_piece = bArray[0]
drag_piece = "BishopBoard"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (5 - this_piece[1]) 
var xdiff = (4 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}


}


else if(/4/.test(whiteone) == true) {



var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (4 - this_piece[1]) 
var xdiff = (4 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}


}

else if(/5/.test(whiteone) == true) {


var this_piece = bArray[0]
drag_piece = "BishopBoard"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (3 - this_piece[1]) 
var xdiff = (4 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}


}

else if(/6/.test(whiteone) == true) {

var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (2 - this_piece[1]) 
var xdiff = (4 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}



}
 
else if(/7/.test(whiteone) == true) {



var this_piece = bArray[0]
drag_piece = "BishopBoard"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (1 - this_piece[1]) 
var xdiff = (4 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}




}

 
else if(/8/.test(whiteone) == true) {



var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (0 - this_piece[1]) 
var xdiff = (4 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}



}






}

else if(/f/.test(whiteone) == true){


  if(/0/.test(whiteone) == true) {


var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (8 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)


}

 else if(/1/.test(whiteone) == true) {


var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (7 - this_piece[1]) 
var xdiff = (5 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}



}

else if(/2/.test(whiteone) == true) {



var this_piece = bArray[0]
drag_piece = "BishopBoard"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (6 - this_piece[1]) 
var xdiff = (5 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}



}

else if(/3/.test(whiteone) == true) {



var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (5 - this_piece[1]) 
var xdiff = (5 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}


}


else if(/4/.test(whiteone) == true) {


var this_piece = bArray[0]
drag_piece = "BishopBoard"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (4 - this_piece[1]) 
var xdiff = (5 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}

}

else if(/5/.test(whiteone) == true) {



var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (3 - this_piece[1]) 
var xdiff = (5 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}


}

else if(/6/.test(whiteone) == true) {



var this_piece = bArray[0]
drag_piece = "BishopBoard"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (2 - this_piece[1]) 
var xdiff = (5 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}



}
 
else if(/7/.test(whiteone) == true) {


var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (1 - this_piece[1]) 
var xdiff = (5 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}



}


else if(/8/.test(whiteone) == true) {

var this_piece = bArray[0]
drag_piece = "BishopBoard"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (0 - this_piece[1]) 
var xdiff = (5 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}


}



}

else if(/g/.test(whiteone) == true){

  console.log("GGGGGGG")
  if(/0/.test(piece) == true) {
var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (8 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)


}

 else if(/1/.test(whiteone) == true) {



var this_piece = bArray[0]
drag_piece = "BishopBoard"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (7 - this_piece[1]) 
var xdiff = (6 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}



}

else if(/2/.test(whiteone) == true) {



var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (6 - this_piece[1]) 
var xdiff = (6 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}

}

else if(/3/.test(whiteone) == true) {


var this_piece = bArray[0]
drag_piece = "BishopBoard"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (5 - this_piece[1]) 
var xdiff = (6 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}


}


else if(/4/.test(whiteone) == true) {



var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (4 - this_piece[1]) 
var xdiff = (6 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}


}

else if(/5/.test(whiteone) == true) {


var this_piece = bArray[0]
drag_piece = "BishopBoard"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (3 - this_piece[1]) 
var xdiff = (6 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}

}

else if(/6/.test(whiteone) == true) {


var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (2 - this_piece[1]) 
var xdiff = (6 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}


}
 
else if(/7/.test(whiteone) == true) {


var this_piece = bArray[0]
drag_piece = "BishopBoard"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (1 - this_piece[1]) 
var xdiff = (6 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}

}

 
else if(/8/.test(whiteone) == true) {


var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (0 - this_piece[1]) 
var xdiff = (6 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}





}


}

else if(/h/.test(whiteone) == true){


  if(/0/.test(whiteone) == true) {

    var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (8 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)

}

 else if(/1/.test(whiteone) == true) {



var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (7 - this_piece[1]) 
var xdiff = (7 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}


}

else if(/2/.test(whiteone) == true) {


var this_piece = bArray[0]
drag_piece = "BishopBoard"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (6 - this_piece[1]) 
var xdiff = (7 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}





}

else if(/3/.test(whiteone) == true) {


var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (5 - this_piece[1]) 
var xdiff = (7 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}


}


else if(/4/.test(whiteone) == true) {



var this_piece = bArray[0]
drag_piece = "BishopBoard"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (4 - this_piece[1]) 
var xdiff = (7 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}


}

else if(/5/.test(whiteone) == true) {



var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (3 - this_piece[1]) 
var xdiff = (7 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}



}

else if(/6/.test(whiteone) == true) {



var this_piece = bArray[0]
drag_piece = "BishopBoard"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (2 - this_piece[1]) 
var xdiff = (7 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}

}
 
else if(/7/.test(whiteone) == true) {


var this_piece = bArray[1]
drag_piece = "BishopBoard2"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (1 - this_piece[1]) 
var xdiff = (7 - this_piece[0]) 


canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}







}

else if(/8/.test(whiteone) == true) {


var this_piece = bArray[0]
drag_piece = "BishopBoard"
 
xOverlay = this_piece[0]
yOverlay = this_piece[1]

var ydiff = (0 - this_piece[1]) 
var xdiff = (7 - this_piece[0]) 


canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff)
        
}






}


}


}//end of Bishop

  

else if(/Castle/.test(whiteone) == true){

if (/(a\d)/.test(whiteone) == true){


  if(/0/.test(whiteone) == true) {


}

 else if(/1/.test(whiteone) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 7 || c[0] == 0)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/2/.test(whiteone) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 6 || c[0] == 0)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/3/.test(whiteone) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 5 || c[0] == 0)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}


else if(/4/.test(whiteone) == true) {


var castle_filter = cArray.filter(c =>  c[1] == 3 || c[0] == 0)

if(castle_filter[0][0] == castle1X && castle_filter[0][1] == castle1Y){

drag_piece = "CB1"

var this_piece = castle_filter[0]

var ydiff = (4 - this_piece[1]) 
var xdiff = (0 - this_piece[0]) 

canMoveCastle1 = function (toX, toY) {
  const x = castlePosition1[0];
  const y = castlePosition1[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff  && (dy) === ydiff) 
        
}

}


else if(castle_filter[0][0] == castle2X && castle_filter[0][1] == castle2Y){

drag_piece = "CB2"

var this_piece = castle_filter[0]

var ydiff = (4 - this_piece[1]) 
var xdiff = (0 - this_piece[0]) 

canMoveCastle2 = function (toX, toY) {
  const x = castlePosition2[0];
  const y = castlePosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff  && (dy) === ydiff) 
        
}



}

xOverlay = this_piece[0]
yOverlay = this_piece[1]




}

else if(/5/.test(whiteone) == true) {


var castle_filter = cArray.filter(c =>  c[1] == 3 || c[0] == 0)






if(castle_filter[0][0] == castle1X && castle_filter[0][1] == castle1Y){

drag_piece = "CB1"

var this_piece = castle_filter[0]

var ydiff = (3 - this_piece[1]) 
var xdiff = (0 - this_piece[0]) 

canMoveCastle1 = function (toX, toY) {
  const x = castlePosition1[0];
  const y = castlePosition1[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff  && (dy) === ydiff) 
        
}

}


else if(castle_filter[0][0] == castle2X && castle_filter[0][1] == castle2Y){

drag_piece = "CB2"

var this_piece = castle_filter[0]

var ydiff = (3 - this_piece[1]) 
var xdiff = (0 - this_piece[0]) 

canMoveCastle2 = function (toX, toY) {
  const x = castlePosition2[0];
  const y = castlePosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff  && (dy) === ydiff) 
        
}






}

xOverlay = this_piece[0]
yOverlay = this_piece[1]








}

else if(/6/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 2 || c[0] == 0)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}
 
else if(/7/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 1 || c[0] == 0)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}
 
else if(/8/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 0 || c[0] == 0)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}
 
}

 else if(/b/.test(piece) == true){

  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 7 || c[0] == 1)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





}

else if(/2/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 6 || c[0] == 1)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}

else if(/3/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 5 || c[0] == 1)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}


else if(/4/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 4 || c[0] == 1)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}

else if(/5/.test(piece) == true) {



var castle_filter = castleArray.filter(c =>  c[1] == 3 || c[0] == 1)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}

else if(/6/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 2 || c[0] == 1)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}
 
else if(/7/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 1 || c[0] == 1)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





}

else if(/8/.test(piece) == true) {



var castle_filter = castleArray.filter(c =>  c[1] == 0 || c[0] == 1)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}
 

}

else if(/c/.test(piece) == true){

  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 7 || c[0] == 2)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}

else if(/2/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 6 || c[0] == 2)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





}

else if(/3/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 5 || c[0] == 2)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}


else if(/4/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 4 || c[0] == 2)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}

else if(/5/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 3 || c[0] == 2)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/6/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 2 || c[0] == 2)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}
 
else if(/7/.test(piece) == true) {



var castle_filter = castleArray.filter(c =>  c[1] == 1 || c[0] == 2)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/8/.test(piece) == true) {



var castle_filter = castleArray.filter(c =>  c[1] == 0 || c[0] == 2)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}




 }

else if(/d/.test(piece) == true){


  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 7 || c[0] == 3)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





}

else if(/2/.test(piece) == true) {



var castle_filter = castleArray.filter(c =>  c[1] == 6 || c[0] == 3)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





}

else if(/3/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 5 || c[0] == 3)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}


else if(/4/.test(piece) == true) {




var castle_filter = castleArray.filter(c =>  c[1] == 4 || c[0] == 3)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/5/.test(piece) == true) {



var castle_filter = castleArray.filter(c =>  c[1] == 3 || c[0] == 3)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}

else if(/6/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 2 || c[0] == 3)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}
 
else if(/7/.test(piece) == true) {



var castle_filter = castleArray.filter(c =>  c[1] == 1 || c[0] == 3)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/8/.test(piece) == true) {



var castle_filter = castleArray.filter(c =>  c[1] == 0 || c[0] == 3)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}



}


else if(/(e\d)/.test(piece) == true){

  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {



var castle_filter = castleArray.filter(c =>  c[1] == 7 || c[0] == 4)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






}

else if(/2/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 6 || c[0] == 4)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





}

else if(/3/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 5 || c[0] == 4)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}


else if(/4/.test(piece) == true) {



var castle_filter = castleArray.filter(c =>  c[1] == 4 || c[0] == 4)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}

else if(/5/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 3 || c[0] == 4)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}

else if(/6/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 2 || c[0] == 4)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}
else if(/7/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 1 || c[0] == 4)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}

else if(/8/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 0 || c[0] == 4)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





}



 }

else if(/f/.test(piece) == true){


  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {



var castle_filter = castleArray.filter(c =>  c[1] == 7 || c[0] == 5)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/2/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 6 || c[0] == 5)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






}

else if(/3/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 5 || c[0] == 5)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}


else if(/4/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 4 || c[0] == 5)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






}

else if(/5/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 3 || c[0] == 5)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





}

else if(/6/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 2 || c[0] == 5)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}
 
else if(/7/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 1 || c[0] == 5)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





}

else if(/8/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 0 || c[0] == 5)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}



}

else if(/g/.test(piece) == true){

  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 7 || c[0] == 6)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/2/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 6 || c[0] == 6)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/3/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 5 || c[0] == 6)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}


else if(/4/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 4 || c[0] == 6)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}

else if(/5/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 3 || c[0] == 6)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/6/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 2 || c[0] == 6)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}
 
else if(/7/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 1 || c[0] == 6)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}
else if(/8/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 0 || c[0] == 6)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}
 

}

else if(/h/.test(piece) == true){


  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {

  var castle_filter = castleArray.filter(c =>  c[1] == 7 || c[0] == 7)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/2/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 6 || c[0] == 7)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}

else if(/3/.test(piece) == true) {

 var castle_filter = castleArray.filter(c =>  c[1] == 5 || c[0] == 7)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}


else if(/4/.test(piece) == true) {


 var castle_filter = castleArray.filter(c =>  c[1] == 4 || c[0] == 7)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/5/.test(piece) == true) {

 var castle_filter = castleArray.filter(c =>  c[1] == 3 || c[0] == 7)

console.log("YEEESSSSSS")




if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}

else if(/6/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 2 || c[0] == 7)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}
 
else if(/7/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 1 || c[0] == 7)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}

else if(/8/.test(piece) == true) {



 var castle_filter = castleArray.filter(c =>  c[1] == 0 || c[0] == 7)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)

}

}

} //End Of Castle


else if(/Queen/.test(whiteone) == true){
drag_piece = "QB"
var this_piece = [queenX,queenY]
xOverlay = this_piece[0]
yOverlay = this_piece[1]
if (/a/.test(whiteone) == true){


  if(/0/.test(whiteone) == true) {


}

 else if(/1/.test(whiteone) == true) {


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/2/.test(whiteone) == true) {

var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/3/.test(whiteone) == true) {

var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}


else if(/4/.test(whiteone) == true) {

   ydiff = (4 - this_piece[1]) 
   xdiff = (0 - this_piece[0]) 






}

else if(/5/.test(whiteone) == true) {


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/6/.test(whiteone) == true) {

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}
 
else if(/7/.test(whiteone) == true) {


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}
 
else if(/8/.test(whiteone) == true) {



var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}




 }

 else if(/b/.test(whiteone) == true){

  if(/0/.test(whiteone) == true) {


}

 else if(/1/.test(whiteone) == true) {

var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/2/.test(whiteone) == true) {

var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}

else if(/3/.test(whiteone) == true) {

var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}


else if(/4/.test(whiteone) == true) {

var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)

}

else if(/5/.test(whiteone) == true) {


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}

else if(/6/.test(whiteone) == true) {

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}
 
else if(/7/.test(whiteone) == true) {

var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}

else if(/8/.test(whiteone) == true) {


var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}





}

else if(/c/.test(whiteone) == true){

  if(/0/.test(piece) == true) {


}

 else if(/1/.test(whiteone) == true) {


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/2/.test(whiteone) == true) {


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/3/.test(whiteone) == true) {


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}


else if(/4/.test(whiteone) == true) {

var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}

else if(/5/.test(whiteone) == true) {

var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}

else if(/6/.test(whiteone) == true) {

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}
 
else if(/7/.test(whiteone) == true) {

var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/8/.test(whiteone) == true) {


var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}



}

else if(/d/.test(whiteone) == true){


  if(/0/.test(whiteone) == true) {


}

 else if(/1/.test(whiteone) == true) {


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}

else if(/2/.test(whiteone) == true) {


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)

}

else if(/3/.test(whiteone) == true) {


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}


else if(/4/.test(whiteone) == true) {

var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}

else if(/5/.test(whiteone) == true) {

var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





}

else if(/6/.test(whiteone) == true) {




var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}
 
else if(/7/.test(whiteone) == true) {

var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/8/.test(whiteone) == true) {

var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}



}


else if(/(e\d)/.test(whiteone) == true){

  if(/0/.test(whiteone) == true) {


}

 else if(/1/.test(whiteone) == true) {

var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






}

else if(/2/.test(whiteone) == true) {

var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/3/.test(whiteone) == true) {

var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}


else if(/4/.test(whiteone) == true) {

var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





}

else if(/5/.test(whiteone) == true) {

var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






}

else if(/6/.test(whiteone) == true) {

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






}
 
else if(/7/.test(whiteone) == true) {

var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





}

else if(/8/.test(whiteone) == true) {

var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}
 

}

else if(/f/.test(whiteone) == true){


  if(/0/.test(whiteone) == true) {


}

 else if(/1/.test(whiteone) == true) {

var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






}

else if(/2/.test(whiteone) == true) {

var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}

else if(/3/.test(whiteone) == true) {


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)







}


else if(/4/.test(whiteone) == true) {

var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)








}

else if(/5/.test(whiteone) == true) {

var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)

}

else if(/6/.test(whiteone) == true) {

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)









}
 
else if(/7/.test(whiteone) == true) {


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}

else if(/8/.test(whiteone) == true) {


var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}


}

else if(/g/.test(whiteone) == true){

  if(/0/.test(whiteone) == true) {


}

 else if(/1/.test(whiteone) == true) {


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/2/.test(whiteone) == true) {

var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/3/.test(whiteone) == true) {

var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}


else if(/4/.test(whiteone) == true) {



var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





}


else if(/5/.test(whiteone) == true) {

var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}

else if(/6/.test(whiteone) == true) {

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}
 
else if(/7/.test(whiteone) == true) {


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}

else if(/8/.test(whiteone) == true) {

var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



} 




}

else if(/h/.test(whiteone) == true){


  if(/0/.test(whiteone) == true) {


}

 else if(/1/.test(whiteone) == true) {


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/2/.test(whiteone) == true) {


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}

else if(/3/.test(whiteone) == true) {


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}


else if(/4/.test(whiteone) == true) {


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





}

else if(/5/.test(whiteone) == true) {



var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





}

else if(/6/.test(whiteone) == true) {


var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}
 
else if(/7/.test(whiteone) == true) {


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}


else if(/8/.test(whiteone) == true) {


var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}


}

 canMoveQueen = function (toX, toY) {
  const x = queenPosition[0];
  const y = queenPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff) 
      
}




}// End Of Queen




else if(/King/.test(whiteone) == true){

drag_piece = "KB"

var this_piece = [kingX,kingY]

xOverlay = this_piece[0]
yOverlay = this_piece[1]

if (/a/.test(whiteone) == true){


  if(/0/.test(whiteone) == true) {


}

 else if(/1/.test(whiteone) == true) {


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}

else if(/2/.test(whiteone) == true) {


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}

else if(/3/.test(whiteone) == true) {



var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}


else if(/4/.test(whiteone) == true) {


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/5/.test(whiteone) == true) {



var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/6/.test(whiteone) == true) {


var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}
 
else if(/7/.test(whiteone) == true) {


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}
 
else if(/8/.test(whiteone) == true) {



var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}



}

 else if(/b/.test(whiteone) == true){

  if(/0/.test(whiteone) == true) {


}

 else if(/1/.test(whiteone) == true) {


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}

else if(/2/.test(whiteone) == true) {


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}

else if(/3/.test(whiteone) == true) {


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}


else if(/4/.test(whiteone) == true) {


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/5/.test(whiteone) == true) {


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/6/.test(whiteone) == true) {


var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}
 
else if(/7/.test(whiteone) == true) {


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}

 else if(/8/.test(whiteone) == true) {

var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}



}

else if(/c/.test(whiteone) == true){

  if(/0/.test(whiteone) == true) {


}

 else if(/1/.test(whiteone) == true) {

var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/2/.test(whiteone) == true) {

var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/3/.test(whiteone) == true) {


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}


else if(/4/.test(whiteone) == true) {


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/5/.test(whiteone) == true) {

var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}

else if(/6/.test(whiteone) == true) {

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}
 
else if(/7/.test(whiteone) == true) {

var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/8/.test(whiteone) == true) {

var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}



}

else if(/d/.test(whiteone) == true){


  if(/0/.test(whiteone) == true) {


}

 else if(/1/.test(whiteone) == true) {

var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/2/.test(whiteone) == true) {

var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/3/.test(whiteone) == true) {

var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}


else if(/4/.test(whiteone) == true) {

var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}

else if(/5/.test(whiteone) == true) {

var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}

else if(/6/.test(whiteone) == true) {

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}
 
else if(/7/.test(whiteone) == true) {

var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}

else if(/8/.test(whiteone) == true) {


var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}



}


else if(/e/.test(whiteone) == true){

  if(/0/.test(whiteone) == true) {


}

 else if(/1/.test(whiteone) == true) {

var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}

else if(/2/.test(whiteone) == true) {

var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/3/.test(whiteone) == true) {

var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}


else if(/4/.test(whiteone) == true) {

var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}


else if(/5/.test(whiteone) == true) {

var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/6/.test(whiteone) == true) {

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}
 
else if(/7/.test(whiteone) == true) {

var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/8/.test(whiteone) == true) {

var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

 


}

else if(/f/.test(whiteone) == true){


  if(/0/.test(whiteone) == true) {


}

 else if(/1/.test(whiteone) == true) {


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/2/.test(whiteone) == true) {


ydiff =  6 - this_piece[1] 
xdiff =  5 - this_piece[0] 




}

else if(/3/.test(whiteone) == true) {


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}


else if(/4/.test(whiteone) == true) {


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}

else if(/5/.test(whiteone) == true) {


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}

else if(/6/.test(whiteone) == true) {


var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}
 
else if(/7/.test(whiteone) == true) {


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/8/.test(whiteone) == true) {

var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}




}

else if(/(g\d)/.test(whiteone) == true){

  if(/0/.test(whiteone) == true) {


}

 else if(/1/.test(whiteone) == true) {

var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/2/.test(whiteone) == true) {


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}

else if(/3/.test(whiteone) == true) {

var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}


else if(/4/.test(whiteone) == true) {

var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/5/.test(whiteone) == true) {


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/6/.test(whiteone) == true) {

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}
 
else if(/7/.test(whiteone) == true) {


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}
else if(/8/.test(whiteone) == true) {

var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}
 

}

else if(/h/.test(whiteone) == true){


  if(/0/.test(whiteone) == true) {


}

 else if(/1/.test(whiteone) == true) {

var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


}

else if(/2/.test(whiteone) == true) {


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/3/.test(whiteone) == true) {

var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}


else if(/4/.test(whiteone) == true) {

var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/5/.test(whiteone) == true) {


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/6/.test(whiteone) == true) {

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}
 
else if(/7/.test(whiteone) == true) {

var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}
else if(/8/.test(whiteone) == true) {

var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}




}

canMoveKing = function (toX, toY) {
  const x = kingPosition[0];
  const y = kingPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === xdiff && (dy) === ydiff) 
        
}
  



  }// END of King






}













   if(drag_piece == "PB1" ){


    PIECE = PB1}


 else if(drag_piece == "PB2" ){


    PIECE = PB2}





 else if(drag_piece == "PB3" ){


    PIECE = PB3}


 else if(drag_piece == "PB4" ){


    PIECE = PB4}
  


  else if(drag_piece == "PB5" ){


    PIECE = PB5}

   else if(drag_piece == "PB6" ){


    PIECE = PB6}  
 


     else if(drag_piece == "PB7" ){


    PIECE = PB7}
 

 else if(drag_piece == "PB8" ){


    PIECE = PB8}






 else if(drag_piece == "BS1") {

  PIECE = BS1
 }


 else if(drag_piece == "BS2"){

  PIECE = BS2
 }


 else if(drag_piece == "BishopBoard1"){

  PIECE = BishopBoard1
 }

else if(drag_piece == "BishopBoard2"){

  PIECE = BishopBoard2
 }

 else if(drag_piece == "CB1"){

  PIECE = CB1
 }  

else if(drag_piece == "CB2"){

  PIECE = CB2
 }

 else if(drag_piece == "QB"){

  PIECE = QB
 }
    
else if(drag_piece == "KB"){

  PIECE = KB
 }
  


    else {
      console.log("ELSE IS TRUE")
      console.log(drag_piece)
      PIECE = PB6
    }



  // }


     
  console.log("XXXXXXX")
  console.log(drag_piece)
      
  


  return (
    <div key={i}
         style={{ width: '12.5%', height: '12.5%', color: "red",  backgroundColor: "blue",
         position: 'relative', zIndex: -{i}}}>
      <span id ={i} style={{position:'relative', zIndex: 0}}>

      <PIECE x = {x} 
          y = {y}>
        {this.renderPiece(x, y)}
              
      </PIECE>
      
    </span>
    </div>
  );
},

renderPiece: function (x, y) {
   knightX = this.props.knightPosition[0]
   knightY = this.props.knightPosition[1];
   knight2X = this.props.knightPosition2[0]
   knight2Y = this.props.knightPosition2[1]
   bishopX = this.props.bishopPosition[0]
   bishopY = this.props.bishopPosition[1]
   bishop2X = this.props.bishopPosition2[0]
   bishop2Y = this.props.bishopPosition2[1]
   pawn1X = this.props.pawnPosition1[0]
   pawn1Y = this.props.pawnPosition1[1]
   pawn2X = this.props.pawnPosition2[0]
   pawn2Y = this.props.pawnPosition2[1]
   pawn3X = this.props.pawnPosition3[0]
   pawn3Y = this.props.pawnPosition3[1]
   pawn4X = this.props.pawnPosition4[0]
   pawn4Y = this.props.pawnPosition4[1]
   pawn5X = this.props.pawnPosition5[0]
   pawn5Y = this.props.pawnPosition5[1]
   pawn6X = this.props.pawnPosition6[0]
   pawn6Y = this.props.pawnPosition6[1]
   pawn7X = this.props.pawnPosition7[0]
   pawn7Y = this.props.pawnPosition7[1]
   pawn8X = this.props.pawnPosition8[0]
   pawn8Y = this.props.pawnPosition8[1]
   castle1X = this.props.castlePosition1[0]
   castle1Y = this.props.castlePosition1[1]
   castle2X = this.props.castlePosition2[0]
   castle2Y = this.props.castlePosition2[1]
   queenX = this.props.queenPosition[0]
   queenY = this.props.queenPosition[1]
   kingX = this.props.kingPosition[0]
   kingY = this.props.kingPosition[1]
  
  Xarray = []
  Yarray = []
  pawnArrayx = []
  try {

     ECASTLE1X = ($("#ec1").offset().left - winx) / 62.5 
  
     ECASTLE1y = ($("#ec1").offset().top  - 97) / 62.5


  }


  catch(e) {

    ECASTLE1X = (ec1offsetx - winx) / 62.5 
  
    ECASTLE1y = (ec1offsety - 97) / 62.5
  
 
  }

  
  try {

     ECASTLE2X = ($("#ec2").offset().left - 433) / 62.5 
  
     ECASTLE2y = ($("#ec2").offset().top - 97) / 62.5


  }


  catch(e) {

      ECASTLE2X = (ec2offsetx - 433) / 62.5 
  
      ECASTLE2y = (ec2offsety - 97) / 62.5


  }
    



  try {

     EQUEENX = ($("#q").offset().left - 433) / 62.5 
  
     EQUEENY = ($("#q").offset().top - 97) / 62.5


  }


  catch(e) {

     EQUEENX = (eqoffsetx - 433) / 62.5 
  
     EQUEENY = (eqoffsety - 97) / 62.5


  }
    



  try {

     EKINGX = ($("#ek").offset().left - 433) / 62.5 
  
     EKINGY = ($("#ek").offset().top - 97) / 62.5


  }


  catch(e) {

     EKINGX = (ekoffsetx - 433) / 62.5 
  
     EKINGY = (ekoffsety - 97) / 62.5


  }







  








  try {

     EKNIGHT1X = ($("#ek1").offset().left - 433) / 62.5 
  
   EKNIGHT1Y = ($("#ek1").offset().top - 97) / 62.5


  }


  catch(e) {

  EKNIGHT1X = (ek1offsetx - 433) / 62.5 
  
   EKNIGHT1Y = (ek1offsety - 97) / 62.5


  }


 try {

     EKNIGHT2X = ($("#ek2").offset().left - 433) / 62.5 
  
   EKNIGHT2Y = ($("#ek2").offset().top - 97) / 62.5


  }


  catch(e) {

  EKNIGHT2X = (ek2offsetx - 433) / 62.5 
  
   EKNIGHT2Y = (ek2offsety - 97) / 62.5


  }
















 try {

     EBISHOP1X = ($("#eb").offset().left - 433) / 62.5 
  
   EBISHOP1Y = ($("#eb").offset().top - 97) / 62.5


  }

  catch(e) {
 
 EBISHOP1X = (eb1offsetx - 433) / 62.5

   EBISHOP1Y = (eb1offsety - 97) / 62.5
  }
  
      

try {

     EBISHOP2X = ($("#eb2").offset().left - 433) / 62.5 
  
   EBISHOP2Y = ($("#eb2").offset().top - 97) / 62.5


  }

  catch(e) {
 
EBISHOP2X = (eb2offsetx - 433) / 62.5

   EBISHOP2Y = (eb2offsety - 97) / 62.5
  }
  



















      try {

     EPAWN1X = ($("#ep").offset().left - 433) / 62.5 
  
   EPAWN1Y = ($("#ep").offset().top - 97) / 62.5


  }


  catch(e) {

  EPAWN1X = (ep1offsetxa - ep1offsetxa) / 62.5 
  
   EPAWN1Y = (ep1offsety - 97) / 62.5


  }


    try {

     EPAWN2X = ($("#ep2").offset().left - 433) / 62.5 
  
   EPAWN2Y = ($("#ep2").offset().top - 97) / 62.5


  }


  catch(e) {

  EPAWN2X = (ep2offsetx - 433) / 62.5 
  
   EPAWN2Y = (ep2offsety - 97) / 62.5


  }

    
    try {

     EPAWN3X = ($("#ep3").offset().left - 433) / 62.5 
  
   EPAWN3Y = ($("#ep3").offset().top - 97) / 62.5


  }


  catch(e) {

  EPAWN3X = (ep3offsetxa - ep1offsetxa) / 62.5 
  
   EPAWN3Y = (ep3offsety - 97) / 62.5


  }

















    try {

     EPAWN4X = ($("#ep4").offset().left - 433) / 62.5 
  
   EPAWN4Y = ($("#ep4").offset().top - 97) / 62.5


  }


  catch(e) {

  EPAWN4X = (ep4offsetx - 433) / 62.5 
  
   EPAWN4Y = (ep4offsety - 97) / 62.5


  }


    try {

     EPAWN5X = ($("#ep5").offset().left - 433) / 62.5 
  
   EPAWN5Y = ($("#ep5").offset().top - 97) / 62.5


  }


  catch(e) {

  EPAWN5X = (ep5offsetx - 433) / 62.5 
  
   EPAWN5Y = (ep5offsety - 97) / 62.5


  }

    try {

     EPAWN6X = ($("#ep6").offset().left - 433) / 62.5 
  
   EPAWN6Y = ($("#ep6").offset().top - 97) / 62.5


  }


  catch(e) {

  EPAWN6X = (ep6offsetx - 433) / 62.5 
  
   EPAWN6Y = (ep6offsety - 97) / 62.5


  }


    try {

     EPAWN7X = ($("#ep7").offset().left - 433) / 62.5 
  
   EPAWN7Y = ($("#ep7").offset().top - 97) / 62.5


  }


  catch(e) {

  EPAWN7X = (ep7offsetx - 433) / 62.5 
  
   EPAWN7Y = (ep7offsety - 97) / 62.5


  }




    try {

     EPAWN8X = ($("#ep8").offset().left - 433) / 62.5 
  
   EPAWN8Y = ($("#ep8").offset().top - 97) / 62.5


  }


  catch(e) {

  EPAWN8X = (ep8offsetx - 433) / 62.5 
  
   EPAWN8Y = (ep8offsety - 97) / 62.5


  }


















try{
console.log("BBBBBBB")
console.log(count)
console.log(overlayCount)
console.log(drag_piece)
console.log("Break")
// console.log($("#ec2").position().left)
// console.log($("#ec2").position().top)
// console.log($("#ek2").position().left)
// console.log($("#ek2").position().top)
// console.log($("#ep8").position().left)
// console.log($("#ep8").position().top)
// console.log(window.innerWidth)
// console.log(window.outerWidth)
}

catch(e){

  console.log("MMMMMMM")
}



 Xarray.push([ECASTLE1X,ECASTLE1y], [EBISHOP1X,EBISHOP1Y],[EPAWN1X, EPAWN1Y],
  [EPAWN2X,EPAWN2Y],[EPAWN3X,EPAWN3Y],[EPAWN4X,EPAWN4Y], [EPAWN5X,EPAWN5Y],
  [EPAWN6X,EPAWN6Y],[EPAWN7X,EPAWN7Y],[EPAWN8X, EPAWN8Y],[EKNIGHT1X,EKNIGHT1Y], 
  [EKNIGHT2X,EKNIGHT2Y],[ECASTLE2X,ECASTLE2y],[EBISHOP2X, EBISHOP2Y],[EKINGX,EKINGY],
  [EQUEENX,EQUEENY])

 Yarray.push([knightX,knightY],[knight2X,knight2Y], [bishopX,bishopY],[bishop2X, bishop2Y],
  [pawn1X,pawn1Y],[pawn2X,pawn2Y],[pawn3X,pawn3Y],[pawn4X,pawn4Y],[pawn5X,pawn5Y],[pawn6X,
  pawn6Y],[pawn7X,pawn7Y],[pawn8X,pawn8Y],[castle1X,castle1Y],[castle2X,castle2Y],[queenX,queenY],[kingX,kingY])

 pawnArrayx.push([EPAWN1X,EPAWN1Y],[EPAWN2X,EPAWN2Y],[EPAWN3X,EPAWN3X],[EPAWN4X,EPAWN4Y],[EPAWN5X,EPAWN5Y],[EPAWN6X,EPAWN6Y],
  [EPAWN7X,EPAWN7Y],[EPAWN8X,EPAWN8Y])


  // console.log(knightPosition[0])
  // console.log(count);
  
  

  // console.log("knightx" + " " + knightX)
  // console.log("knighty" + " " + knightY)
  // console.log("knight2X" + " " + knight2X)
  // console.log("knight2Y" + " " + knight2Y)


prevc = pcheck.slice(0)

pcheck = []

pcheck.push(knightX,knightY,knight2X,knight2Y, bishopX,bishopY,bishop2X, bishop2Y,
  pawn1X,pawn1Y,pawn2X,pawn2Y,pawn3X,pawn3Y,pawn4X,pawn4Y,pawn5X,pawn5Y,pawn6X,
  pawn6Y, pawn7X, pawn7Y, pawn8X, pawn8Y, castle1X, castle1Y, castle2X, castle2Y,
  queenX,queenY,kingX,kingY)

if(pcheck.toString() != prevc.toString()){

  count++;
}

  


  if(whosemove == "white"){

  

  if (x === knightX && y === knightY && kkillcount == 0  ) {
  
    return <K/>
  }
else if(x == knight2X && y == knight2Y) {

return <K2/>
  
}

else if(x == bishopX && y == bishopY){
  
  return <B1/>
  
}

else if(x == bishop2X && y == bishop2Y){

  return <B2/>

  
}


else if(x == pawn1X && y == pawn1Y){


  return <P1/>
}

else if(x == pawn2X && y == pawn2Y){


  return <P2/>
}


else if(x == pawn3X && y == pawn3Y){


  return <P3/>
}

else if(x == pawn4X && y == pawn4Y && P4kill == 0){

 let p = Xarray.some(function(c) {
return c[0] == pawn4X && c[1] == pawn4Y
    })

if(p === false){

  return <P4/>
}
else {

  P4kill++;
}
  



  
}

else if(x == pawn5X && y == pawn5Y && P5kill == 0){


//   let p = Xarray.some(function(c) {
// return c[0] == pawn5X && c[1] == pawn5Y
//     })

// if(p === false){

  return <P5/>
// }
// else {

//   P5kill++;
// }
}

else if(x == pawn6X && y == pawn6Y){


  return <P6/>
}

else if(x == pawn7X && y == pawn7Y){


  return <P7/>
}


else if(x == pawn8X && y == pawn8Y){


  return <P8/>
}

else if(x == castle1X && y == castle1Y && C1kill == 0){


  var a = Xarray.some(function(c) {
return c[0] == castle1X && c[1] == castle1Y
    })

if(a === false){

  return <C1/>
}
else {

  C1kill++;
}

}

else if(x == castle2X && y == castle2Y){


  return <C2/>
}

else if(x == queenX && y == queenY){


  return <Q/>
}

else if(x == kingX && y == kingY){


  return <KING/>
}



else if(x == EKNIGHT1X && y == EKNIGHT1Y && Ek1kill == 0){

return <EKnight/>  


}







else if( x == 0 && y == 1) {


  return <EPawn/>
}

else if( x == 1 && y == 1) {


  return <EPawn2/>
}

else if( x == EPAWN3X && y == EPAWN3Y && Ep3kill == 0) {


  
  return <EPawn3/>
}


else if( x == EPAWN4X && y == EPAWN4Y) {


  return <EPawn4/>
}


else if( x == EPAWN5X && y == EPAWN5Y) {


  return <EPawn5/>
}


else if( x == EPAWN6X && y == EPAWN6Y) {


  return <EPawn6/>
}

else if( x == EPAWN7X  && y == EPAWN7Y) {


  return <EPawn7/>
}


else if( x == EPAWN8X && y == EPAWN8Y) {


  return <EPawn8/>
}











else if(x == ECASTLE1X && y == ECASTLE1y && ECastle1kill == 0){




 return <ECastle1/> 

}

else if(x == EBISHOP1X && y == EBISHOP1Y){
return <EBishop/>

}




else if(x == EKINGX && y == EKINGY ){

return <EKing/>
 
}

else if(x == EQUEENX && y == EQUEENY){

  return <EQueen/>
}


else if(x == EKNIGHT2X && y == EKNIGHT2Y){

  return <EKnight2/>
}


else if(x == EBISHOP2X && y == EBISHOP2Y){

  return <EBishop2/>
}


else if(x == ECASTLE2X && y == ECASTLE2y){

  return <ECastle2/>
}




































}
else {


 if( x == EPAWN1X && y == EPAWN1Y) {


  return <EPawn/>
}

else if( x == EPAWN2X && y == EPAWN2Y) {


  return <EPawn2/>
}

else if( x == EPAWN3X && y == EPAWN3Y && Ep3kill == 0) {
// console.log("I WAS HERE")
// console.log(Ep3kill)

  return <EPawn3/>
}


else if( x == EPAWN4X && y == EPAWN4Y) {


  return <EPawn4/>
}


else if( x == EPAWN5X && y == EPAWN5Y) {


  return <EPawn5/>
}


else if( x == EPAWN6X && y == EPAWN6Y) {


  return <EPawn6/>
}

else if( x == EPAWN7X && y == EPAWN7Y) {


  return <EPawn7/>
}


else if( x == EPAWN8X && y == EPAWN8Y) {


  return <EPawn8/>
}




else if(x == ECASTLE1X && y == ECASTLE1y && ECastle1kill == 0  ){

 // console.log("CASTLEBLACK")
 //  console.log(Yarray)


  return <ECastle1/>






}

else if(x == EBISHOP1X && y == EBISHOP1Y){
return <EBishop/>

}


else if(x == EKNIGHT1X && y == EKNIGHT1Y && Ek1kill == 0){

return <EKnight/>  


}

else if(x == EQUEENX && y == EQUEENY ){

return <EQueen/>
 
}

else if(x == EKINGX && y == EKINGY){

  return <EKing/>
}


else if(x == EKNIGHT2X  && y == EKNIGHT2Y){

  
  return <EKnight2/>

}


else if(x == EBISHOP2X && y == EBISHOP2Y){

  return <EBishop2/>
}


else if(x == ECASTLE2X && y == ECASTLE2y){

  return <ECastle2/>
}


else if (x === knightX && y === knightY && kkillcount == 0  ) {
  
    return <K/>
  }
else if(x == knight2X && y == knight2Y) {

return <K2/>
  
}

else if(x == 7 && y == 3){
  
  
}

else if(x == bishopX && y == bishopY){
  
  return <B1/>
  
}

else if(x == bishop2X && y == bishop2Y){

  return <B2/>

  
}


else if(x == pawn1X && y == pawn1Y){


  return <P1/>
}

else if(x == pawn2X && y == pawn2Y){


  return <P2/>
}


else if(x == pawn3X && y == pawn3Y){


  return <P3/>
}

else if(x == pawn4X && y == pawn4Y && P4kill == 0) {


   let p = Xarray.some(function(c) {
return c[0] == pawn4X && c[1] == pawn4Y
    })

if(p === false){

  return <P4/>
}
else {

  P4kill++;
}
  
}

else if(x == pawn5X && y == pawn5Y && P5kill == 0){

let p = Xarray.some(function(c) {
return c[0] == pawn5X && c[1] == pawn5Y
    })

if(p === false){

  return <P5/>
}
else {

  P5kill++;
}
  



}

else if(x == pawn6X && y == pawn6Y){


  return <P6/>
}

else if(x == pawn7X && y == pawn7Y){


  return <P7/>
}


else if(x == pawn8X && y == pawn8Y){


  return <P8/>
}

else if(x == castle1X && y == castle1Y && C1kill == 0){


  return <C1/>
}

else if(x == castle2X && y == castle2Y){


  return <C2/>
}

else if(x == queenX && y == queenY){


  return <Q/>
}

else if(x == kingX && y == kingY){


  return <KING/>
}

















}

},




render: function () {
var squares = [];
    // console.log("rerendering")
    // console.log(BS1)
    
 console.log("the count is " + " " + count)

    for (let i = 0; i < 64; i++) {
      

 squares.push(this.renderSquare(i));
      

  //     else if(count ==  0) {
  //       // console.log("the count is 0 push bs1")
  //       squares.push(this.renderSquare(i,BS2));}

  //       else if (count == 1) {
  //         // console.log("the count is 1 push bs2")
  //         squares.push(this.renderSquare(i,BS2));

        
  //       }
    
  //     else if (count == 2) {
  //             // console.log("the count is 2 push bs1")
  //             squares.push(this.renderSquare(i,PB4));

  //     }
      
     
  //     else if (count == 3) {
  //             // console.log("the count is 2 push bs1")
  //             squares.push(this.renderSquare(i,BishopBoard2));

  //     }
      
       

      
  //     else if (count == 4) {
  //             // console.log("the count is 2 push bs1")
  //             squares.push(this.renderSquare(i,PB3));

  //     }
  


  // else if (count == 5) {
  //             // console.log("the count is 2 push bs1")
  //             squares.push(this.renderSquare(i,PB3));

  //     }



  //    else if (count == 6) {

  //     squares.push(this.renderSquare(i,BS1));

  //    }

  //   else {

  //     squares.push(this.renderSquare(i,PB5));

    // }

    

    }
    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative',
        zIndex: 0
      }}>

      {squares}
      </div>
    );
  }
});



// var Board = React.createClass({
//   propTypes: {
    

//     knightPosition2: PropTypes.arrayOf(
//       PropTypes.number.isRequired
//     ).isRequired,
  
// knightPosition: PropTypes.arrayOf(
//       PropTypes.number.isRequired
//     ).isRequired
  




//   },

//   renderSquare: function (i) {
//     var x = i % 8;
//     var y = Math.floor(i / 8);
//     var black = (x + y) % 2 === 1;

//     var knightX = this.props.knightPosition[0]
//     var knightY = this.props.knightPosition[1]
//     var knight2X = this.props.knightPosition2[0];
//     var knight2Y = this.props.knightPosition2[1]
//     if (x === 3 && y === 4){

//       var piece = <EPawn /> 
//     }
    
//     else if(x === knight2X && y === knight2Y){

      
//     }
    
//     else {

//       var piece = null;
//     }



//     return (
//       <div key={i}
//            style={{ width: '12.5%', height: '12.5%' }}>
//         <Square black={black}>
//           {piece}
//         </Square>
//       </div>
//     );
//   },

//   render: function () {
//     var squares = [];
//     for (let i = 0; i < 64; i++) {
//       squares.push(this.renderSquare(i));
//     }

//     return (
//       <div style={{
//         width: '100%',
//         height: '100%',
//         display: 'flex',
//         flexWrap: 'wrap'
//       }}>
//         {squares}
//       </div>
//     );
//   }
// });


















 var B = DragDropContext(HTML5Backend)(Board);



function dragState(){

   B = DragDropContext(HTML5Backend)(Board);
}

setInterval(dragState, 100);


var knightPosition = [1, 7];

var observer = null;

function emitChange() {
  observer(knightPosition2);

}

var observe = function (o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  } 

  observer = o;
  emitChange();
}



observe(function (knightPosition2) {
  ReactDOM.render(
    <span>
    
    <B knightPosition2={knightPosition2} knightPosition={knightPosition} 

      bishopPosition2={bishopPosition2} bishopPosition={bishopPosition}
      pawnPosition1={pawnPosition1} pawnPosition2={pawnPosition2}
      pawnPosition3={pawnPosition3} pawnPosition4={pawnPosition4}
      pawnPosition5={pawnPosition5} pawnPosition6={pawnPosition6}
      pawnPosition7={pawnPosition7} pawnPosition8={pawnPosition8}
      castlePosition1={castlePosition1} castlePosition2={castlePosition2}
      queenPosition={queenPosition} kingPosition={kingPosition}

    />
   
    </span>,
   
    document.getElementById('container')
  );
});

// $( "#wk" ).hover(function() {
//   $( this ).hide();
  
// });

function pawnDown(element, distance) {

$(element).animate(
                {
                        
                        
                        "top" : distance
                }, 
                1000
        );

count++










}



function pawnCaptureRight(element) {

$(element).animate(
                {
                        
                        
                        "top" : "62.5px",
                        "left" : "62.5px"
                }, 
                1000
        );
}






function BishopMove(element,top,left){


$(element).animate(
                {
                        
                        
                        "top" : top,
                        "left": left
                }, 
                1000
        );



}




function pieceMove(element,top,left) {

$(element).animate(
                {
                        
                        
                        "top" : top,
                        "left": left
                }, 
                1000
        );

count++;




}



var m = 0
var number = 0


function animate () {
console.log("COUNT")
console.log(count)

if (count == m){


var piece = blackmove[number]

 
  if(piece.length < 3) {


 if (piece.charAt(0) == 'a'){

   var which =  pawnArrayx.filter(c => c[0] == 0)
  

  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {


}

else if(/2/.test(piece) == true) {






}

else if(/3/.test(piece) == true) {


}


else if(/4/.test(piece) == true) {


}

else if(/5/.test(piece) == true) {


}

else if(/6/.test(piece) == true) {


}
 
else if(/7/.test(piece) == true) {


}
 





 }

 else if(piece.charAt(0) == 'b'){

   var which =  pawnArrayx.filter(c => c[0] == 1)


  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {


}

else if(/2/.test(piece) == true) {


}

else if(/3/.test(piece) == true) {


}


else if(/4/.test(piece) == true) {


}

else if(/5/.test(piece) == true) {


}

else if(/6/.test(piece) == true) {


}
 
else if(/7/.test(piece) == true) {


}

 















 }

else if(piece.charAt(0) == 'c'){

   var which =  pawnArrayx.filter(c => c[0] == 2)


  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {


}

else if(/2/.test(piece) == true) {


}

else if(/3/.test(piece) == true) {


}


else if(/4/.test(piece) == true) {


}

else if(/5/.test(piece) == true) {


}

else if(/6/.test(piece) == true) {


}
 
else if(/7/.test(piece) == true) {


}



















 }

else if(piece.charAt(0) == 'd'){

 var which =  pawnArrayx.filter(c => c[0] == 3)
  



  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 6)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (7 - this_pawn[1]) * 62.5 


pawnDown(element, distance.toString())
























}

else if(/2/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 5 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (6 - this_pawn[1]) * 62.5 


pawnDown(element, distance.toString())




















}

else if(/3/.test(piece) == true) {


var this_piece = which.filter(c => c[1] == 4 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (5 - this_pawn[1]) * 62.5 


pawnDown(element, distance.toString())


























}


else if(/4/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 3)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (4 - this_pawn[1]) * 62.5 


pawnDown(element, distance.toString())






























}

else if(/5/.test(piece) == true) {
var this_piece = which.filter(c => c[1] == 1 || c[1] == 2)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (3 - this_pawn[1]) * 62.5 


pawnDown(element, distance.toString())






























}

else if(/6/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 1)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (2 - this_pawn[1]) * 62.5 


pawnDown(element, distance.toString())







}
 
else if(/7/.test(piece) == true) {























}

else if(/8/.test(piece) == true) {


}

}


else if(piece.charAt(0) == 'e'){

 var which =  pawnArrayx.filter(c => c[0] == 4)
  



  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 6)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (7 - this_pawn[1]) * 62.5 


pawnDown(element, distance.toString())
























}

else if(/2/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 5 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (6 - this_pawn[1]) * 62.5 


pawnDown(element, distance.toString())




















}

else if(/3/.test(piece) == true) {


var this_piece = which.filter(c => c[1] == 4 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (5 - this_pawn[1]) * 62.5 


pawnDown(element, distance.toString())


























}


else if(/4/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 3)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (4 - this_pawn[1]) * 62.5 


pawnDown(element, distance.toString())






























}

else if(/5/.test(piece) == true) {
var this_piece = which.filter(c => c[1] == 1 || c[1] == 2)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (3 - this_pawn[1]) * 62.5 


pawnDown(element, distance.toString())






























}

else if(/6/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 1)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (2 - this_pawn[1]) * 62.5 


pawnDown(element, distance.toString())







}
 
else if(/7/.test(piece) == true) {























}

else if(/8/.test(piece) == true) {


}

}


else if(piece.charAt(0) == 'f'){

 var which =  pawnArrayx.filter(c => c[0] == 5)
  



  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 6)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (7 - this_pawn[1]) * 62.5 


pawnDown(element, distance.toString())
























}

else if(/2/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 5 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (6 - this_pawn[1]) * 62.5 


pawnDown(element, distance.toString())




















}

else if(/3/.test(piece) == true) {


var this_piece = which.filter(c => c[1] == 4 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (5 - this_pawn[1]) * 62.5 


pawnDown(element, distance.toString())


























}


else if(/4/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 3)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (4 - this_pawn[1]) * 62.5 


pawnDown(element, distance.toString())






























}

else if(/5/.test(piece) == true) {
var this_piece = which.filter(c => c[1] == 1 || c[1] == 2)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (3 - this_pawn[1]) * 62.5 


pawnDown(element, distance.toString())






























}

else if(/6/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 1)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (2 - this_pawn[1]) * 62.5 


pawnDown(element, distance.toString())







}
 
else if(/7/.test(piece) == true) {























}

else if(/8/.test(piece) == true) {


}

}



else if(piece.charAt(0) == 'g'){

 var which =  pawnArrayx.filter(c => c[0] == 6)
  



  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 6)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (7 - this_pawn[1]) * 62.5 


pawnDown(element, distance.toString())
























}

else if(/2/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 5 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (6 - this_pawn[1]) * 62.5 


pawnDown(element, distance.toString())




















}

else if(/3/.test(piece) == true) {


var this_piece = which.filter(c => c[1] == 4 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (5 - this_pawn[1]) * 62.5 


pawnDown(element, distance.toString())


























}


else if(/4/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 3)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (4 - this_pawn[1]) * 62.5 


pawnDown(element, distance.toString())






























}

else if(/5/.test(piece) == true) {
var this_piece = which.filter(c => c[1] == 1 || c[1] == 2)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (3 - this_pawn[1]) * 62.5 


pawnDown(element, distance.toString())






























}

else if(/6/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 1)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (2 - this_pawn[1]) * 62.5 


pawnDown(element, distance.toString())







}
 
else if(/7/.test(piece) == true) {























}

else if(/8/.test(piece) == true) {


}

}


else if(piece.charAt(0) == 'h'){

 var which =  pawnArrayx.filter(c => c[0] == 7)
  



  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 6)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (7 - this_pawn[1]) * 62.5 


pawnDown(element, distance.toString())
























}

else if(/2/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 5 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (6 - this_pawn[1]) * 62.5 


pawnDown(element, distance.toString())




















}

else if(/3/.test(piece) == true) {


var this_piece = which.filter(c => c[1] == 4 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (5 - this_pawn[1]) * 62.5 


pawnDown(element, distance.toString())


























}


else if(/4/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 3)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (4 - this_pawn[1]) * 62.5 


pawnDown(element, distance.toString())






























}

else if(/5/.test(piece) == true) {
var this_piece = which.filter(c => c[1] == 1 || c[1] == 2)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (3 - this_pawn[1]) * 62.5 


pawnDown(element, distance.toString())






























}

else if(/6/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 1)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)


var distance = (2 - this_pawn[1]) * 62.5 

pawnDown(element, distance.toString())







}
 
else if(/7/.test(piece) == true) {























}

else if(/8/.test(piece) == true) {


}

}
}


else if(piece.length == 4){


if(/ax/.test(piece) == true){
  var which =  pawnArrayx.filter(c => c[0] == 0)
  
  if(/1/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 6)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)




pieceMove(element, "62.5", "62.5")


}

else if(/2/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 5 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

 


pieceMove(element, "62.5", "62.5")




















}

else if(/3/.test(piece) == true) {


var this_piece = which.filter(c => c[1] == 4 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)




pieceMove(element,"62.5","62.5")

























}


else if(/4/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 3)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)



pieceMove(element,"62.5","62.5")






























}

else if(/5/.test(piece) == true) {
var this_piece = which.filter(c => c[1] == 1 || c[1] == 2)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)




pieceMove(element, "62.5", "62.5")






























}

else if(/6/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 1)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)



pieceMove(element, "62.5","62.5")



}
 


}



else if(/bx/.test(piece) == true){
 var which =  pawnArrayx.filter(c => c[0] == 1)

if(/a/.test(piece) == true) {


if(/1/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 6)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (7 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "-62.5")


}

else if(/2/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 5 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)




pieceMove(element, "62.5", "-62.5")




















}

else if(/3/.test(piece) == true) {


var this_piece = which.filter(c => c[1] == 4 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)




pieceMove(element,"62.5","-62.5")

























}


else if(/4/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 3)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)




pieceMove(element,"62.5","-62.5")






























}

else if(/5/.test(piece) == true) {
var this_piece = which.filter(c => c[1] == 1 || c[1] == 2)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)




pieceMove(element, "62.5", "-62.5")






























}

else if(/6/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 1)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)




pieceMove(element, "62.5","-62.5")



}
 


}


else if(/c/.test(piece) == true){


if(/1/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 6)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (7 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "62.5")


}

else if(/2/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 5 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)




pieceMove(element, "62.5", "62.5")




















}

else if(/3/.test(piece) == true) {


var this_piece = which.filter(c => c[1] == 4 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)




pieceMove(element,"62.5","62.5")

























}


else if(/4/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 3)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (4 - this_pawn[1]) * 62.5 


pieceMove(element,"62.5","62.5")






























}

else if(/5/.test(piece) == true) {
var this_piece = which.filter(c => c[1] == 1 || c[1] == 2)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (3 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "62.5")






























}

else if(/6/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 1)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (2 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5","62.5")


 


}

} //c ends here


} //bx ends


else if(/cx/.test(piece) == true){

if(/b/.test(piece) == true){


if(/1/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 6)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (7 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "-62.5")


}

else if(/2/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 5 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (6 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "-62.5")




















}

else if(/3/.test(piece) == true) {


var this_piece = which.filter(c => c[1] == 4 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (5 - this_pawn[1]) * 62.5 


pieceMove(element,"62.5","-62.5")

























}


else if(/4/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 3)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (4 - this_pawn[1]) * 62.5 


pieceMove(element,"62.5","-62.5")






























}

else if(/5/.test(piece) == true) {
var this_piece = which.filter(c => c[1] == 1 || c[1] == 2)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (3 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "-62.5")






























}

else if(/6/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 1)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (2 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5","-62.5")



}
 
}// end of b




else if(/d/.test(piece) == true){

if(/1/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 6)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (7 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "62.5")


}

else if(/2/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 5 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (6 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "62.5")




















}

else if(/3/.test(piece) == true) {


var this_piece = which.filter(c => c[1] == 4 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (5 - this_pawn[1]) * 62.5 


pieceMove(element,"62.5","62.5")

























}


else if(/4/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 3)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (4 - this_pawn[1]) * 62.5 


pieceMove(element,"62.5","62.5")






























}

else if(/5/.test(piece) == true) {
var this_piece = which.filter(c => c[1] == 1 || c[1] == 2)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (3 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "62.5")






























}

else if(/6/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 1)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (2 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5","62.5")



}
 


} // end of d


} //end of cx



else if(/dx/.test(piece) == true){
console.log("TRUETRUETRUE")
var which =  pawnArrayx.filter(c => c[0] == 3)


if(/c/.test(piece) == true){


if(/1/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 6)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (7 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "-62.5")


}

else if(/2/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 5 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (6 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "-62.5")




















}

else if(/3/.test(piece) == true) {


var this_piece = which.filter(c => c[1] == 4 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (5 - this_pawn[1]) * 62.5 


pieceMove(element,"62.5","-62.5")

























}


else if(/4/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 3)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (4 - this_pawn[1]) * 62.5 


pieceMove(element,"62.5","-62.5")






























}

else if(/5/.test(piece) == true) {
var this_piece = which.filter(c => c[1] == 1 || c[1] == 2)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (3 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "-62.5")






























}

else if(/6/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 1)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (2 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5","-62.5")



}
 

}// end of c


else if(/e/.test(piece) == true){

if(/1/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 6)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (7 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "62.5")


}

else if(/2/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 5 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (6 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "62.5")




















}

else if(/3/.test(piece) == true) {


var this_piece = which.filter(c => c[1] == 4 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (5 - this_pawn[1]) * 62.5 


pieceMove(element,"62.5","62.5")

























}


else if(/4/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 3)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (4 - this_pawn[1]) * 62.5 


pieceMove(element,"62.5","62.5")






























}

else if(/5/.test(piece) == true) {
var this_piece = which.filter(c => c[1] == 1 || c[1] == 2)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (3 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "62.5")






























}

else if(/6/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 1)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (2 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5","62.5")



}
 



}//end of e














}//end of dx

else if(/ex/.test(piece) == true){
var which =  pawnArrayx.filter(c => c[0] == 4)

if(/d/.test(piece) == true){


if(/1/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 6)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (7 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "-62.5")


}

else if(/2/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 5 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (6 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "-62.5")




















}

else if(/3/.test(piece) == true) {


var this_piece = which.filter(c => c[1] == 4 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (5 - this_pawn[1]) * 62.5 


pieceMove(element,"62.5","-62.5")

























}


else if(/4/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 3)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (4 - this_pawn[1]) * 62.5 


pieceMove(element,"62.5","-62.5")






























}

else if(/5/.test(piece) == true) {
var this_piece = which.filter(c => c[1] == 1 || c[1] == 2)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (3 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "-62.5")






























}

else if(/6/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 1)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (2 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5","-62.5")



}
 





}// end of d


else if(/f/.test(piece) == true){


if(/1/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 6)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (7 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "62.5")


}

else if(/2/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 5 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (6 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "62.5")




















}

else if(/3/.test(piece) == true) {


var this_piece = which.filter(c => c[1] == 4 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (5 - this_pawn[1]) * 62.5 


pieceMove(element,"62.5","62.5")

























}


else if(/4/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 3)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (4 - this_pawn[1]) * 62.5 


pieceMove(element,"62.5","62.5")






























}

else if(/5/.test(piece) == true) {
var this_piece = which.filter(c => c[1] == 1 || c[1] == 2)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (3 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "62.5")






























}

else if(/6/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 1)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (2 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5","62.5")



}
 



}// end of f

















}// end of ex



else if(/fx/.test(piece) == true){

var which = pawnArrayx.filter(c => c[0] == 5)


if(/e/.test(piece) == true){


if(/1/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 6)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (7 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "-62.5")


}

else if(/2/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 5 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (6 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "-62.5")




















}

else if(/3/.test(piece) == true) {


var this_piece = which.filter(c => c[1] == 4 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (5 - this_pawn[1]) * 62.5 


pieceMove(element,"62.5","-62.5")

























}


else if(/4/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 3)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (4 - this_pawn[1]) * 62.5 


pieceMove(element,"62.5","-62.5")






























}

else if(/5/.test(piece) == true) {
var this_piece = which.filter(c => c[1] == 1 || c[1] == 2)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (3 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "-62.5")






























}

else if(/6/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 1)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (2 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5","-62.5")



}
 


} // end of e


else if(/g/.test(piece) == true){

if(/1/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 6)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (7 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "62.5")


}

else if(/2/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 5 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (6 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "62.5")




















}

else if(/3/.test(piece) == true) {


var this_piece = which.filter(c => c[1] == 4 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (5 - this_pawn[1]) * 62.5 


pieceMove(element,"62.5","62.5")

























}


else if(/4/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 3)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (4 - this_pawn[1]) * 62.5 


pieceMove(element,"62.5","62.5")






























}

else if(/5/.test(piece) == true) {
var this_piece = which.filter(c => c[1] == 1 || c[1] == 2)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (3 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "62.5")






























}

else if(/6/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 1)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (2 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5","62.5")


}





}// end of g






} // end of fx


else if(/gx/.test(piece) == true) {

var which = pawnArrayx.filter(c => c[0] == 6)


if(/f/.test(piece) == true) {


if(/1/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 6)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (7 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "-62.5")


}

else if(/2/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 5 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (6 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "-62.5")




















}

else if(/3/.test(piece) == true) {


var this_piece = which.filter(c => c[1] == 4 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (5 - this_pawn[1]) * 62.5 


pieceMove(element,"62.5","-62.5")

























}


else if(/4/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 3)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (4 - this_pawn[1]) * 62.5 


pieceMove(element,"62.5","-62.5")






























}

else if(/5/.test(piece) == true) {
var this_piece = which.filter(c => c[1] == 1 || c[1] == 2)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (3 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "-62.5")






























}

else if(/6/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 1)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (2 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5","-62.5")



}
 

}// end of f


else if(/h/.test(piece) == true) {


if(/1/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 6)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (7 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "62.5")


}

else if(/2/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 5 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (6 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "62.5")





}

else if(/3/.test(piece) == true) {


var this_piece = which.filter(c => c[1] == 4 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (5 - this_pawn[1]) * 62.5 


pieceMove(element,"62.5","62.5")



}


else if(/4/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 3)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (4 - this_pawn[1]) * 62.5 


pieceMove(element,"62.5","62.5")





}

else if(/5/.test(piece) == true) {
var this_piece = which.filter(c => c[1] == 1 || c[1] == 2)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (3 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "62.5")




}

else if(/6/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 1)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (2 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5","62.5")




 


}




}// end of h




} // end of gx



else if(/hx/.test(piece) == true) {

var which = pawnArrayx.filter(c => c[0] == 7)


if(/g/.test(piece) == true) {


if(/1/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 6)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (7 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "-62.5")


}

else if(/2/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 5 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (6 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "-62.5")




















}

else if(/3/.test(piece) == true) {


var this_piece = which.filter(c => c[1] == 4 )


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (5 - this_pawn[1]) * 62.5 


pieceMove(element,"62.5","-62.5")

























}


else if(/4/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 3)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (4 - this_pawn[1]) * 62.5 


pieceMove(element,"62.5","-62.5")






























}

else if(/5/.test(piece) == true) {
var this_piece = which.filter(c => c[1] == 1 || c[1] == 2)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (3 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5", "-62.5")






























}

else if(/6/.test(piece) == true) {

var this_piece = which.filter(c => c[1] == 1)


var this_pawn = this_piece[0]

if(this_pawn[0] == EPAWN1X && this_pawn[1] == EPAWN1Y){

  var element = "#ep"
}

else if(this_pawn[0] == EPAWN2X && this_pawn[1] == EPAWN2Y){

  var element = "#ep2"
}

else if(this_pawn[0] == EPAWN3X && this_pawn[1] == EPAWN3Y){

  var element = "#ep3"
}

else if(this_pawn[0] == EPAWN4X && this_pawn[1] == EPAWN4Y){

  var element = "#ep4"
}

else if(this_pawn[0] == EPAWN5X && this_pawn[1] == EPAWN5Y){

  var element = "#ep5"
}

else if(this_pawn[0] == EPAWN6X && this_pawn[1] == EPAWN6Y){

  var element = "#ep6"
}

else if(this_pawn[0] == EPAWN7X && this_pawn[1] == EPAWN7Y){

  var element = "#ep7"
}

else if(this_pawn[0] == EPAWN8X && this_pawn[1] == EPAWN8Y){

  var element = "#ep8"
}

console.log("THHIIIIIIISSSSS")
console.log(element)

var distance = (2 - this_pawn[1]) * 62.5 


pieceMove(element, "62.5","-62.5")



}
 




























} // end of g



} //end of hx




}


// }























else {


if(/Bishop/.test(piece) == true){

var bishopArray = [[EBISHOP1X,EBISHOP1Y], [EBISHOP2X,EBISHOP2Y]]
console.log("BIIIISHHHOP")


if (/a/.test(piece) == true){


  if(/0/.test(piece) == true) {



var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (8 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)















}

 else if(/1/.test(piece) == true) {



var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)














}

else if(/2/.test(piece) == true) {





var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)











}

else if(/3/.test(piece) == true) {




var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)












}


else if(/4/.test(piece) == true) {



var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)













}

else if(/5/.test(piece) == true) {




var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)














}

else if(/6/.test(piece) == true) {




var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)












}
 
else if(/7/.test(piece) == true) {



var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)

}
 
else if(/8/.test(piece) == true) {



var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)

}




 



















 }

 else if(/b/.test(piece) == true){

  if(/0/.test(piece) == true) {


var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (8 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)















}

 else if(/1/.test(piece) == true) {


var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)
















}

else if(/2/.test(piece) == true) {



var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)
















}

else if(/3/.test(piece) == true) {



var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)















}


else if(/4/.test(piece) == true) {



var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)

















}

else if(/5/.test(piece) == true) {


var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)

















}

else if(/6/.test(piece) == true) {



var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)















}
 
else if(/7/.test(piece) == true) {


var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)

}

else if(/8/.test(piece) == true) {


var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)

}

 















 }

else if(/c/.test(piece) == 'c'){

  if(/0/.test(piece) == true) {



var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (8 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)














}

 else if(/1/.test(piece) == true) {



var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)














}

else if(/2/.test(piece) == true) {



var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)














}

else if(/3/.test(piece) == true) {



var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)












}


else if(/4/.test(piece) == true) {



var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)














}

else if(/5/.test(piece) == true) {



var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)














}

else if(/6/.test(piece) == true) {



var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)















}
 
else if(/7/.test(piece) == true) {


var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)

}

else if(/8/.test(piece) == true) {


var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)

}


















 }

else if(/d/.test(piece) == 'true'){


  if(/0/.test(piece) == true) {


var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (8 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)















}

 else if(/1/.test(piece) == true) {


var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)
















}

else if(/2/.test(piece) == true) {

var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)
















}

else if(/3/.test(piece) == true) {


var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)















}


else if(/4/.test(piece) == true) {


var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)













}

else if(/5/.test(piece) == true) {

var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)














}

else if(/6/.test(piece) == true) {


var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)














}
 
else if(/7/.test(piece) == true) {

var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)

}

else if(/8/.test(piece) == true) {

var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)

}


















 }


else if(/e/.test(piece) == true ){

  if(/0/.test(piece) == true) {


var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (8 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)




















}

 else if(/1/.test(piece) == true) {

var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)

















}

else if(/2/.test(piece) == true) {

var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)















}

else if(/3/.test(piece) == true) {


var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)



















}


else if(/4/.test(piece) == true) {


var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)

















}

else if(/5/.test(piece) == true) {

var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)

















}

else if(/6/.test(piece) == true) {


var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)













}
 
else if(/7/.test(piece) == true) {

var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)

}

 
else if(/8/.test(piece) == true) {

var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)

}


















 }

else if(/f/.test(piece) == true){


  if(/0/.test(piece) == true) {


var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (8 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)













}

 else if(/1/.test(piece) == true) {


var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)












}

else if(/2/.test(piece) == true) {


var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)















}

else if(/3/.test(piece) == true) {

var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)















}


else if(/4/.test(piece) == true) {

var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)













}

else if(/5/.test(piece) == true) {

var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)
















}

else if(/6/.test(piece) == true) {

var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)

















}
 
else if(/7/.test(piece) == true) {


var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)

}


else if(/8/.test(piece) == true) {


var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)

}
















 


 }

else if(/g/.test(piece) == true){

  console.log("GGGGGGG")
  if(/0/.test(piece) == true) {
var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (8 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)





}

 else if(/1/.test(piece) == true) {

var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)











}

else if(/2/.test(piece) == true) {

var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)













}

else if(/3/.test(piece) == true) {

var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)










}


else if(/4/.test(piece) == true) {

var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)










}

else if(/5/.test(piece) == true) {

var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)








}

else if(/6/.test(piece) == true) {

var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)











}
 
else if(/7/.test(piece) == true) {

console.log("777777777")

var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)

}

 
else if(/7/.test(piece) == true) {

console.log("777777777")

var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)






}

















 }

else if(/h/.test(piece) == true){


  if(/0/.test(piece) == true) {

    var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (8 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)













}

 else if(/1/.test(piece) == true) {


var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)













}

else if(/2/.test(piece) == true) {

var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)














}

else if(/3/.test(piece) == true) {

var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)













}


else if(/4/.test(piece) == true) {

var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)














}

else if(/5/.test(piece) == true) {

var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)










}

else if(/6/.test(piece) == true) {

var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)











}
 
else if(/7/.test(piece) == true) {

var this_piece = bishopArray[0]
var element = "#eb"

var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)







}

else if(/8/.test(piece) == true) {

var this_piece = bishopArray[1]
var element = "#eb2"

var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)







}






















 }

}


else if(/Knight/.test(piece) == true){

console.log("KNIGHTKNIGHTKNIGHT")
var knightArray = [[EKNIGHT1X,EKNIGHT1Y],[EKNIGHT2X,EKNIGHT2Y]]
console.log(piece)
console.log(/c/.test(piece))

if (/a/.test(piece) == true){
console.log("AAAAAAA")

  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {

var knight_filter = knightArray.filter(c => Math.abs(7 - c[1]) == 2 && Math.abs(0 - c[0]) == 1
|| Math.abs(7 - c[1]) == 1 && Math.abs(0 - c[0]) == 2)

if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}












var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)




































}

else if(/2/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(6 - c[1]) == 2 && Math.abs(0 - c[0]) == 1
|| Math.abs(6 - c[1]) == 1 && Math.abs(0 - c[0]) == 2)

if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}












var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)































}

else if(/3/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(5 - c[1]) == 2 && Math.abs(0 - c[0]) == 1
|| Math.abs(5 - c[1]) == 1 && Math.abs(0 - c[0]) == 2)

if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}












var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)





























}


else if(/4/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(4 - c[1]) == 2 && Math.abs(0 - c[0]) == 1
|| Math.abs(4 - c[1]) == 1 && Math.abs(0 - c[0]) == 2)

if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}












var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)

































}

else if(/5/.test(piece) == true) {

var knight_filter = knightArray.filter(c => Math.abs(3 - c[1]) == 2 && Math.abs(0 - c[0]) == 1
|| Math.abs(3 - c[1]) == 1 && Math.abs(0 - c[0]) == 2)

if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}












var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)

































}

else if(/6/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(2 - c[1]) == 2 && Math.abs(0 - c[0]) == 1
|| Math.abs(2 - c[1]) == 1 && Math.abs(0 - c[0]) == 2)

if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}












var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)

































}
 
else if(/7/.test(piece) == true) {

var knight_filter = knightArray.filter(c => Math.abs(1 - c[1]) == 2 && Math.abs(0 - c[0]) == 1
|| Math.abs(1 - c[1]) == 1 && Math.abs(0 - c[0]) == 2)

if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}












var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)

































}
 
else if(/8/.test(piece) == true){

var knight_filter = knightArray.filter(c => Math.abs(0 - c[1]) == 2 && Math.abs(0 - c[0]) == 1
|| Math.abs(0 - c[1]) == 1 && Math.abs(0 - c[0]) == 2)

if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}












var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)
































}




 


















 }

 else if(/b/.test(piece) == true){

  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(7 - c[1]) == 2 && Math.abs(1 - c[0]) == 1
|| Math.abs(7 - c[1]) == 1 && Math.abs(1 - c[0]) == 2)

if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}












var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)






























}

else if(/2/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(6 - c[1]) == 2 && Math.abs(1 - c[0]) == 1
|| Math.abs(6 - c[1]) == 1 && Math.abs(1 - c[0]) == 2)

if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}












var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)


































}

else if(/3/.test(piece) == true) {

var knight_filter = knightArray.filter(c => Math.abs(5 - c[1]) == 2 && Math.abs(1 - c[0]) == 1
|| Math.abs(5 - c[1]) == 1 && Math.abs(1 - c[0]) == 2)

if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}












var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)
































}


else if(/4/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(4 - c[1]) == 2 && Math.abs(1 - c[0]) == 1
|| Math.abs(4 - c[1]) == 1 && Math.abs(1 - c[0]) == 2)

if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}












var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)


































}

else if(/5/.test(piece) == true) {

var knight_filter = knightArray.filter(c => Math.abs(3 - c[1]) == 2 && Math.abs(1 - c[0]) == 1
|| Math.abs(3 - c[1]) == 1 && Math.abs(1 - c[0]) == 2)

if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}












var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)


































}

else if(/6/.test(piece) == true) {

var knight_filter = knightArray.filter(c => Math.abs(2 - c[1]) == 2 && Math.abs(1 - c[0]) == 1
|| Math.abs(2 - c[1]) == 1 && Math.abs(1 - c[0]) == 2)

if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}












var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)

































}
 
else if(/7/.test(piece) == true) {

var knight_filter = knightArray.filter(c => Math.abs(1 - c[1]) == 2 && Math.abs(1 - c[0]) == 1
|| Math.abs(1 - c[1]) == 1 && Math.abs(1 - c[0]) == 2)

if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}












var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)



































}

else if(/8/.test(piece) == true) {

var knight_filter = knightArray.filter(c => Math.abs(0 - c[1]) == 2 && Math.abs(1 - c[0]) == 1
|| Math.abs(0 - c[1]) == 1 && Math.abs(1 - c[0]) == 2)

if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}












var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)

























}








 }

else if(/c/.test(piece) == true){

 console.log("WE HAVE HIT C")


  if(/0/.test(piece) == true) {


var knight_filter = knightArray.filter(c => 8 - c[1] == Math.abs(2) && 2 - c[0] == Math.abs(1)
|| 8 - c[1] == Math.abs(1) && 2 - c[0] == Math.abs(2))

if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}












var distance_top = (8 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)



















}

 else if(/1/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(7 - c[1]) == 2 && Math.abs(2 - c[0]) == 1
|| Math.abs(7 - c[1]) == 1 && Math.abs(2 - c[0]) == 2)

if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}












var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)












}

else if(/2/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(6 - c[1]) == 2 && Math.abs(2 - c[0]) == 1
|| Math.abs(6 - c[1]) == 1 && Math.abs(2 - c[0]) == 2)

if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}












var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)





















}

else if(/3/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(5 - c[1]) == 2 && Math.abs(2 - c[0]) == 1
|| Math.abs(5 - c[1]) == 1 && Math.abs(2 - c[0]) == 2)

if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}












var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)
















}


else if(/4/.test(piece) == true) {

var knight_filter = knightArray.filter(c => Math.abs(4 - c[1]) == 2 && Math.abs(2 - c[0]) == 1
|| Math.abs(4 - c[1]) == 1 && Math.abs(2 - c[0]) == 2)

if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}












var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)


















}

else if(/5/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(3 - c[1]) == 2 && Math.abs(2 - c[0]) == 1
|| Math.abs(3 - c[1]) == 1 && Math.abs(2 - c[0]) == 2)

if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}












var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)






























}

else if(/6/.test(piece) == true) {

console.log("THE_KNIGHT_HAS_ARRIVED")


var knight_filter = knightArray.filter(c => Math.abs(2 - c[1]) == 2 && Math.abs(2 - c[0]) == 1
|| Math.abs(2 - c[1]) == 1 && Math.abs(2 - c[0]) == 2)

if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}












var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)











}
 
else if(/7/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(1 - c[1]) == 2 && Math.abs(2 - c[0]) == 1
|| Math.abs(1 - c[1]) == 1 && Math.abs(2 - c[0]) == 2)

if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}












var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)

}


else if(/8/.test(piece) == true){

var knight_filter = knightArray.filter(c => Math.abs(0 - c[1]) == 2 && Math.abs(2 - c[0]) == 1
|| Math.abs(0 - c[1]) == 1 && Math.abs(2 - c[0]) == 2)

if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}












var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)




























}
















 }

else if(/d/.test(piece) == true){


  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {

var knight_filter = knightArray.filter(c => Math.abs(7 - c[1]) == 2 && Math.abs(3 - c[0]) == 1
|| Math.abs(7 - c[1]) == 1 && Math.abs(3 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






























}

else if(/2/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(6 - c[1]) == 2 && Math.abs(3 - c[0]) == 1
|| Math.abs(6 - c[1]) == 1 && Math.abs(3 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)































}

else if(/3/.test(piece) == true) {

var knight_filter = knightArray.filter(c => Math.abs(5 - c[1]) == 2 && Math.abs(3 - c[0]) == 1
|| Math.abs(5 - c[1]) == 1 && Math.abs(3 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


































}


else if(/4/.test(piece) == true) {

var knight_filter = knightArray.filter(c => Math.abs(4 - c[1]) == 2 && Math.abs(3 - c[0]) == 1
|| Math.abs(4 - c[1]) == 1 && Math.abs(3 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)































}

else if(/5/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(3 - c[1]) == 2 && Math.abs(3 - c[0]) == 1
|| Math.abs(3 - c[1]) == 1 && Math.abs(3 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)

































}

else if(/6/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(2 - c[1]) == 2 && Math.abs(3 - c[0]) == 1
|| Math.abs(2 - c[1]) == 1 && Math.abs(3 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)
































}
 
else if(/7/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(1 - c[1]) == 2 && Math.abs(3 - c[0]) == 1
|| Math.abs(1 - c[1]) == 1 && Math.abs(3 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






























}

else if(/8/.test(piece) == true) {



var knight_filter = knightArray.filter(c => Math.abs(0 - c[1]) == 2 && Math.abs(3 - c[0]) == 1
|| Math.abs(0 - c[1]) == 1 && Math.abs(3 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






























}



















 }


else if(/e/.test(piece) == true){

  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(7 - c[1]) == 2 && Math.abs(4 - c[0]) == 1
|| Math.abs(7 - c[1]) == 1 && Math.abs(4 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)
































}

else if(/2/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(6 - c[1]) == 2 && Math.abs(4 - c[0]) == 1
|| Math.abs(6 - c[1]) == 1 && Math.abs(4 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)
































}

else if(/3/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(5 - c[1]) == 2 && Math.abs(4 - c[0]) == 1
|| Math.abs(5 - c[1]) == 1 && Math.abs(4 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



































}


else if(/4/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(4 - c[1]) == 2 && Math.abs(4 - c[0]) == 1
|| Math.abs(4 - c[1]) == 1 && Math.abs(4 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


































}

else if(/5/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(3 - c[1]) == 2 && Math.abs(4 - c[0]) == 1
|| Math.abs(3 - c[1]) == 1 && Math.abs(4 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






































}

else if(/6/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(2 - c[1]) == 2 && Math.abs(4 - c[0]) == 1
|| Math.abs(2 - c[1]) == 1 && Math.abs(4 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





































}
 
else if(/7/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(1 - c[1]) == 2 && Math.abs(4 - c[0]) == 1
|| Math.abs(1 - c[1]) == 1 && Math.abs(4 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)

































}

 else if(/8/.test(piece) == true) {

 var knight_filter = knightArray.filter(c => Math.abs(0 - c[1]) == 2 && Math.abs(4 - c[0]) == 1
|| Math.abs(0 - c[1]) == 1 && Math.abs(4 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)

























}




















 }

else if(/f/.test(piece) == true){


  if(/0/.test(piece) == true) {

var knight_filter = knightArray.filter(c => Math.abs(8 - c[1]) == 2 && Math.abs(5 - c[0]) == 1
|| Math.abs(8 - c[1]) == 1 && Math.abs(5 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (8 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





















}

 else if(/1/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(7 - c[1]) == 2 && Math.abs(5 - c[0]) == 1
|| Math.abs(7 - c[1]) == 1 && Math.abs(5 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




















}

else if(/2/.test(piece) == true) {

var knight_filter = knightArray.filter(c => Math.abs(6 - c[1]) == 2 && Math.abs(5 - c[0]) == 1
|| Math.abs(6 - c[1]) == 1 && Math.abs(5 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)

























}

else if(/3/.test(piece) == true) {

var knight_filter = knightArray.filter(c => Math.abs(5 - c[1]) == 2 && Math.abs(5 - c[0]) == 1
|| Math.abs(5 - c[1]) == 1 && Math.abs(5 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)
























}


else if(/4/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(4 - c[1]) == 2 && Math.abs(5 - c[0]) == 1
|| Math.abs(4 - c[1]) == 1 && Math.abs(5 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





























}

else if(/5/.test(piece) == true) {
var knight_filter = knightArray.filter(c => Math.abs(3 - c[1]) == 2 && Math.abs(5 - c[0]) == 1
|| Math.abs(3 - c[1]) == 1 && Math.abs(5 - c[0]) == 2)


console.log(5 - knightArray[1][0] == Math.abs(1))
console.log(2 - knightArray[1][1] == Math.abs(2))

console.log("JJJJJJJ")
console.log(knight_filter)
console.log(knightArray)


if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}












var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)



















}

else if(/6/.test(piece) == true) {

var knight_filter = knightArray.filter(c => Math.abs(2 - c[1]) == 2 && Math.abs(5 - c[0]) == 1
|| Math.abs(2 - c[1]) == 1 && Math.abs(5 - c[0]) == 2)


console.log(5 - knightArray[1][0] == Math.abs(1))
console.log(2 - knightArray[1][1] == Math.abs(2))

console.log("JJJJJJJ")
console.log(knight_filter)
console.log(knightArray)


if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}












var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

console.log(distance_left)
pieceMove(element, distance_top, distance_left)

















}
 
else if(/7/.test(piece) == true) {


  var knight_filter = knightArray.filter(c => Math.abs(1 - c[1]) == 2 && Math.abs(5 - c[0]) == 1
|| Math.abs(1 - c[1]) == 1 && Math.abs(5 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


















}


else if(/8/.test(piece) == true) {


  var knight_filter = knightArray.filter(c => Math.abs(0 - c[1]) == 2 && Math.abs(5 - c[0]) == 1
|| Math.abs(0 - c[1]) == 1 && Math.abs(5 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


















}

















 }

else if(/g/.test(piece) == true){

  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {

var knight_filter = knightArray.filter(c => Math.abs(7 - c[1]) == 2 && Math.abs(6 - c[0]) == 1
|| Math.abs(7 - c[1]) == 1 && Math.abs(6 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





























}

else if(/2/.test(piece) == true) {

var knight_filter = knightArray.filter(c => Math.abs(6 - c[1]) == 2 && Math.abs(6 - c[0]) == 1
|| Math.abs(6 - c[1]) == 1 && Math.abs(6 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






















}

else if(/3/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(5 - c[1]) == 2 && Math.abs(6 - c[0]) == 1
|| Math.abs(5 - c[1]) == 1 && Math.abs(6 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)
























}


else if(/4/.test(piece) == true) {

var knight_filter = knightArray.filter(c => Math.abs(4 - c[1]) == 2 && Math.abs(6 - c[0]) == 1
|| Math.abs(4 - c[1]) == 1 && Math.abs(6 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





























}

else if(/5/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(3 - c[1]) == 2 && Math.abs(6 - c[0]) == 1
|| Math.abs(3 - c[1]) == 1 && Math.abs(6 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


























}

else if(/6/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(2 - c[1]) == 2 && Math.abs(6 - c[0]) == 1
|| Math.abs(2 - c[1]) == 1 && Math.abs(6 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






























}
 
else if(/7/.test(piece) == true) {

var knight_filter = knightArray.filter(c => Math.abs(1 - c[1]) == 2 && Math.abs(6 - c[0]) == 1
|| Math.abs(1 - c[1]) == 1 && Math.abs(6 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






















}

else if(/8/.test(piece) == true) {


  var knight_filter = knightArray.filter(c => Math.abs(0 - c[1]) == 2 && Math.abs(6 - c[0]) == 1
|| Math.abs(0 - c[1]) == 1 && Math.abs(6 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


















}




























}

else if(/h/.test(piece) == true){


  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(7 - c[1]) == 2 && Math.abs(7 - c[0]) == 1
|| Math.abs(7 - c[1]) == 1 && Math.abs(7 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


























}

else if(/2/.test(piece) == true) {



var knight_filter = knightArray.filter(c => Math.abs(6 - c[1]) == 2 && Math.abs(7 - c[0]) == 1
|| Math.abs(6 - c[1]) == 1 && Math.abs(7 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






















}

else if(/3/.test(piece) == true) {



var knight_filter = knightArray.filter(c => Math.abs(5 - c[1]) == 2 && Math.abs(7 - c[0]) == 1
|| Math.abs(5 - c[1]) == 1 && Math.abs(7 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


























}


else if(/4/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(4 - c[1]) == 2 && Math.abs(7 - c[0]) == 1
|| Math.abs(4 - c[1]) == 1 && Math.abs(7 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


























}

else if(/5/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(3 - c[1]) == 2 && Math.abs(7 - c[0]) == 1
|| Math.abs(3 - c[1]) == 1 && Math.abs(7 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




























}

else if(/6/.test(piece) == true) {


var knight_filter = knightArray.filter(c => Math.abs(2 - c[1]) == 2 && Math.abs(7 - c[0]) == 1
|| Math.abs(2 - c[1]) == 1 && Math.abs(7 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




























}
 
else if(/7/.test(piece) == true) {

var knight_filter = knightArray.filter(c => Math.abs(1 - c[1]) == 2 && Math.abs(7 - c[0]) == 1
|| Math.abs(1 - c[1]) == 1 && Math.abs(7 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


























}

 
else if(/8/.test(piece) == true) {

var knight_filter = knightArray.filter(c => Math.abs(0 - c[1]) == 2 && Math.abs(7 - c[0]) == 1
|| Math.abs(0 - c[1]) == 1 && Math.abs(7 - c[0]) == 2)






if(knight_filter[0][0] == EKNIGHT1X && knight_filter[0][1] == EKNIGHT1Y){

var element = "#ek1"

var this_piece = knight_filter[0]

}


else if(knight_filter[0][0] == EKNIGHT2X && knight_filter[0][1] == EKNIGHT2Y){

var element = "#ek2"

var this_piece = knight_filter[0]

}


var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





















}




















}

}


else if(/Queen/.test(piece)== true){
var element = "#eq"
var this_piece = [EQUEENX,EQUEENY]

if (/a/.test(piece) == true){


  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






}

else if(/2/.test(piece) == true) {

var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)








}

else if(/3/.test(piece) == true) {

var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)








}


else if(/4/.test(piece) == true) {

var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)








}

else if(/5/.test(piece) == true) {


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)








}

else if(/6/.test(piece) == true) {

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)









}
 
else if(/7/.test(piece) == true) {


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)








}
 
else if(/8/.test(piece) == true) {



var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)







}




 }

 else if(/b/.test(piece) == true){

  if(/0/.test(piece) == true) {






}

 else if(/1/.test(piece) == true) {

var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)









}

else if(/2/.test(piece) == true) {

var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)










}

else if(/3/.test(piece) == true) {

var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)








}


else if(/4/.test(piece) == true) {

var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)








}

else if(/5/.test(piece) == true) {


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)









}

else if(/6/.test(piece) == true) {

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)









}
 
else if(/7/.test(piece) == true) {

var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)







}

else if(/8/.test(piece) == true) {


var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)









}
















 }

else if(/c/.test(piece) == true){

  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)









}

else if(/2/.test(piece) == true) {


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/3/.test(piece) == true) {


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)














}


else if(/4/.test(piece) == true) {

var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)















}

else if(/5/.test(piece) == true) {

var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)














}

else if(/6/.test(piece) == true) {

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)













}
 
else if(/7/.test(piece) == true) {

var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)








}

else if(/8/.test(piece) == true) {


var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)










}


















 }

else if(/d/.test(piece) == true){


  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}

else if(/2/.test(piece) == true) {


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)









}

else if(/3/.test(piece) == true) {


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)








}


else if(/4/.test(piece) == true) {

var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)








}

else if(/5/.test(piece) == true) {

var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





}

else if(/6/.test(piece) == true) {




var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)









}
 
else if(/7/.test(piece) == true) {

var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/8/.test(piece) == true) {

var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}



















 }


else if(/(e\d)/.test(piece) == true){

  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {

var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






}

else if(/2/.test(piece) == true) {

var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}

else if(/3/.test(piece) == true) {

var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}


else if(/4/.test(piece) == true) {

var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





}

else if(/5/.test(piece) == true) {

var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






}

else if(/6/.test(piece) == true) {

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






}
 
else if(/7/.test(piece) == true) {

var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





}

else if(/8/.test(piece) == true) {

var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)







}
 



















 }

else if(/f/.test(piece) == true){


  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {

var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






}

else if(/2/.test(piece) == true) {

var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




}

else if(/3/.test(piece) == true) {


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)







}


else if(/4/.test(piece) == true) {

var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)








}

else if(/5/.test(piece) == true) {

var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)









}

else if(/6/.test(piece) == true) {

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)









}
 
else if(/7/.test(piece) == true) {


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






}

else if(/8/.test(piece) == true) {


var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)












}

















 }

else if(/g/.test(piece) == true){

  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)









}

else if(/2/.test(piece) == true) {

var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)









}

else if(/3/.test(piece) == true) {

var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)







}


else if(/4/.test(piece) == true) {



var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





}


else if(/5/.test(piece) == true) {

var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






}

else if(/6/.test(piece) == true) {

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)







}
 
else if(/7/.test(piece) == true) {


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






}

else if(/8/.test(piece) == true) {

var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)







} 


















 }

else if(/h/.test(piece) == true){


  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)








}

else if(/2/.test(piece) == true) {


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)













}

else if(/3/.test(piece) == true) {


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)














}


else if(/4/.test(piece) == true) {


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)















}

else if(/5/.test(piece) == true) {



var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)














}

else if(/6/.test(piece) == true) {


var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)












}
 
else if(/7/.test(piece) == true) {


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)














}


else if(/8/.test(piece) == true) {


var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)












}




















 }



































































}

else if(/Castle/.test(piece)== true){

var castleArray = [[ECASTLE1X,ECASTLE1y],[ECASTLE2X,ECASTLE2y]]



if (/(a\d)/.test(piece) == true){


  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 7 || c[0] == 0)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




























}

else if(/2/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 6 || c[0] == 0)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


































}

else if(/3/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 5 || c[0] == 0)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






























}


else if(/4/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 4 || c[0] == 0)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



































}

else if(/5/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 3 || c[0] == 0)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


















}

else if(/6/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 2 || c[0] == 0)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





























}
 
else if(/7/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 1 || c[0] == 0)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




























}
 
else if(/8/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 0 || c[0] == 0)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)































}
 




 






 }

 else if(/b/.test(piece) == true){

  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 7 || c[0] == 1)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)
























}

else if(/2/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 6 || c[0] == 1)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)
































}

else if(/3/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 5 || c[0] == 1)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



























}


else if(/4/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 4 || c[0] == 1)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





























}

else if(/5/.test(piece) == true) {



var castle_filter = castleArray.filter(c =>  c[1] == 3 || c[0] == 1)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)

























}

else if(/6/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 2 || c[0] == 1)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



























}
 
else if(/7/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 1 || c[0] == 1)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)























}

else if(/8/.test(piece) == true) {



var castle_filter = castleArray.filter(c =>  c[1] == 0 || c[0] == 1)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




























}
 















 }

else if(/c/.test(piece) == true){

  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 7 || c[0] == 2)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)
































}

else if(/2/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 6 || c[0] == 2)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)































}

else if(/3/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 5 || c[0] == 2)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



























}


else if(/4/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 4 || c[0] == 2)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



























}

else if(/5/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 3 || c[0] == 2)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




























}

else if(/6/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 2 || c[0] == 2)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




























}
 
else if(/7/.test(piece) == true) {



var castle_filter = castleArray.filter(c =>  c[1] == 1 || c[0] == 2)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





























}

else if(/8/.test(piece) == true) {



var castle_filter = castleArray.filter(c =>  c[1] == 0 || c[0] == 2)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)

































}

















 }

else if(/d/.test(piece) == true){


  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 7 || c[0] == 3)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




























}

else if(/2/.test(piece) == true) {



var castle_filter = castleArray.filter(c =>  c[1] == 6 || c[0] == 3)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


































}

else if(/3/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 5 || c[0] == 3)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





























}


else if(/4/.test(piece) == true) {




var castle_filter = castleArray.filter(c =>  c[1] == 4 || c[0] == 3)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)




























}

else if(/5/.test(piece) == true) {



var castle_filter = castleArray.filter(c =>  c[1] == 3 || c[0] == 3)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



























}

else if(/6/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 2 || c[0] == 3)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)































}
 
else if(/7/.test(piece) == true) {



var castle_filter = castleArray.filter(c =>  c[1] == 1 || c[0] == 3)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)































}

else if(/8/.test(piece) == true) {



var castle_filter = castleArray.filter(c =>  c[1] == 0 || c[0] == 3)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)































}



















 }


else if(/(e\d)/.test(piece) == true){

  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {



var castle_filter = castleArray.filter(c =>  c[1] == 7 || c[0] == 4)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)























}

else if(/2/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 6 || c[0] == 4)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)
























}

else if(/3/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 5 || c[0] == 4)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)
























}


else if(/4/.test(piece) == true) {



var castle_filter = castleArray.filter(c =>  c[1] == 4 || c[0] == 4)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)























}

else if(/5/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 3 || c[0] == 4)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)

























}

else if(/6/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 2 || c[0] == 4)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



}
else if(/7/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 1 || c[0] == 4)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



























}

else if(/8/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 0 || c[0] == 4)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






















}




















 }

else if(/f/.test(piece) == true){


  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {



var castle_filter = castleArray.filter(c =>  c[1] == 7 || c[0] == 5)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)























}

else if(/2/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 6 || c[0] == 5)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)































}

else if(/3/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 5 || c[0] == 5)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)

































}


else if(/4/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 4 || c[0] == 5)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)
































}

else if(/5/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 3 || c[0] == 5)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





























}

else if(/6/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 2 || c[0] == 5)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






























}
 
else if(/7/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 1 || c[0] == 5)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






























}

else if(/8/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 0 || c[0] == 5)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)























}


















 }

else if(/g/.test(piece) == true){

  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 7 || c[0] == 6)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





























}

else if(/2/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 6 || c[0] == 6)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)
























}

else if(/3/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 5 || c[0] == 6)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


























}


else if(/4/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 4 || c[0] == 6)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)

























}

else if(/5/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 3 || c[0] == 6)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)

























}

else if(/6/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 2 || c[0] == 6)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)































}
 
else if(/7/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 1 || c[0] == 6)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





























}
else if(/8/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 0 || c[0] == 6)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



























}
 


















 }

else if(/h/.test(piece) == true){


  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {

  var castle_filter = castleArray.filter(c =>  c[1] == 7 || c[0] == 7)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



























}

else if(/2/.test(piece) == true) {


var castle_filter = castleArray.filter(c =>  c[1] == 6 || c[0] == 7)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)



























}

else if(/3/.test(piece) == true) {

 var castle_filter = castleArray.filter(c =>  c[1] == 5 || c[0] == 7)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)























}


else if(/4/.test(piece) == true) {


 var castle_filter = castleArray.filter(c =>  c[1] == 4 || c[0] == 7)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)
























}

else if(/5/.test(piece) == true) {

 var castle_filter = castleArray.filter(c =>  c[1] == 3 || c[0] == 7)

console.log("YEEESSSSSS")




if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






















}

else if(/6/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 2 || c[0] == 7)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)


























}
 
else if(/7/.test(piece) == true) {

var castle_filter = castleArray.filter(c =>  c[1] == 1 || c[0] == 7)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





























}

else if(/8/.test(piece) == true) {



 var castle_filter = castleArray.filter(c =>  c[1] == 0 || c[0] == 7)






if(castle_filter[0][0] == ECASTLE1X && castle_filter[0][1] == ECASTLE1y){

var element = "#ec1"

var this_piece = castle_filter[0]

}


else if(castle_filter[0][0] == ECASTLE2X && castle_filter[0][1] == ECASTLE2y){

var element = "#ec2"

var this_piece = castle_filter[0]

}


var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)

}

}

}

else if(/King/.test(piece)== true){

var element = "#ek"

var this_piece = [EKINGX,EKINGY]



if (/a/.test(piece) == true){


  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)









}

else if(/2/.test(piece) == true) {


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)









}

else if(/3/.test(piece) == true) {



var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)









}


else if(/4/.test(piece) == true) {


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)








}

else if(/5/.test(piece) == true) {



var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)









}

else if(/6/.test(piece) == true) {


var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)








}
 
else if(/7/.test(piece) == true) {


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)








}
 
else if(/8/.test(piece) == true) {



var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (0 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)












}










}

 else if(/b/.test(piece) == true){

  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






}

else if(/2/.test(piece) == true) {


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)







}

else if(/3/.test(piece) == true) {


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)







}


else if(/4/.test(piece) == true) {


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)








}

else if(/5/.test(piece) == true) {


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)







}

else if(/6/.test(piece) == true) {


var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)







}
 
else if(/7/.test(piece) == true) {


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)







}

 else if(/8/.test(piece) == true) {

var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (1 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)











}







}

else if(/c/.test(piece) == true){

  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {

var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)









}

else if(/2/.test(piece) == true) {

var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)









}

else if(/3/.test(piece) == true) {


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)








}


else if(/4/.test(piece) == true) {


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)









}

else if(/5/.test(piece) == true) {

var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)








}

else if(/6/.test(piece) == true) {

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)








}
 
else if(/7/.test(piece) == true) {

var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)









}

else if(/8/.test(piece) == true) {

var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (2 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)












}



}

else if(/d/.test(piece) == true){


  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {

var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)











}

else if(/2/.test(piece) == true) {

var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)












}

else if(/3/.test(piece) == true) {

var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)












}


else if(/4/.test(piece) == true) {

var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)













}

else if(/5/.test(piece) == true) {

var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)












}

else if(/6/.test(piece) == true) {

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)













}
 
else if(/7/.test(piece) == true) {

var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)












}

else if(/8/.test(piece) == true) {


var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (3 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)







}



}


else if(/e/.test(piece) == true){

  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {

var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)







}

else if(/2/.test(piece) == true) {

var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)









}

else if(/3/.test(piece) == true) {

var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)








}


else if(/4/.test(piece) == true) {

var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)









}


else if(/5/.test(piece) == true) {

var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)








}

else if(/6/.test(piece) == true) {

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)







}
 
else if(/7/.test(piece) == true) {

var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)





}

else if(/8/.test(piece) == true) {

var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (4 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)







}

 


}

else if(/f/.test(piece) == true){


  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {


var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)






}

else if(/2/.test(piece) == true) {


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)







}

else if(/3/.test(piece) == true) {


var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)







}


else if(/4/.test(piece) == true) {


var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)










}

else if(/5/.test(piece) == true) {


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)










}

else if(/6/.test(piece) == true) {


var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)











}
 
else if(/7/.test(piece) == true) {


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)










}

else if(/8/.test(piece) == true) {

var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (5 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)















}









}

else if(/(g\d)/.test(piece) == true){

  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {

var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)









}

else if(/2/.test(piece) == true) {


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)










}

else if(/3/.test(piece) == true) {

var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)







}


else if(/4/.test(piece) == true) {

var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)








}

else if(/5/.test(piece) == true) {


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)









}

else if(/6/.test(piece) == true) {

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)








}
 
else if(/7/.test(piece) == true) {


var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)









}
else if(/8/.test(piece) == true) {

var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (6 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)







}
 

}

else if(/h/.test(piece) == true){


  if(/0/.test(piece) == true) {


}

 else if(/1/.test(piece) == true) {

var distance_top = (7 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)







}

else if(/2/.test(piece) == true) {


var distance_top = (6 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)











}

else if(/3/.test(piece) == true) {

var distance_top = (5 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)












}


else if(/4/.test(piece) == true) {

var distance_top = (4 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)










}

else if(/5/.test(piece) == true) {


var distance_top = (3 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)









}

else if(/6/.test(piece) == true) {

var distance_top = (2 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)










}
 
else if(/7/.test(piece) == true) {

var distance_top = (1 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)










}
else if(/8/.test(piece) == true) {

var distance_top = (0 - this_piece[1]) * 62.5
var distance_left = (7 - this_piece[0]) * 62.5

pieceMove(element, distance_top, distance_left)











}




}


  }



}

m += 2
number += 1

}
}


setInterval(animate, 100);


function checkOffset(){
console.log("KDFSKFSDKF")
console.log(drag_piece)
console.log(overlayCount)
console.log(count_number)
try {
  ec2offsety = $("#ec2").offset().top
  ec2offsetx = $("#ec2").offset().left
  }
  
catch(e){

  // console.log("this piece has been captured")
}

  
try {
  var eptop = $("#ec1").postion().top 
  ec1offsety = eptop
 var epleft = $("#ec1").postion().left  
 ec1offsetx = epleft
console.log("HHHHHHHH")
console.log(eptop)
console.log(epleft)

 }

catch(e) {

  // console.log("this piece has been captured")
}

try {
 var bisht = $("#eb").offset().top 
 eb1offsety = bisht
 var bishl = $("#eb").offset().left 
eb1offsetx = bishl
  }

  catch(e){

    // console.log("this piece has been captured")
  }

  
try {

  eb2offsety = $("#eb2").offset().top
  eb2offsetx = $("#eb2").offset().left
}

catch(e){
// console.log("this piece has been captured")

}
  
try {

  ek1offsety = $("#ek1").offset().top
  ek1offsetx = $("#ek1").offset().left
 }
 
catch(e){

  // console.log("this piece has been captured")
}

try {
 ek2offsety = $("#ek2").offset().top
  ek2offsetx = $("#ek2").offset().left
}

catch(e){

  // console.log("this piece has been captured")
}


try {
  ep3offsety = $("#ep3").offset().top
ep3offsetx = $("#ep3").offset().left

}
catch(e){

  // console.log("this piece has been captured")
}

try {
ep1offsety = $("#ep").offset().top
ep1offsetx = $("#ep").offset().left


}
catch(e){

  // console.log("this piece has been captured")
}

try {
ep2offsety = $("#ep2").offset().top
ep2offsetx = $("#ep2").offset().left
}
catch(e){

  // console.log("this piece has been captured")
 
}
try {
ep4offsety = $("#ep4").offset().top
ep4offsetx = $("#ep4").offset().left
}
catch(e){

  // console.log("this piece has been captured")
}
try {
ep5offsety = $("#ep5").offset().top
ep5offsetx = $("#ep5").offset().left
}
catch(e){

  // console.log("this piece has been captured")
}
try {
ep6offsety = $("#ep6").offset().top
ep6offsetx = $("#ep6").offset().left
}
catch(e){

  // console.log("this piece has been captured")
}
try {
ep7offsety = $("#ep7").offset().top
ep7offsetx = $("#ep7").offset().left
}
catch(e){

  // console.log("this piece has been captured")
}

try {

ep8offsety = $("#ep8").offset().top
ep8offsetx = $("#ep8").offset().left
}
catch(e){

  // console.log("this piece has been captured")
}
try {
eqoffsety = $("#eq").offset().top
eqoffsetx = $("#eq").offset().left

}
catch(e){

  // console.log("this piece has been captured")
}

try {
ekoffsety = $("#ek").offset().top
ekoffsetx = $("#ek").offset().left


}
catch(e){

  // console.log("this piece has been captured")
}









  





















  // console.log("CASTLE")
  // console.log(eptop)
  //  console.log(epleft)
  // console.log("BISHOP")
  // console.log(bisht)
  //  console.log(bishl)
  //  console.log("KNIGHT")
  //  console.log(eknt)
  //  console.log(eknl)


// console.log(prevept)
// console.log(prevepl)
// console.log("break")









}

setInterval(checkOffset, 100);





// function moveAnimate(element, newParent){
//     //Allow passing in either a jQuery object or selector
//     element = $(element);
//     newParent= $(newParent);

//     var oldOffset = element.offset();
//     element.appendTo(newParent);
//     var newOffset = element.offset();

//     var temp = element.clone().appendTo('body');
//     temp.css({
//         'position': 'absolute',
//         'left': oldOffset.left,
//         'top': oldOffset.top,
//         'z-index': 1000
//     });
//     element.hide();
//     temp.animate({'top': newOffset.top, 'left': newOffset.left}, 'slow', function(){
//        element.show();
//        temp.remove();
//     });
// }

// moveAnimate("#ep", "35" )
