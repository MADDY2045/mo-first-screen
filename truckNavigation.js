import React, { useState, useEffect } from 'react';

const data = {
  dcLocations: [
    { id: 'dc1', name: 'DC 1', trucks: ['truck1', 'truck3'] },
    { id: 'dc2', name: 'DC 2', trucks: ['truck1', 'truck2'] },
    { id: 'dc3', name: 'DC 3', trucks: ['truck1', 'truck3'] },
    { id: 'dc4', name: 'DC 4', trucks: ['truck2'] },
    { id: 'dc5', name: 'DC 5', trucks: ['truck3'] },
  ],
  trucks: [
    { id: 'truck1', name: 'Truck A' },
    { id: 'truck2', name: 'Truck B' },
    { id: 'truck3', name: 'Truck C' },
  ],
};

const fetchData = async (truck, dcLocation) => {
  try {
    const response = await fetch('/api/endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ truck, dcLocation }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('API Response:', data);
      // Handle the response data as needed
    } else {
      console.error('API Error:', response.statusText);
    }
  } catch (error) {
    console.error('Fetch Error:', error);
  }
};

const SupplyChainDropdowns = () => {
  const [selectedTruck, setSelectedTruck] = useState('');
  const [selectedDcLocation, setSelectedDcLocation] = useState('');
  const [availableDcLocations, setAvailableDcLocations] = useState([]);
  const [availableTrucks, setAvailableTrucks] = useState(data.trucks);

  useEffect(() => {
    if (selectedTruck) {
      const dcLocationIds = data.dcLocations
        .filter((dc) => dc.trucks.includes(selectedTruck))
        .map((dc) => dc.id);
      setAvailableDcLocations(
        data.dcLocations.filter((dc) => dcLocationIds.includes(dc.id))
      );
    } else {
      setAvailableDcLocations(data.dcLocations);
    }
  }, [selectedTruck]);

  useEffect(() => {
    if (selectedDcLocation) {
      const dcData = data.dcLocations.find(
        (dc) => dc.id === selectedDcLocation
      );
      const truckIds = dcData.trucks;
      setAvailableTrucks(
        data.trucks.filter((truck) => truckIds.includes(truck.id))
      );
    } else {
      setAvailableTrucks(data.trucks);
    }
  }, [selectedDcLocation]);

  useEffect(() => {
    if (selectedTruck && selectedDcLocation) {
      fetchData(selectedTruck, selectedDcLocation);
    }
  }, [selectedTruck, selectedDcLocation]);

  const navigateTrucks = (direction) => {
    const currentIndex = availableTrucks.findIndex(
      (truck) => truck.id === selectedTruck
    );
    let newIndex = currentIndex + direction;

    if (newIndex < 0) {
      newIndex = availableTrucks.length - 1;
    } else if (newIndex >= availableTrucks.length) {
      newIndex = 0;
    }

    setSelectedTruck(availableTrucks[newIndex].id);
    setSelectedDcLocation('');
  };

  return (
    <div>
      <div>
        <button onClick={() => navigateTrucks(-1)}>Previous Truck</button>
        <button onClick={() => navigateTrucks(1)}>Next Truck</button>
      </div>

      <div>
        <label htmlFor="truckDropdown">Select Truck: </label>
        <select
          id="truckDropdown"
          onChange={(e) => {
            setSelectedTruck(e.target.value);
            setSelectedDcLocation('');
          }}
          value={selectedTruck}
        >
          <option value="" disabled>
            Select a truck
          </option>
          {availableTrucks.map((truck) => (
            <option key={truck.id} value={truck.id}>
              {truck.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="dcDropdown">Select DC Location: </label>
        <select
          id="dcDropdown"
          onChange={(e) => setSelectedDcLocation(e.target.value)}
          value={selectedDcLocation}
          disabled={!availableDcLocations.length}
        >
          <option value="" disabled>
            Select a DC location
          </option>
          {availableDcLocations.map((dc) => (
            <option key={dc.id} value={dc.id}>
              {dc.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SupplyChainDropdowns;
