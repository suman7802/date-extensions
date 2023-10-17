document.addEventListener('DOMContentLoaded', async () => {
  const resultDiv = document.getElementById('result');

  try {
    const response = await fetch('https://nepalidate.onrender.com/api/nepali', {
      mode: 'no-cors',
    });
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

// <pre>${JSON.stringify(data, null, 2)}</pre>
// https://nepalidate.onrender.com/api/nepali
// 'https://jsonplaceholder.typicode.com/posts/1'
