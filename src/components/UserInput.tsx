import { UserInputProps } from '../types';

export default function UserInput({ userInputs, onUpdate }: UserInputProps) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    userInputs;

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={initialInvestment}
            onChange={e => onUpdate('initialInvestment', e.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={annualInvestment}
            onChange={e => onUpdate('annualInvestment', e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={expectedReturn}
            onChange={e => onUpdate('expectedReturn', e.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={duration}
            onChange={e => onUpdate('duration', e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
