module.exports = [
  {
    id: '0',
    details: {
      name: 'Budget with income smaller than outcome, 1 deduction and 1 allowance',
      owner: 'John'
    },
    outcomes: [
      {name: 'Outcome A', value: 3000},
      {name: 'Outcome B', value: 1000},
    ],
    contributors: [
      {
        name: 'John',
        incomes: [
          {name: 'Income A', value: 2000},
        ],
        allowances: [
          {name: 'Allowance A', value: 100},
        ],
        deductions: [
          {name: 'Deduction A', value: 200},
        ],
      }
    ]
  },
  {
    id: '1',
    details: {
      name: 'Budget with income smaller than outcome, 2 deductions and 2 allowances',
      owner: 'John'
    },
    outcomes: [
      {name: 'Outcome A', value: 3000},
      {name: 'Outcome B', value: 1000},
    ],
    contributors: [
      {
        name: 'John',
        incomes: [
          {name: 'Income A', value: 2000},
        ],
        allowances: [
          {name: 'Allowance A', value: 100},
          {name: 'Allowance B', value: 100},
        ],
        deductions: [
          {name: 'Deduction A', value: 200},
          {name: 'Deduction B', value: 200},
        ],
      }
    ]
  },
  {
    id: '2',
    details: {
      name: 'Budget with 1 deduction and 1 allowance',
      owner: 'John'
    },
    outcomes: [
      {name: 'Outcome A', value: 3000},
      {name: 'Outcome B', value: 1000},
    ],
    contributors: [
      {
        name: 'John',
        incomes: [
          {name: 'Income A', value: 5000},
        ],
        allowances: [
          {name: 'Allowance A', value: 100},
        ],
        deductions: [
          {name: 'Deduction A', value: 200},
        ],
      }
    ]
  },
  {
    id: '3',
    details: {
      name: 'Budget with 2 deductions and 2 allowances',
      owner: 'John'
    },
    outcomes: [
      {name: 'Outcome A', value: 3000},
      {name: 'Outcome B', value: 1000},
    ],
    contributors: [
      {
        name: 'John',
        incomes: [
          {name: 'Income A', value: 5000},
        ],
        allowances: [
          {name: 'Allowance A', value: 100},
          {name: 'Allowance A', value: 100},
        ],
        deductions: [
          {name: 'Deduction A', value: 200},
          {name: 'Deduction A', value: 200},
        ],
      }
    ]
  },
  {
    id: '4',
    details: {
      name: 'Budget with no deductions and 1 allowance',
      owner: 'John'
    },
    outcomes: [
      {name: 'Outcome A', value: 3000},
      {name: 'Outcome B', value: 1000},
    ],
    contributors: [
      {
        name: 'John',
        incomes: [
          {name: 'Income A', value: 5000},
        ],
        allowances: [
          {name: 'Allowance A', value: 100},
        ],
        deductions: [],
      }
    ]
  },
  {
    id: '5',
    details: {
      name: 'Budget with 1 deductions and no allowances',
      owner: 'John'
    },
    outcomes: [
      {name: 'Outcome A', value: 3000},
      {name: 'Outcome B', value: 1000},
    ],
    contributors: [
      {
        name: 'John',
        incomes: [
          {name: 'Income A', value: 5000},
        ],
        allowances: [],
        deductions: [
          {name: 'Deduction A', value: 200},
        ],
      }
    ]
  },
  {
    id: '6',
    details: {
      name: 'Budget of 2 contributors with no deductions and allowances',
      owner: 'John'
    },
    outcomes: [
      {name: 'Outcome A', value: 3000},
      {name: 'Outcome B', value: 1000},
    ],
    contributors: [
      {
        name: 'John',
        incomes: [
          {name: 'Income A', value: 5000},
        ],
        allowances: [],
        deductions: [],
      },
      {
        name: 'Jack',
        incomes: [
          {name: 'Income A', value: 2000},
        ],
        allowances: [],
        deductions: [],
      }
    ]
  },
  {
    id: '7',
    details: {
      name: 'Budget of 2 contributors with 1 deduction and 1 allowances',
      owner: 'John'
    },
    outcomes: [
      {name: 'Outcome A', value: 3000},
      {name: 'Outcome B', value: 1000},
    ],
    contributors: [
      {
        name: 'John',
        incomes: [
          {name: 'Income A', value: 5000},
        ],
        allowances: [],
        deductions: [
          {name: 'Deduction A', value: 200},
        ],
      },
      {
        name: 'Jack',
        incomes: [
          {name: 'Income A', value: 2000},
        ],
        allowances: [],
        deductions: [],
      }
    ]
  },
  {
    id: '8',
    details: {
      name: 'Budget of 2 contributors with 2 deductions and no allowances',
      owner: 'John'
    },
    outcomes: [
      {name: 'Outcome A', value: 3000},
      {name: 'Outcome B', value: 1000},
    ],
    contributors: [
      {
        name: 'John',
        incomes: [
          {name: 'Income A', value: 5000},
        ],
        allowances: [],
        deductions: [
          {name: 'Deduction A', value: 200},
          {name: 'Deduction B', value: 100},
        ],
      },
      {
        name: 'Jack',
        incomes: [
          {name: 'Income A', value: 2000},
        ],
        allowances: [],
        deductions: [],
      }
    ]
  },
  {
    id: '9',
    details: {
      name: 'Budget of 2 contributors with no deductions and 2 allowances',
      owner: 'John'
    },
    outcomes: [
      {name: 'Outcome A', value: 3000},
      {name: 'Outcome B', value: 1000},
    ],
    contributors: [
      {
        name: 'John',
        incomes: [
          {name: 'Income A', value: 5000},
        ],
        allowances: [],
        deductions: [],
      },
      {
        name: 'Jack',
        incomes: [
          {name: 'Income A', value: 2000},
        ],
        allowances: [
          {name: 'Allowance A', value: 200},
        ],
        deductions: [],
      }
    ]
  }
]
