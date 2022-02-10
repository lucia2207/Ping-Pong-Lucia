(function(){

    self.Board = function(width,height){
        this.whidth = this.whidth;
        this.height = height;
        this.playing = false;
        this.game_over = false;
        this.bars= [];
    
    }

    self.Board.propototype = {
        get elements(){
            var elements= this.bars;
            elements.push(ball);
            return elements;
        }
    }
})();

(function(){
    self.BoardView = function(canvas,board){
        
        this.canvas = canvas;
        this.canvas.whidth = whidthboard.whidth;
        this.canvas.height = board.height;
        this.board = board;
        this.ctx = canvas.getContext("2d");

    }
})();

    window.addEventListener("load", main);


function main(){
    var board = new Board(800,400)
    var canvas = document.getElementsById('canvas');
    var boar_view = new BoardView (canvas, board)
}