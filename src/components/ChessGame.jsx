import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ChessGame = () => {
  const { theme } = useTheme();
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState('white'); // white or black
  const [moveCount, setMoveCount] = useState(0);
  const [validMoves, setValidMoves] = useState([]);

  // Initial chess board setup
  const initialBoard = [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
  ];

  const [board, setBoard] = useState(initialBoard);

  const whitePieces = ['♙', '♖', '♘', '♗', '♕', '♔'];
  const blackPieces = ['♟', '♜', '♞', '♝', '♛', '♚'];

  const isWhitePiece = (piece) => whitePieces.includes(piece);
  const isBlackPiece = (piece) => blackPieces.includes(piece);

  // Sound effects using Web Audio API
  const playSound = (piece) => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Different frequencies for different pieces
    const frequencies = {
      '♙': 261.63, '♟': 261.63, // Pawn - C4
      '♖': 329.63, '♜': 329.63, // Rook - E4
      '♘': 392.00, '♞': 392.00, // Knight - G4
      '♗': 440.00, '♝': 440.00, // Bishop - A4
      '♕': 523.25, '♛': 523.25, // Queen - C5
      '♔': 587.33, '♚': 587.33  // King - D5
    };
    
    oscillator.frequency.value = frequencies[piece] || 440;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.2);
  };

  const playMoveSound = () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'square';
    
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  const isValidMove = (fromRow, fromCol, toRow, toCol) => {
    const piece = board[fromRow][fromCol];
    const targetPiece = board[toRow][toCol];
    
    // Can't capture own piece
    if (currentPlayer === 'white' && isWhitePiece(targetPiece)) return false;
    if (currentPlayer === 'black' && isBlackPiece(targetPiece)) return false;

    // Basic pawn movement
    if (piece === '♙') {
      if (fromCol === toCol && !targetPiece) {
        if (toRow === fromRow - 1) return true;
        if (fromRow === 6 && toRow === 4 && !board[5][fromCol]) return true;
      }
      if (Math.abs(fromCol - toCol) === 1 && toRow === fromRow - 1 && targetPiece) return true;
    }
    if (piece === '♟') {
      if (fromCol === toCol && !targetPiece) {
        if (toRow === fromRow + 1) return true;
        if (fromRow === 1 && toRow === 3 && !board[2][fromCol]) return true;
      }
      if (Math.abs(fromCol - toCol) === 1 && toRow === fromRow + 1 && targetPiece) return true;
    }

    // Knight movement
    if (piece === '♘' || piece === '♞') {
      const rowDiff = Math.abs(toRow - fromRow);
      const colDiff = Math.abs(toCol - fromCol);
      if ((rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2)) return true;
    }

    // Rook movement
    if (piece === '♖' || piece === '♜') {
      if (fromRow === toRow || fromCol === toCol) {
        return isPathClear(fromRow, fromCol, toRow, toCol);
      }
    }

    // Bishop movement
    if (piece === '♗' || piece === '♝') {
      if (Math.abs(toRow - fromRow) === Math.abs(toCol - fromCol)) {
        return isPathClear(fromRow, fromCol, toRow, toCol);
      }
    }

    // Queen movement
    if (piece === '♕' || piece === '♛') {
      if (fromRow === toRow || fromCol === toCol || Math.abs(toRow - fromRow) === Math.abs(toCol - fromCol)) {
        return isPathClear(fromRow, fromCol, toRow, toCol);
      }
    }

    // King movement
    if (piece === '♔' || piece === '♚') {
      if (Math.abs(toRow - fromRow) <= 1 && Math.abs(toCol - fromCol) <= 1) return true;
    }

    return false;
  };

  const isPathClear = (fromRow, fromCol, toRow, toCol) => {
    const rowStep = toRow > fromRow ? 1 : toRow < fromRow ? -1 : 0;
    const colStep = toCol > fromCol ? 1 : toCol < fromCol ? -1 : 0;
    let currentRow = fromRow + rowStep;
    let currentCol = fromCol + colStep;

    while (currentRow !== toRow || currentCol !== toCol) {
      if (board[currentRow][currentCol]) return false;
      currentRow += rowStep;
      currentCol += colStep;
    }
    return true;
  };

  const calculateValidMoves = (row, col) => {
    const moves = [];
    for (let toRow = 0; toRow < 8; toRow++) {
      for (let toCol = 0; toCol < 8; toCol++) {
        if (isValidMove(row, col, toRow, toCol)) {
          moves.push({ row: toRow, col: toCol });
        }
      }
    }
    return moves;
  };

  const makeComputerMove = () => {
    const possibleMoves = [];
    
    for (let fromRow = 0; fromRow < 8; fromRow++) {
      for (let fromCol = 0; fromCol < 8; fromCol++) {
        const piece = board[fromRow][fromCol];
        if (isBlackPiece(piece)) {
          for (let toRow = 0; toRow < 8; toRow++) {
            for (let toCol = 0; toCol < 8; toCol++) {
              if (isValidMove(fromRow, fromCol, toRow, toCol)) {
                possibleMoves.push({ fromRow, fromCol, toRow, toCol, piece });
              }
            }
          }
        }
      }
    }

    if (possibleMoves.length > 0) {
      const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
      const newBoard = board.map(row => [...row]);
      newBoard[randomMove.toRow][randomMove.toCol] = newBoard[randomMove.fromRow][randomMove.fromCol];
      newBoard[randomMove.fromRow][randomMove.fromCol] = '';
      setBoard(newBoard);
      playSound(randomMove.piece);
      playMoveSound();
      setCurrentPlayer('white');
      setMoveCount(prev => prev + 1);
    }
  };

  useEffect(() => {
    if (currentPlayer === 'black') {
      const timer = setTimeout(() => {
        makeComputerMove();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentPlayer]);

  const handleSquareClick = (row, col) => {
    if (currentPlayer !== 'white') return;

    if (selectedSquare) {
      const { row: fromRow, col: fromCol } = selectedSquare;
      
      if (isValidMove(fromRow, fromCol, row, col)) {
        const piece = board[fromRow][fromCol];
        const newBoard = board.map(row => [...row]);
        newBoard[row][col] = newBoard[fromRow][fromCol];
        newBoard[fromRow][fromCol] = '';
        setBoard(newBoard);
        setSelectedSquare(null);
        setValidMoves([]);
        playSound(piece);
        playMoveSound();
        setCurrentPlayer('black');
        setMoveCount(prev => prev + 1);
      } else {
        setSelectedSquare(null);
        setValidMoves([]);
      }
    } else if (board[row][col] && isWhitePiece(board[row][col])) {
      setSelectedSquare({ row, col });
      const moves = calculateValidMoves(row, col);
      setValidMoves(moves);
      playSound(board[row][col]);
    }
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setSelectedSquare(null);
    setValidMoves([]);
    setCurrentPlayer('white');
    setMoveCount(0);
  };

  const isValidMoveSquare = (row, col) => {
    return validMoves.some(move => move.row === row && move.col === col);
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative"
      >
        {/* Chess Board */}
        <div 
          className="grid grid-cols-8 gap-0 rounded-lg overflow-hidden shadow-2xl"
          style={{ 
            border: `4px solid ${theme.colors.primary}`,
            boxShadow: `0 0 30px ${theme.colors.glow}`
          }}
        >
          {board.map((row, rowIndex) =>
            row.map((piece, colIndex) => {
              const isLight = (rowIndex + colIndex) % 2 === 0;
              const isSelected = selectedSquare?.row === rowIndex && selectedSquare?.col === colIndex;
              const isValidMove = isValidMoveSquare(rowIndex, colIndex);
              
              return (
                <motion.button
                  key={`${rowIndex}-${colIndex}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSquareClick(rowIndex, colIndex)}
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-2xl sm:text-3xl font-bold transition-all cursor-pointer relative"
                  style={{
                    background: isSelected 
                      ? theme.colors.primary
                      : isLight 
                        ? `${theme.colors.background}` 
                        : `${theme.colors.primary}30`,
                    color: isSelected 
                      ? '#FFFFFF' 
                      : isLight 
                        ? theme.colors.text 
                        : theme.colors.background === '#0A0E27' 
                          ? '#E0F7FA' 
                          : theme.colors.text,
                    boxShadow: isSelected ? `0 0 15px ${theme.colors.glow}` : 'none'
                  }}
                >
                  {piece}
                  {/* Valid Move Indicator */}
                  {isValidMove && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      <div 
                        className="w-3 h-3 rounded-full animate-pulse"
                        style={{ 
                          background: piece ? `${theme.colors.accent}CC` : `${theme.colors.primary}99`,
                          boxShadow: `0 0 10px ${theme.colors.glow}`
                        }}
                      />
                    </motion.div>
                  )}
                </motion.button>
              );
            })
          )}
        </div>

        {/* Game Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-center space-y-2"
        >
          <p className="font-sans text-sm font-semibold" style={{ color: theme.colors.primary }}>
            {currentPlayer === 'white' ? '♙ Your Turn' : '♟ Computer Thinking...'}
          </p>
          <p className="font-sans text-xs" style={{ color: `${theme.colors.text}99` }}>
            Moves: {moveCount}
          </p>
          <button
            onClick={resetGame}
            className="px-4 py-1 rounded-full text-xs font-bold transition-all hover:scale-105"
            style={{
              background: theme.colors.gradient,
              color: '#FFFFFF',
              boxShadow: `0 0 15px ${theme.colors.glow}`
            }}
          >
            Reset Game
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ChessGame;
