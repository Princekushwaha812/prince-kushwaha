import React, { useState } from 'react';
import { X, Delete, Calculator as CalcIcon } from 'lucide-react';

interface CalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CatCalculator: React.FC<CalculatorProps> = ({ isOpen, onClose }) => {
  const [display, setDisplay] = useState('0');
  const [prevValue, setPrevValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [memory, setMemory] = useState<number>(0);

  if (!isOpen) return null;

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const inputDot = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clearAll = () => {
    setDisplay('0');
    setPrevValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const clearEntry = () => {
    setDisplay('0');
  };

  const backspace = () => {
    if (waitingForOperand) return;
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const toggleSign = () => {
    const val = parseFloat(display);
    setDisplay(String(-val));
  };

  const squareRoot = () => {
    const val = parseFloat(display);
    if (val < 0) {
      setDisplay('Invalid Input');
    } else {
      const res = Math.sqrt(val);
      setDisplay(String(Number(res.toFixed(8))));
    }
    setWaitingForOperand(true);
  };

  const reciprocal = () => {
    const val = parseFloat(display);
    if (val === 0) {
      setDisplay('Cannot divide by zero');
    } else {
      const res = 1 / val;
      setDisplay(String(Number(res.toFixed(8))));
    }
    setWaitingForOperand(true);
  };

  const performOp = (nextOp: string) => {
    const inputValue = parseFloat(display);

    if (prevValue === null) {
      setPrevValue(inputValue);
    } else if (operation) {
      const current = prevValue || 0;
      let newValue = current;

      switch (operation) {
        case '+':
          newValue = current + inputValue;
          break;
        case '-':
          newValue = current - inputValue;
          break;
        case '*':
          newValue = current * inputValue;
          break;
        case '/':
          if (inputValue === 0) {
            setDisplay('Cannot divide by zero');
            setWaitingForOperand(true);
            return;
          }
          newValue = current / inputValue;
          break;
      }

      setPrevValue(newValue);
      setDisplay(String(Number(newValue.toFixed(8))));
    }

    setWaitingForOperand(true);
    setOperation(nextOp === '=' ? null : nextOp);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-[#24292e] text-white rounded-lg shadow-2xl border border-gray-700 w-full max-w-[320px] overflow-hidden select-none animate-in fade-in duration-150">
        {/* Title Bar */}
        <div className="bg-[#1f2428] px-3 py-2 flex items-center justify-between border-b border-gray-700 cursor-move">
          <div className="flex items-center space-x-2 text-xs font-semibold text-gray-200">
            <CalcIcon className="w-3.5 h-3.5 text-blue-400" />
            <span>CAT Virtual Calculator</span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-sm hover:bg-gray-700 transition"
            aria-label="Close Calculator"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Display */}
        <div className="p-3 bg-[#181a1d]">
          <div className="text-right text-[10px] text-gray-400 h-4">
            {prevValue !== null && operation ? `${prevValue} ${operation}` : ''}
            {memory !== 0 ? ' [M]' : ''}
          </div>
          <div
            className="text-right text-2xl font-mono text-white tracking-wider truncate py-1 font-semibold"
            aria-live="polite"
          >
            {display}
          </div>
        </div>

        {/* Keypad */}
        <div className="p-2 grid grid-cols-5 gap-1.5 bg-[#24292e] text-xs">
          {/* Memory Row */}
          <button
            onClick={() => setMemory(0)}
            className="p-1.5 rounded bg-gray-700/60 hover:bg-gray-700 text-gray-300 font-medium"
          >
            MC
          </button>
          <button
            onClick={() => {
              setDisplay(String(memory));
              setWaitingForOperand(true);
            }}
            className="p-1.5 rounded bg-gray-700/60 hover:bg-gray-700 text-gray-300 font-medium"
          >
            MR
          </button>
          <button
            onClick={() => setMemory(parseFloat(display))}
            className="p-1.5 rounded bg-gray-700/60 hover:bg-gray-700 text-gray-300 font-medium"
          >
            MS
          </button>
          <button
            onClick={() => setMemory(memory + parseFloat(display))}
            className="p-1.5 rounded bg-gray-700/60 hover:bg-gray-700 text-gray-300 font-medium"
          >
            M+
          </button>
          <button
            onClick={() => setMemory(memory - parseFloat(display))}
            className="p-1.5 rounded bg-gray-700/60 hover:bg-gray-700 text-gray-300 font-medium"
          >
            M-
          </button>

          {/* Functions Row */}
          <button
            onClick={backspace}
            className="p-2 rounded bg-amber-900/40 hover:bg-amber-900/60 text-amber-300 flex items-center justify-center"
            title="Backspace"
            aria-label="Backspace"
          >
            <Delete className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={clearEntry}
            className="p-2 rounded bg-gray-700 hover:bg-gray-600 text-white font-medium"
          >
            CE
          </button>
          <button
            onClick={clearAll}
            className="p-2 rounded bg-red-900/50 hover:bg-red-900/70 text-red-200 font-medium"
          >
            C
          </button>
          <button
            onClick={toggleSign}
            className="p-2 rounded bg-gray-700 hover:bg-gray-600 text-white font-medium"
          >
            ±
          </button>
          <button
            onClick={squareRoot}
            className="p-2 rounded bg-indigo-900/40 hover:bg-indigo-900/60 text-indigo-200 font-medium"
          >
            √
          </button>

          {/* Row 1 */}
          <button onClick={() => inputDigit('7')} className="p-2.5 rounded bg-[#2d333b] hover:bg-gray-600 font-bold text-sm">
            7
          </button>
          <button onClick={() => inputDigit('8')} className="p-2.5 rounded bg-[#2d333b] hover:bg-gray-600 font-bold text-sm">
            8
          </button>
          <button onClick={() => inputDigit('9')} className="p-2.5 rounded bg-[#2d333b] hover:bg-gray-600 font-bold text-sm">
            9
          </button>
          <button onClick={() => performOp('/')} className="p-2 rounded bg-blue-900/40 hover:bg-blue-900/60 text-blue-200 text-sm font-bold">
            /
          </button>
          <button onClick={reciprocal} className="p-2 rounded bg-indigo-900/40 hover:bg-indigo-900/60 text-indigo-200 font-medium">
            1/x
          </button>

          {/* Row 2 */}
          <button onClick={() => inputDigit('4')} className="p-2.5 rounded bg-[#2d333b] hover:bg-gray-600 font-bold text-sm">
            4
          </button>
          <button onClick={() => inputDigit('5')} className="p-2.5 rounded bg-[#2d333b] hover:bg-gray-600 font-bold text-sm">
            5
          </button>
          <button onClick={() => inputDigit('6')} className="p-2.5 rounded bg-[#2d333b] hover:bg-gray-600 font-bold text-sm">
            6
          </button>
          <button onClick={() => performOp('*')} className="p-2 rounded bg-blue-900/40 hover:bg-blue-900/60 text-blue-200 text-sm font-bold">
            *
          </button>
          <button
            onClick={() => {
              const val = (parseFloat(display) * (prevValue || 0)) / 100;
              setDisplay(String(val));
              setWaitingForOperand(true);
            }}
            className="p-2 rounded bg-indigo-900/40 hover:bg-indigo-900/60 text-indigo-200 font-medium"
          >
            %
          </button>

          {/* Row 3 */}
          <button onClick={() => inputDigit('1')} className="p-2.5 rounded bg-[#2d333b] hover:bg-gray-600 font-bold text-sm">
            1
          </button>
          <button onClick={() => inputDigit('2')} className="p-2.5 rounded bg-[#2d333b] hover:bg-gray-600 font-bold text-sm">
            2
          </button>
          <button onClick={() => inputDigit('3')} className="p-2.5 rounded bg-[#2d333b] hover:bg-gray-600 font-bold text-sm">
            3
          </button>
          <button onClick={() => performOp('-')} className="p-2 rounded bg-blue-900/40 hover:bg-blue-900/60 text-blue-200 text-sm font-bold">
            -
          </button>
          <button
            onClick={() => performOp('=')}
            className="row-span-2 p-2.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base flex items-center justify-center shadow-sm"
          >
            =
          </button>

          {/* Row 4 */}
          <button
            onClick={() => inputDigit('0')}
            className="col-span-2 p-2.5 rounded bg-[#2d333b] hover:bg-gray-600 font-bold text-sm"
          >
            0
          </button>
          <button onClick={inputDot} className="p-2.5 rounded bg-[#2d333b] hover:bg-gray-600 font-bold text-sm">
            .
          </button>
          <button onClick={() => performOp('+')} className="p-2 rounded bg-blue-900/40 hover:bg-blue-900/60 text-blue-200 text-sm font-bold">
            +
          </button>
        </div>
      </div>
    </div>
  );
};
