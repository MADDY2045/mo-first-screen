import React, { useState, useEffect, useRef } from 'react';
import { List, AutoSizer } from 'react-virtualized';
import axios from 'axios';
import useClickOutside from '../hooks/useClickOutside';
import TextField from './TextField';
import useDebounced from '../hooks/useDebounced';

const CustomDropdown = ({ config, onSelectionChange }) => {
  const [options, setOptions] = useState(
    config.id >= 5
      ? [{ [config.keyField]: 'all', [config.displayField]: 'ALL' }]
      : []
  );
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [noData, setNoData] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);
  const debouncedSearchTerm = useDebounced(searchTerm, 500);

  useClickOutside(dropdownRef, () => {
    if (!config.multiSelect || selectedOptions.length === 0) {
      setIsOpen(false);
    }
  });

  useEffect(() => {
    if (debouncedSearchTerm.length >= 3 && config.id < 5) {
      fetchData();
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    onSelectionChange(config.id, selectedOptions);
  }, [selectedOptions, onSelectionChange, config.id]);

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    setNoData(false);

    try {
      const response = await axios.get(config.apiEndpoint, {
        params: { search: debouncedSearchTerm },
      });
      const data = response.data;

      if (data.length === 0) {
        setNoData(true);
      } else {
        setOptions((prevOptions) =>
          config.id >= 5
            ? [
                { [config.keyField]: 'all', [config.displayField]: 'ALL' },
                ...data,
              ]
            : data
        );
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  };

  const handleOptionClick = (option, event) => {
    if (config.multiSelect && event.ctrlKey) {
      setSelectedOptions((prevSelectedOptions) => {
        if (prevSelectedOptions.includes(option)) {
          return prevSelectedOptions.filter((item) => item !== option);
        } else {
          return [...prevSelectedOptions, option];
        }
      });
      setIsOpen(true);
    } else {
      setSelectedOptions([option]);
      setIsOpen(false);
    }
  };

  const handleIconClick = () => {
    if (config.id >= 5) {
      setIsOpen(!isOpen);
      fetchData();
    }
  };

  const rowRenderer = ({ key, index, style }) => {
    const option = options[index];
    const displayText = option[config.displayField];
    const needsTooltip = displayText.length > 20; // Adjust as needed for ellipsis length

    return (
      <div
        key={key}
        style={style}
        className="dropdown-option"
        onClick={(event) => handleOptionClick(option, event)}
        title={needsTooltip ? displayText : ''}
      >
        <span
          style={{
            color: selectedOptions.includes(option) ? 'blue' : 'inherit',
          }}
        >
          {displayText}
        </span>
        {needsTooltip && <div className="tooltip">{displayText}</div>}
      </div>
    );
  };

  return (
    <div ref={dropdownRef} className="dropdown-wrapper">
      <TextField
        disabled={config.id >= 5}
        helperText={config.helperText}
        iconAfter={config.iconAfter}
        label={config.label}
        onChange={handleSearchChange}
        onIconClick={handleIconClick}
        error={error}
      />
      {isOpen && (
        <div className="dropdown-list">
          {loading && <div>Loading...</div>}
          {error && <div>Error fetching data</div>}
          {noData && <div>No data found</div>}
          <AutoSizer disableHeight>
            {({ width }) => (
              <List
                width={width}
                height={150}
                rowCount={options.length}
                rowHeight={40}
                rowRenderer={rowRenderer}
              />
            )}
          </AutoSizer>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
