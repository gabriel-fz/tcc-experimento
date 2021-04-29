import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from 'react';

import getRandomSequence from '../utils/getRandomSequence';

interface KeyboardSequenceProps {
  digit: number;
  active: boolean;
  isCorrect: boolean;
}

interface GameContextData {
  wins: number;
  displaySequence: number[];
  keyboardSequence: KeyboardSequenceProps[];
  result: number[];
  endOfTheGame: boolean;
  displaySequenceIsComplete: boolean;
  inputNumber(digit: number): void;
  restartGame(): void;
}

const GameContext = createContext<GameContextData>({} as GameContextData);

export const GameProvider: React.FC = ({ children }) => {
  const [wins, setWins] = useState<number>(0);
  const [displaySequence, setDisplaySequence] = useState<number[]>([]);
  const [result, setResult] = useState<number[]>([]);
  const [endOfTheGame, setEndOfTheGame] = useState<boolean>(false);
  const [keyboardSequence, setKeyboardSequence] = useState<
    KeyboardSequenceProps[]
  >(() =>
    getRandomSequence.map(item => {
      return {
        digit: item,
        active: false,
        isCorrect: false,
      };
    }),
  );

  useEffect(() => {
    setResult(getRandomSequence.sort());
  }, []);

  const displaySequenceIsComplete = useMemo(
    () => displaySequence.length === result.length,
    [displaySequence, result],
  );

  const validateDigt = useCallback(
    (digit: number, index: number) => {
      if (index + 1 === result.length) {
        setWins(wins + 1);

        setEndOfTheGame(true);
      }

      if (result[index] === digit) {
        return true;
      }

      setEndOfTheGame(true);

      return false;
    },
    [result, wins],
  );

  const inputNumber = useCallback(
    (digit: number) => {
      const newKeyboardSequence = keyboardSequence.map(item => {
        return item.digit === digit
          ? {
              ...item,
              active: true,
              isCorrect: validateDigt(digit, displaySequence.length),
            }
          : item;
      });

      setKeyboardSequence(newKeyboardSequence);

      setDisplaySequence([...displaySequence, digit]);
    },
    [displaySequence, keyboardSequence, validateDigt],
  );

  const restartGame = useCallback(() => {
    setDisplaySequence([]);

    const newKeyboardSequence = keyboardSequence.map(item => {
      return {
        digit: item.digit,
        active: false,
        isCorrect: false,
      };
    });

    setKeyboardSequence(newKeyboardSequence);

    setEndOfTheGame(false);
  }, [keyboardSequence]);

  return (
    <GameContext.Provider
      value={{
        wins,
        displaySequence,
        keyboardSequence,
        result,
        inputNumber,
        endOfTheGame,
        displaySequenceIsComplete,
        restartGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = (): GameContextData => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }

  return context;
};
