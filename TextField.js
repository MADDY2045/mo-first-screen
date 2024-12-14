import React from 'react';

const TextField = ({
  disabled,
  helperText,
  iconAfter,
  label,
  onChange,
  onKeyDown,
  onKeyUp,
  error,
  onIconClick,
}) => (
  <div>
    <label>{label}</label>
    <div style={{ position: 'relative' }}>
      <input
        type="text"
        disabled={disabled}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        style={{ width: '100%', paddingRight: iconAfter ? '30px' : '10px' }}
      />
      {iconAfter && (
        <span
          className="icon"
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
          }}
          onClick={onIconClick}
        >
          {iconAfter}
        </span>
      )}
    </div>
    {helperText && <p>{helperText}</p>}
    {error && <p style={{ color: 'red' }}>Error</p>}
  </div>
);

export default TextField;
