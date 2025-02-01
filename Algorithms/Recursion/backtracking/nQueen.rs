fn solve_n_queens(n: i32) -> Vec<Vec<char>> {
    // What is mut?
    let mut board = vec![vec!['.'; n as usize]; n as usize];
    let _ = solve_n_queens_util(&mut board, 0);
    return board;
}

// All of these are negative checks rather then positive ones
fn is_safe(board: &Vec<Vec<char>>, row: i32, col: i32) -> bool {
    // Check the row on the left side
    for i in 0..col {
        if board[row as usize][i as usize] == 'Q' {
            return false;
        }
    }

    // Check the upper diagonal on the left side
    let mut i = row;
    let mut j = col;
    while i >= 0 && j >= 0 {
        if board[i as usize][j as usize] == 'Q' {
            return false;
        }
        i -= 1;
        j -= 1;
    }

    // Check the lower diagonal on the left side
    let mut i = row;
    let mut j = col;
    while i < board.len() as i32 && j >= 0 {
        if board[i as usize][j as usize] == 'Q' {
            return false;
        }
        i += 1;
        j -= 1;
    }

    return true;
}

fn solve_n_queens_util(board: &mut Vec<Vec<char>>, col: i32) -> bool {
    if col >= board.len() as i32 {
        return true;
    }
    // Try to place the queen in each row
    for i in 0..board.len() {
        if is_safe(board, i as i32, col) {
            board[i][col as usize] = 'Q';
            if solve_n_queens_util(board, col + 1) {
                return true;
            }
            board[i][col as usize] = '.';
        }
    }
    return false;
}

fn main() {
    let n = 12;
    let res = solve_n_queens(n);
    // Print the result for each row
    for i in 0..res.len() {
        println!("{:?}", res[i]);
    }
}