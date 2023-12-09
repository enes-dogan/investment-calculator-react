export default function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input type="number" />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input type="number" />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input type="number" />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input type="number" />
        </p>
      </div>
    </section>
  );
}
