function Odometer({ value }) {
  return (
    <span className="odometer odometer-auto-theme" data-count={value} data-status="yes">
      <div className="odometer-inside">
        {String(value)
          .split("")
          .map((digit, i) => (
            <span className="odometer-digit" key={i}>
              <span className="odometer-digit-spacer">8</span>
              <span className="odometer-digit-inner">
                <span className="odometer-ribbon">
                  <span className="odometer-ribbon-inner">
                    <span className="odometer-value">{digit}</span>
                  </span>
                </span>
              </span>
            </span>
          ))}
      </div>
    </span>
  );
}

export default Odometer;
