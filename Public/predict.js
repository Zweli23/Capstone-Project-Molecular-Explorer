document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('predict-form'); // Form element
  
  form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent form from refreshing the page
      
      // Display a 'loading' message to simulate processing time
      document.getElementById('prediction-result').innerText = 'Predicting...';

      // Get the values from the form
      const nHM = parseInt(document.getElementById('nHM').value);
      const nO = parseInt(document.getElementById('nO').value);
      const nN_N = parseInt(document.getElementById('nN_N').value);
      const F01_N_N = document.getElementById('F01_N_N').value;
      const nArNO2 = parseInt(document.getElementById('nArNO2').value);

      // Simulate a delay (e.g., 2 seconds) before showing the prediction result
      setTimeout(() => {
          let toxicityPrediction = '';
          let biologicalActivityPrediction = '';
          let solubilityPrediction = '';

          // Generate tailored predictions based on input values
          if (nHM > 10 && nO < 3) {
              toxicityPrediction = "Low toxicity potential (Class A)";
          } else if (nHM <= 10 && nO >= 3) {
              toxicityPrediction = "Moderate toxicity potential (Class B)";
          } else {
              toxicityPrediction = "High toxicity potential (Class C)";
          }

          if (nN_N > 2 && nArNO2 > 1) {
              biologicalActivityPrediction = "High likelihood of biological activity.";
          } else {
              biologicalActivityPrediction = "Low likelihood of biological activity.";
          }

          if (nO > 5) {
              solubilityPrediction = "High solubility in water.";
          } else {
              solubilityPrediction = "Low solubility in water.";
          }

          // Display the predictions
          document.getElementById('prediction-result').innerHTML = `
              <p>Toxicity Prediction: ${toxicityPrediction}</p>
              <p>Biological Activity Prediction: ${biologicalActivityPrediction}</p>
              <p>Solubility Prediction: ${solubilityPrediction}</p>
          `;
      }, 2000); // 2000ms = 2 seconds
  });
});
