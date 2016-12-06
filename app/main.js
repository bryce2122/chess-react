import {Motion, spring} from 'react-motion';
import range from 'lodash.range';
var React = require('react');
var ReactDOM = require('react-dom');
var DragDropContext = require('react-dnd').DragDropContext
var square;
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
var prevept;
var prevepl;
var kntop = 0
var knleft = 0
var enemycount = 0

var PropTypes = React.PropTypes;
var eptop = 265
var epleft = 133
var epkillcount = 0;

var a;
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
var ec1offsetx = 8
var ec1offsety = 15
var ec2offsetx = 445.5
var ec2offsety = 15
var C2kill = 0;


var eb1offsetx = 133
var eb1offsety = 15
var Eb1kill = 0;

var eb2offsetx = 320.5
var eb2offsety = 15
var Eb2kill = 0;





var Ep1kill = 0;

var ep1offsety = 77.5
var ep1offsetx = 8
var Ep1kill = 0;
var ep2offsety = 77.5
var ep2offsetx = 70.5
var Ep2kill = 0;
var ep3offsety = 77.5
var ep3offsetx = 133
var Ep3kill = 0;
var ep4offsety = 77.5
var ep4offsetx = 195.5
var Ep4kill = 0;
var ep5offsety = 77.5
var ep5offsetx = 258
var Ep5kill = 0;
var ep6offsety = 77.5
var ep6offsetx = 320.5
var Ep6kill = 0;
var ep7offsety = 77.5
var ep7offsetx = 383
var Ep7kill = 0;
var ep8offsety = 77.5
var ep8offsetx = 445.5
var Ep8kill = 0;


var eqoffsetx = 195.5
var eqoffsety = 15;
var Eqkill = 0;




var ekoffsetx = 258
var ekoffsety = 15;
var Ekkill = 0;





var ek1offsetx = 70.5
var ek1offsety = 15
var Ek1kill = 0;
var ek2offsetx = 383
var ek2offsety = 15
var Ek2kill = 0;








// Components 

//Constants 
var Xarray = []
var Yarray = []
// Diameter of the main button in pixels





























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
        position: 'relative'
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
        position: 'relative'
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
        position: 'relative'
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
  emitChange();
}

var canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === -1 && (dy) === -2) 
        
}

var moveBishop = function (toX, toY) {
  bishopPosition = [toX, toY];
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
  emitChange();
}

var canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}

var movePawn1 = function (toX, toY) {
  pawnPosition1 = [toX, toY];
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
  emitChange();
}

var canMovePawn3 = function (toX, toY) {
  const x = pawnPosition3[0];
  const y = pawnPosition3[1];
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}


var movePawn4 = function (toX, toY) {
  pawnPosition4 = [toX, toY];
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
  emitChange();
}

var canMovePawn5 = function (toX, toY) {
  const x = pawnPosition5[0];
  const y = pawnPosition5[1];
  const dx = toX - x;
  const dy = toY - y;

  return (dy === -1 && dx === 0);
}

var movePawn6 = function (toX, toY) {
  pawnPosition6 = [toX, toY];
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
  emitChange();
}

var canMovePawn1 = function (toX, toY) {
  const x = pawnPosition7[0];
  const y = pawnPosition7[1];
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}


var movePawn8 = function (toX, toY) {
  pawnPosition8 = [toX, toY];
  emitChange();
}

var canMovePawn1 = function (toX, toY) {
  const x = pawnPosition8[0];
  const y = pawnPosition8[1];
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}




var moveQueen = function (toX, toY) {
  queenPosition = [toX, toY];
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
        zIndex: 3
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
        {x == 4 && y == 6 && count == -1 && this.renderOverlay('blue')}
        {x == 6 && y == 7 && count == 1 && this.renderOverlay('blue')}
        {x == 3 && y == 6 && count == 2 && this.renderOverlay('blue')}
        {x == 5 && y == 5 && count == 5 && this.renderOverlay('blue')}
        {x == 1 && y == 7 && count == 6 && this.renderOverlay('blue')}
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

try { var ep3t = ($("#ep3").offset().top - 15) % 62.5 == 0
var ep3l = ( $("#ep3").offset().left- 8) % 62.5 == 0
    
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

var ek1t = ($("#ek1").offset().top - 15) % 62.5 == 0
var ek1l = ( $("#ek1").offset().left- 8) % 62.5 == 0
    
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



var t = ($("#ec1").offset().top - 15) % 62.5 == 0
var l = ( $("#ec1").offset().left- 8) % 62.5 == 0

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
 // console.log(kn)
  
  // var black = (x + y) % 2 === 1;




     

      
  return (
    <div key={i}
         style={{ width: '12.5%', height: '12.5%', color: "red",  backgroundColor: "blue",
         position: 'relative', zIndex: -{i}}}>
      <span id ={i} style={{position:'relative', zIndex: 0}}>

      <BS x = {x} 
          y = {y}>
        {this.renderPiece(x, y)}
              
      </BS>
      
    </span>
    </div>
  );
},

renderPiece: function (x, y) {
  var knightX = this.props.knightPosition[0]
  var knightY = this.props.knightPosition[1];
  var knight2X = this.props.knightPosition2[0]
  var knight2Y = this.props.knightPosition2[1]
  var bishopX = this.props.bishopPosition[0]
  var bishopY = this.props.bishopPosition[1]
  var bishop2X = this.props.bishopPosition2[0]
  var bishop2Y = this.props.bishopPosition2[1]
  var pawn1X = this.props.pawnPosition1[0]
  var pawn1Y = this.props.pawnPosition1[1]
  var pawn2X = this.props.pawnPosition2[0]
  var pawn2Y = this.props.pawnPosition2[1]
  var pawn3X = this.props.pawnPosition3[0]
  var pawn3Y = this.props.pawnPosition3[1]
  var pawn4X = this.props.pawnPosition4[0]
  var pawn4Y = this.props.pawnPosition4[1]
  var pawn5X = this.props.pawnPosition5[0]
  var pawn5Y = this.props.pawnPosition5[1]
  var pawn6X = this.props.pawnPosition6[0]
  var pawn6Y = this.props.pawnPosition6[1]
  var pawn7X = this.props.pawnPosition7[0]
  var pawn7Y = this.props.pawnPosition7[1]
  var pawn8X = this.props.pawnPosition8[0]
  var pawn8Y = this.props.pawnPosition8[1]
  var castle1X = this.props.castlePosition1[0]
  var castle1Y = this.props.castlePosition1[1]
  var castle2X = this.props.castlePosition2[0]
  var castle2Y = this.props.castlePosition2[1]
  var queenX = this.props.queenPosition[0]
  var queenY = this.props.queenPosition[1]
  var kingX = this.props.kingPosition[0]
  var kingY = this.props.kingPosition[1]
  
  Xarray = []
  Yarray = []
  
  try {

    var ECASTLE1X = ($("#ec1").offset().left - 8) / 62.5 
  
  var ECASTLE1y = ($("#ec1").offset().top - 15) / 62.5


  }


  catch(e) {

 var ECASTLE1X = (ec1offsetx - 8) / 62.5 
  
  var ECASTLE1y = (ec1offsety - 15) / 62.5


  }

  
  try {

    var ECASTLE2X = ($("#ec2").offset().left - 8) / 62.5 
  
  var ECASTLE2y = ($("#ec2").offset().top - 15) / 62.5


  }


  catch(e) {

 var ECASTLE2X = (ec2offsetx - 8) / 62.5 
  
  var ECASTLE2y = (ec2offsety - 15) / 62.5


  }
    



  try {

    var EQUEENX = ($("#q").offset().left - 8) / 62.5 
  
  var EQUEENY = ($("#q").offset().top - 15) / 62.5


  }


  catch(e) {

 var EQUEENX = (eqoffsetx - 8) / 62.5 
  
  var EQUEENY = (eqoffsety - 15) / 62.5


  }
    



  try {

    var EKINGX = ($("#ek").offset().left - 8) / 62.5 
  
  var EKINGY = ($("#ek").offset().top - 15) / 62.5


  }


  catch(e) {

 var EKINGX = (ekoffsetx - 8) / 62.5 
  
  var EKINGY = (ekoffsety - 15) / 62.5


  }







  








  try {

    var EKNIGHT1X = ($("#ek1").offset().left - 8) / 62.5 
  
  var EKNIGHT1Y = ($("#ek1").offset().top - 15) / 62.5


  }


  catch(e) {

 var EKNIGHT1X = (ek1offsetx - 8) / 62.5 
  
  var EKNIGHT1Y = (ek1offsety - 15) / 62.5


  }


 try {

    var EKNIGHT2X = ($("#ek2").offset().left - 8) / 62.5 
  
  var EKNIGHT2Y = ($("#ek2").offset().top - 15) / 62.5


  }


  catch(e) {

 var EKNIGHT2X = (ek2offsetx - 8) / 62.5 
  
  var EKNIGHT2Y = (ek2offsety - 15) / 62.5


  }
















 try {

    var EBISHOP1X = ($("#eb").offset().left - 8) / 62.5 
  
  var EBISHOP1Y = ($("#eb").offset().top - 15) / 62.5


  }

  catch(e) {
 
var EBISHOP1X = (eb1offsetx - 8) / 62.5

  var EBISHOP1Y = (eb1offsety - 15) / 62.5
  }
  
      

try {

    var EBISHOP2X = ($("#eb2").offset().left - 8) / 62.5 
  
  var EBISHOP2Y = ($("#eb2").offset().top - 15) / 62.5


  }

  catch(e) {
 
var EBISHOP2X = (eb2offsetx - 8) / 62.5

  var EBISHOP2Y = (eb2offsety - 15) / 62.5
  }
  



















      try {

    var EPAWN1X = ($("#ep").offset().left - 8) / 62.5 
  
  var EPAWN1Y = ($("#ep").offset().top - 15) / 62.5


  }


  catch(e) {

 var EPAWN1X = (ep1offsetx - 8) / 62.5 
  
  var EPAWN1Y = (ep1offsety - 15) / 62.5


  }


    try {

    var EPAWN2X = ($("#ep2").offset().left - 8) / 62.5 
  
  var EPAWN2Y = ($("#ep2").offset().top - 15) / 62.5


  }


  catch(e) {

 var EPAWN2X = (ep2offsetx - 8) / 62.5 
  
  var EPAWN2Y = (ep2offsety - 15) / 62.5


  }

    
    try {

    var EPAWN3X = ($("#ep3").offset().left - 8) / 62.5 
  
  var EPAWN3Y = ($("#ep3").offset().top - 15) / 62.5


  }


  catch(e) {

 var EPAWN3X = (ep3offsetx - 8) / 62.5 
  
  var EPAWN3Y = (ep3offsety - 15) / 62.5


  }

















    try {

    var EPAWN4X = ($("#ep4").offset().left - 8) / 62.5 
  
  var EPAWN4Y = ($("#ep4").offset().top - 15) / 62.5


  }


  catch(e) {

 var EPAWN4X = (ep4offsetx - 8) / 62.5 
  
  var EPAWN4Y = (ep4offsety - 15) / 62.5


  }


    try {

    var EPAWN5X = ($("#ep5").offset().left - 8) / 62.5 
  
  var EPAWN5Y = ($("#ep5").offset().top - 15) / 62.5


  }


  catch(e) {

 var EPAWN5X = (ep5offsetx - 8) / 62.5 
  
  var EPAWN5Y = (ep5offsety - 15) / 62.5


  }

    try {

    var EPAWN6X = ($("#ep6").offset().left - 8) / 62.5 
  
  var EPAWN6Y = ($("#ep6").offset().top - 15) / 62.5


  }


  catch(e) {

 var EPAWN6X = (ep6offsetx - 8) / 62.5 
  
  var EPAWN6Y = (ep6offsety - 15) / 62.5


  }


    try {

    var EPAWN7X = ($("#ep7").offset().left - 8) / 62.5 
  
  var EPAWN7Y = ($("#ep7").offset().top - 15) / 62.5


  }


  catch(e) {

 var EPAWN7X = (ep7offsetx - 8) / 62.5 
  
  var EPAWN7Y = (ep7offsety - 15) / 62.5


  }




    try {

    var EPAWN8X = ($("#ep8").offset().left - 8) / 62.5 
  
  var EPAWN8Y = ($("#ep8").offset().top - 15) / 62.5


  }


  catch(e) {

 var EPAWN8X = (ep8offsetx - 8) / 62.5 
  
  var EPAWN8Y = (ep8offsety - 15) / 62.5


  }






















console.log("the count is" + " " + count)
console.log("KNIGHT")
console.log(EKNIGHT2X)
console.log(EKNIGHT2Y)



 Xarray.push([ECASTLE1X,ECASTLE1y], [EBISHOP1X,EBISHOP1Y],[EPAWN1X, EPAWN1Y],
  [EPAWN2X,EPAWN2Y],[EPAWN3X,EPAWN3Y],[EPAWN4X,EPAWN4Y], [EPAWN5X,EPAWN5Y],
  [EPAWN6X,EPAWN6Y],[EPAWN7X,EPAWN7Y],[EPAWN8X, EPAWN8Y],[EKNIGHT1X,EKNIGHT1Y], 
  [EKNIGHT2X,EKNIGHT2Y],[ECASTLE2X,ECASTLE2y],[EBISHOP2X, EBISHOP2Y],[EKINGX,EKINGY],
  [EQUEENX,EQUEENY])

 Yarray.push([knightX,knightY],[knight2X,knight2Y], [bishopX,bishopY],[bishop2X, bishop2Y],
  [pawn1X,pawn1Y],[pawn2X,pawn2Y],[pawn3X,pawn3Y],[pawn4X,pawn4Y],[pawn5X,pawn5Y],[pawn6X,
  pawn6Y],[pawn7X,pawn7Y],[pawn8X,pawn8Y],[castle1X,castle1Y],[castle2X,castle2Y],[queenX,queenY],[kingX,kingY])




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
console.log(Xarray)
console.log("XARRAY")

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











else if(x == ECASTLE1X && y == ECASTLE1y && ECastle1kill == 0 ){
console.log("CASTLEWHITE")
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




else if(x == ECASTLE1X && y == ECASTLE1y && ECastle1kill == 0 ){

 console.log("CASTLEBLACK")
  console.log(Yarray)


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
      

      if(count ==  0) {
        // console.log("the count is 0 push bs1")
        squares.push(this.renderSquare(i,PB5));}

        else if (count == 1) {
          // console.log("the count is 1 push bs2")
          squares.push(this.renderSquare(i,BS2));

        
        }
    
      else if (count == 2) {
              // console.log("the count is 2 push bs1")
              squares.push(this.renderSquare(i,PB4));

      }
      
     
       else if (count == 3) {
              // console.log("the count is 2 push bs1")
              squares.push(this.renderSquare(i,BS2));

      }

     
  else if (count == 5) {
              // console.log("the count is 2 push bs1")
              squares.push(this.renderSquare(i,BS2));

      }



     else if (count == 6) {

      squares.push(this.renderSquare(i,BS1));

     }

    else {

      squares.push(this.renderSquare(i,PB5));

    }

    

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











function KnightMove(element,top,left) {

$(element).animate(
                {
                        
                        
                        "top" : top,
                        "left": left
                }, 
                1000
        );
}






function animate () {


  if(count == 0){

    pawnDown("#ep3", "125")
    count++;
  }

else if(count == 2) {
  // KnightUpTwoLeft("#ek1")
pawnDown("#ep4", "62.5")
count++;
}

else if(count == 4){
 pawnCaptureRight("#ep3")
 count++

}

else if(count == 5){
 canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === -2 && (dy) === -1) 
        
}
}
else if(count == 6){
 

KnightMove("#ek2", "125" , "-62.5")
count++



}

else if(count == 7){

 canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return ((dx) === -2 && (dy) === -1) 
        
}


}

else if(count == 8){

pawnDown("#ep7", "62.5")
count++;

}





}


setInterval(animate, 100);


function checkOffset(){

try {
  ec2offsety = $("#ec2").offset().top
  ec2offsetx = $("#ec2").offset().left
  }
  
catch(e){

  console.log("this piece has been captured")
}

  
try {
  var eptop = $("#ec1").offset().top 
  ec1offsety = eptop
 var epleft = $("#ec1").offset().left  
 ec1offsetx = epleft
 }

catch(e) {

  console.log("this piece has been captured")
}

try {
 var bisht = $("#eb").offset().top 
 eb1offsety = bisht
 var bishl = $("#eb").offset().left 
eb1offsetx = bishl
  }

  catch(e){

    console.log("this piece has been captured")
  }

  
try {

  eb2offsety = $("#eb2").offset().top
  eb2offsetx = $("#eb2").offset().left
}

catch(e){
console.log("this piece has been captured")

}
  
try {

  ek1offsety = $("#ek1").offset().top
  ek1offsetx = $("#ek1").offset().left
 }
 
catch(e){

  console.log("this piece has been captured")
}

try {
 ek2offsety = $("#ek2").offset().top
  ek2offsetx = $("#ek2").offset().left
}

catch(e){

  console.log("this piece has been captured")
}


try {
  ep3offsety = $("#ep3").offset().top
ep3offsetx = $("#ep3").offset().left
}
catch(e){

  console.log("this piece has been captured")
}

try {
ep1offsety = $("#ep").offset().top
ep1offsetx = $("#ep").offset().left
}
catch(e){

  console.log("this piece has been captured")
}

try {
ep2offsety = $("#ep2").offset().top
ep2offsetx = $("#ep2").offset().left
}
catch(e){

  console.log("this piece has been captured")
}
try {
ep4offsety = $("#ep4").offset().top
ep4offsetx = $("#ep4").offset().left
}
catch(e){

  console.log("this piece has been captured")
}
try {
ep5offsety = $("#ep5").offset().top
ep5offsetx = $("#ep5").offset().left
}
catch(e){

  console.log("this piece has been captured")
}
try {
ep6offsety = $("#ep6").offset().top
ep6offsetx = $("#ep6").offset().left
}
catch(e){

  console.log("this piece has been captured")
}
try {
ep7offsety = $("#ep7").offset().top
ep7offsetx = $("#ep7").offset().left
}
catch(e){

  console.log("this piece has been captured")
}

try {

ep8offsety = $("#ep8").offset().top
ep8offsetx = $("#ep8").offset().left
}
catch(e){

  console.log("this piece has been captured")
}
try {
eqoffsety = $("#eq").offset().top
eqoffsetx = $("#eq").offset().left

}
catch(e){

  console.log("this piece has been captured")
}

try {
ekoffsety = $("#ek").offset().top
ekoffsetx = $("#ek").offset().left


}
catch(e){

  console.log("this piece has been captured")
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
