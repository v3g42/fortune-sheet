import React from 'react';
import { Workbook } from '@fortune-sheet/react';

const CustomFunctionsExample = () => {
  const customFunctions = {
    // Simple addition with constant
    ADD5: (params: any[]) => {
      return (params[0] || 0) + 5;
    },
    
    // Multiply by factor
    MULTIPLY_BY: (params: any[]) => {
      const value = params[0] || 0;
      const factor = params[1] || 1;
      return value * factor;
    },
    
    // Get string character at index
    GET_CHAR: (params: any[]) => {
      const str = String(params[0] || '');
      const index = (params[1] || 1) - 1;
      return str.charAt(index);
    },
    
    // Custom CONCAT function
    CONCAT_CUSTOM: (params: any[]) => {
      return params.join('');
    },
    
    // Calculate percentage
    PERCENTAGE: (params: any[]) => {
      const value = params[0] || 0;
      const total = params[1] || 1;
      return Math.round((value / total) * 10000) / 100; // Round to 2 decimal places
    }
  };

  const data = [
    {
      name: 'Sheet1',
      celldata: [
        { r: 0, c: 0, v: { v: 10, m: '10' } },
        { r: 0, c: 1, v: { f: '=ADD5(A1)', v: 15, m: '15' } },
        { r: 1, c: 0, v: { v: 'Hello', m: 'Hello' } },
        { r: 1, c: 1, v: { f: '=GET_CHAR(A2, 2)', v: 'e', m: 'e' } },
        { r: 2, c: 0, v: { v: 25, m: '25' } },
        { r: 2, c: 1, v: { v: 100, m: '100' } },
        { r: 2, c: 2, v: { f: '=PERCENTAGE(A3, B3)', v: 25, m: '25' } },
      ]
    }
  ];

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <h2>Custom Functions Example</h2>
      <p>Try these formulas:</p>
      <ul>
        <li><code>=ADD5(10)</code> - Adds 5 to any number</li>
        <li><code>=MULTIPLY_BY(5, 3)</code> - Multiplies first param by second</li>
        <li><code>=GET_CHAR("Hello", 2)</code> - Gets character at position</li>
        <li><code>=CONCAT_CUSTOM("A", "B", "C")</code> - Concatenates all parameters</li>
        <li><code>=PERCENTAGE(25, 100)</code> - Calculates percentage</li>
      </ul>
      <Workbook
        data={data}
        customFunctions={customFunctions}
        showToolbar={true}
        showFormulaBar={true}
        showSheetTabs={true}
        allowEdit={true}
      />
    </div>
  );
};

export default CustomFunctionsExample;