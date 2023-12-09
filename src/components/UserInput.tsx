import { UserInputProps } from '../types';
export default function UserInput({ inputs, onUpdate }: UserInputProps) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    inputs;
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={initialInvestment}
            onChange={e =>
              onUpdate('initialInvestment', parseInt(e.target.value))
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={annualInvestment}
            onChange={e =>
              onUpdate('annualInvestment', parseInt(e.target.value))
            }
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={expectedReturn}
            onChange={e => onUpdate('expectedReturn', parseInt(e.target.value))}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={duration}
            onChange={e => onUpdate('duration', parseInt(e.target.value))}
          />
        </p>
      </div>
    </section>
  );
}
