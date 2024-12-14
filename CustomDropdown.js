import React, { useState, useEffect, useRef } from 'react';
import { List, AutoSizer } from 'react-virtualized';
import axios from 'axios';
import useClickOutside from '../hooks/useClickOutside';
import TextField from './TextField';
import useDebounced from '../hooks/useDebounced';

const CustomDropdown = ({ config, onSelectionChange }) => {
  const [options, setOptions] = useState(
    config.id >= 5 ? [{ label: 'ALL', value: 'all' }] : []
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
          config.id >= 5 ? [{ label: 'ALL', value: 'all' }, ...data] : data
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
    }
  };

  const rowRenderer = ({ key, index, style }) => (
    <div
      key={key}
      style={style}
      className="dropdown-option"
      onClick={(event) => handleOptionClick(options[index], event)}
    >
      <span
        style={{
          color: selectedOptions.includes(options[index]) ? 'blue' : 'inherit',
        }}
      >
        {options[index].label}
      </span>
    </div>
  );

  return (
    <div ref={dropdownRef}>
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
        <>
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
        </>
      )}
    </div>
  );
};

export default CustomDropdown;