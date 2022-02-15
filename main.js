(function() {

    self.Board = function (width,height) {

        this.width = width ;
        this.height = height ;
        this.playing = false ;
        this.game_over = false ;
        this.bars = [] ;
        this.ball = null ;
    }

    self.Board.prototype= {

        get elements() {

            var elements = this.bars ;
            elements.push(this.ball) ;
            return elements ;
        }
    }

})();

(function() {

    self.Bar = function(x,y,width,height,board) {
        this.x = x ;
        this.y = y ;
        this.width = width ;
        this.height = height ;
        this.board = board ;

        this.kind = "rectangle" ;

        this.board.bars.push(this) ; 

        console.log("hola anda el contructor") ;
    }

    self.Bar.prototype = {
        down: function() {
                this.y += this.speed ; 
        },

        up: function() {
            this.y -= this.speed ;
        },

        toString: function() {
            return "x: "+ this.x +" y: "+ this.y ; 
        }
    }
})();

(function(){

    self.BoardView = function(canvas,board) {

        this.canvas = canvas ;
        this.canvas.width = board.width ; 
        this.canvas.height = board.height ;
        this.board = board ;
        this.ctx = canvas.getContext("2d") ;
    
    }

    self.BoardView.prototype = {
        draw: function() {
            console.log( this.board.elements );
            for (var i = this.board.elements.length - 1; i >= 0; i--) {

                var el = this.board.elements [i] ;
                draw(this.ctx,el) ;

            }
        }
    }
    
    function draw(ctx, element) {

        if (element !== null && element.hasOwnProperty("kind")) {

            switch (element.kind)
            {
                case "rectangle":
                    ctx.fillRect(element.x,element.y,element.width,element.height)
                    break
            }
        }
    }

})();

var board = new Board(800,400) ;
var bar = new Bar (20,100,40,100,board) ;
var bar_2 = new Bar (735,100,40,100,board) ;
var canvas = document.getElementById('canvas') ;
var board_view = new BoardView(canvas,board) ;

document.addEventListener("keydown",function(ev) {

    console.log(ev.keyCode) ;

    if(ev.keyCode == 38) {
        bar.up() ;
    } else if(ev.keyCode == 40) {
        bar.down() ;
    } else if(ev.keyCode === 87) {
        bar_2.up() ;
    } else if(ev.keyCode === 83) {
        bar_2.down() ;
    }
    
}) ;

window.addEventListener("load",main) ;

function main() {
     
    console.log(board)
    board_view.draw(board);
}