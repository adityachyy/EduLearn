
// Import the necessary functions from web-vitals
import { onCLS, onFCP, onFID, onLCP, onTTFB } from 'web-vitals';

// This function will log the metrics to the console
const reportWebVitals = (metric) => {
  console.log(metric);
};

// Now, capture each metric and report it
onCLS(reportWebVitals);
onFCP(reportWebVitals);
onFID(reportWebVitals);
onLCP(reportWebVitals);
onTTFB(reportWebVitals);

export default reportWebVitals;
