import { InvestmentFormProps } from '../types'

import styles from './InvestmentForm.module.css';

const InvestmentForm = ({ userInputs, onInputChange, onFormReset, onCalculate }: InvestmentFormProps) => {

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    onCalculate();
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
            value={userInputs.currentSavings}
            onChange={event =>
              onInputChange('current-savings', event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            required
            type="number"
            id="yearly-contribution"
            value={userInputs.yearlySavings}
            onChange={event =>
              onInputChange('yearly-contribution', event.target.value)
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
            value={userInputs.expectedInterest}
            onChange={event =>
              onInputChange('expected-return', event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            required
            type="number"
            id="duration"
            value={userInputs.investmentDuration}
            onChange={event =>
              onInputChange('duration', event.target.value)
            }
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          className={styles.buttonAlt}
          onClick={() => onFormReset()}
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
