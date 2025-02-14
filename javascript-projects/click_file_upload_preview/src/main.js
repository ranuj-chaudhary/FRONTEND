function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

async function handleMultipleFiles(event) {
  const files = event.target.files;
  try {
    const storedFiles = JSON.parse(localStorage.getItem('storedFiles')) || {};

    for (let file of files) {
      const base64 = await fileToBase64(file);
      storedFiles[file.name] = base64; // Store using filename as key
    }

    localStorage.setItem('storedFiles', JSON.stringify(storedFiles));
    console.log('Files stored successfully!');
  } catch (err) {
    console.error('Local Storage QuotaExceeds', err);
  }
}

function displayStoredFiles() {
  const storedFiles = JSON.parse(localStorage.getItem('storedFiles')) || {};

  console.log(storedFiles);

  const container = document.getElementById('filePreview');
  container.innerHTML = ''; // Clear previous previews

  Object.entries(storedFiles).forEach(([fileName, base64]) => {
    const img = document.createElement('img');
    img.src = base64;
    img.alt = fileName;
    img.style.width = '100px'; // Adjust as needed
    img.style.margin = '5px';

    container.appendChild(img);
  });
}
