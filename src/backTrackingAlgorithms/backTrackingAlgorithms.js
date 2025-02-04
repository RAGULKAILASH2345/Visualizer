function createBoard(size){
    const board = [];
    for(let i = 0 ; i < size ; i++){
        board.push(getRowsOfZeros(size));
    }
    return board;
}

function getRowsOfZeros(size){
    const row = [];
    for(let i = 0 ; i < size ; i++){
        row.push(false);
    }
    return row;
}

export function getNQueensAnimation(size, animations = []){
    const board = createBoard(size);
    solveNQueenUtil(board,0,animations);
    return board;
}

function solveNQueenUtil(board = [],col,animations = []){
    let N = board.length;
    if(col >= N)
        return true;
    for(let i = 0 ; i < N ; i++){
        if(isSafe(board,i,col)){
            board[i][col] = true;
            animations.push([i,col,true]);
            if(solveNQueenUtil(board,col + 1,animations)) return true;
            board[i][col] = false;
            animations.push([i,col,false]);
        }
    }
    return false;
}

function isSafe(board = [],row,col){
    let N = board.length;

    for(let i = 0 ; i < col ; i++){
        if(board[row][i] == true)
            return false;
    }

    for(let i = row, j = col ; i >= 0 && j >= 0 ; i--, j--){
        if(board[i][j] == true)
            return false;
    }

    for(let i = row, j = col ; j >= 0 && i < N ; i++, j--){
        if(board[i][j] == true)
            return false;
    }

    return true;
}