import { useState } from 'react';

// import { InvestmentFormProps } from '../types';

import styles from './InvestmentForm.module.css';

const InvestmentForm = ({inputFields, onInvestmentSubmit, onUserInput, onReset }) => {


  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    onInvestmentSubmit();
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            required
            type="number"
            id="current-savings"
            value={inputFields[0].currentSavings}
            onChange={event =>
              onUserInput('current-savings', event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            required
            type="number"
            id="yearly-contribution"
            value={inputFields[0].yearlyContribution}
            onChange={event =>
              onUserInput('yearly-contribution', event.target.value)
            }
          />
        </p>
      </div>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            required
            type="number"
            id="expected-return"
            value={inputFields[0].expectedReturn}
            onChange={event =>
              onUserInput('expected-return', event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            required
            type="number"
            id="duration"
            value={inputFields[0].duration}
            onChange={event =>
              onUserInput('duration', event.target.value)
            }
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          className={styles.buttonAlt}
          onClick={onReset}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
