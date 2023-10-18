document.addEventListener('DOMContentLoaded', async () => {
  const resultDiv = document.getElementById('result');
  const response = await fetch('https://nepalidate.onrender.com/api/nepali');
  try {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    resultDiv.innerHTML = `
          <pre>${JSON.stringify(data)}</pre>
      `;
  } catch (error) {
    resultDiv.innerHTML = `
          <h2>Error</h2>
          <p>${error.message}</p>
      `;
  }
});
