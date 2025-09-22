/* global $, sessionStorage */

$(document).ready(runProgram);

function runProgram() {
    ////////////////////////////////////////////////////////////////////////////////
    //////////////////////////// SETUP /////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    
    var FRAME_RATE = 60;
    var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
    const MOVEMENT_SPEED = 5; 
    
    
    const WALKER_WIDTH = 50;
    const WALKER_HEIGHT = 50;

    
    const player1 = {
        id: "#walker", 
        x: 100,
        y: 100,
        xSpeed: 0,
        ySpeed: 0,
        width: WALKER_WIDTH,
        height: WALKER_HEIGHT
    };

    
    const player2 = {
        id: "#walker2", 
        x: 400,
        y: 100,
        xSpeed: 0,
        ySpeed: 0,
        width: WALKER_WIDTH,
        height: WALKER_HEIGHT
    };

    
    const KEY = {
        ENTER: 13,
       
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        
        W: 87,
        A: 65,
        S: 83,
        D: 68,
    };

   
    var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);

    
    $(document).on("keydown", handleKeyDown);
    $(document).on("keyup", handleKeyUp);
    
  
    $(player1.id).on("click", function() {
        changeColor(player1);
    });
    $(player2.id).on("click", function() {
        changeColor(player2);
    });

    ////////////////////////////////////////////////////////////////////////////////
    ///////////////////////// CORE LOGIC ///////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    
    function newFrame() {
        
        repositionGameItem(player1);
        wallCollision(player1);
        redrawGameItem(player1);

       
        repositionGameItem(player2);
        wallCollision(player2);
        redrawGameItem(player2);
    }

   
   function handleKeyDown(event) {

       // Player 1 (Arrow Keys)
        if (event.which === KEY.UP) {
        player1.ySpeed = -MOVEMENT_SPEED;
       } else if (event.which === KEY.DOWN) {
       player1.ySpeed = MOVEMENT_SPEED;
      }

       if (event.which === KEY.LEFT) {
         player1.xSpeed = -MOVEMENT_SPEED;
       } else if (event.which === KEY.RIGHT) {
         player1.xSpeed = MOVEMENT_SPEED;
       }

      
         if (event.which === KEY.W) {
         player2.ySpeed = -MOVEMENT_SPEED;
         } else if (event.which === KEY.S) {
         player2.ySpeed = MOVEMENT_SPEED;
       }

       
         if (event.which === KEY.A) { 
         player2.xSpeed = -MOVEMENT_SPEED;
         } else if (event.which === KEY.D) {
          player2.xSpeed = MOVEMENT_SPEED;  
         }
     }

    
    function handleKeyUp(event) {
        
        if (event.which === KEY.UP || event.which === KEY.DOWN) {
            player1.ySpeed = 0;
        }
        if (event.which === KEY.LEFT || event.which === KEY.RIGHT) {
            player1.xSpeed = 0;
        }

        
        if (event.which === KEY.W || event.which === KEY.S) {
            player2.ySpeed = 0;
        }
        if (event.which === KEY.A || event.which === KEY.D) {
            player2.xSpeed = 0;
        }
    }


    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    function repositionGameItem(gameItem) {
        gameItem.x += gameItem.xSpeed;
        gameItem.y += gameItem.ySpeed;
    }

    
    function wallCollision(gameItem) {
        const boardWidth = $("#board").width();
        const boardHeight = $("#board").height();

      
        if (gameItem.x < 0) {
            gameItem.x -= gameItem.xSpeed;
        }

        
        if (gameItem.x + gameItem.width > boardWidth) {
            gameItem.x -= gameItem.xSpeed;
        }

       
        if (gameItem.y < 0) {
            gameItem.y -= gameItem.ySpeed;
        }

        
        if (gameItem.y + gameItem.height > boardHeight) {
            gameItem.y -= gameItem.ySpeed;
        }
    }


    function redrawGameItem(gameItem) {
        $(gameItem.id).css({
            "left": gameItem.x + 'px',
            "top": gameItem.y + 'px',
        });
    }

    
    function getRandomColor() {
        return "#000000".replace(/0/g, function () {
            return (~~(Math.random() * 16)).toString(16);
        });
    }

    
    function changeColor(gameItem) {
        const randomColor = getRandomColor();
        $(gameItem.id).css("background-color", randomColor);
    }

    
    function endGame() {
        clearInterval(interval);
        $(document).off();
    }
}