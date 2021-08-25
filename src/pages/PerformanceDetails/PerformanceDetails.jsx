import React from 'react';
import { Card } from 'antd';

import './PerformanceDetails.css';

function PerformanceDetails({ selectedPerformance }) {
  return (
    <React.Fragment>
      <Card>
        <h3>
          <span className="performance-key">Nume compozitor: </span>
          <span className="performance-details">
            {selectedPerformance.numeCompozitor}
          </span>
        </h3>
        <h3>
          <span className="performance-key">Anul compozitiei: </span>
          <span className="performance-details">
            {selectedPerformance.anulCompozitiei}
          </span>
        </h3>
        <h3>
          <span className="performance-key">Data nasterii: </span>
          <span className="performance-details">
            {selectedPerformance.dataNasterii}
          </span>
        </h3>
        <h3>
          <span className="performance-key">Detalii: </span>
          <span className="performance-details">
            {selectedPerformance.detalii}
          </span>
        </h3>
      </Card>
    </React.Fragment>
  );
}

export default PerformanceDetails;
