function convertLength() {
  var meters = document.getElementById("meterInput").value;
  var resultDiv = document.getElementById("resultArea");

  if (meters === "") {
    resultDiv.innerHTML = "❗ Please enter a number!";
    resultDiv.classList.add("show");
    return;
  }

  var feet = meters * 3.28084;
  resultDiv.innerHTML = `<i class="fas fa-check-circle" style="color:green;"></i> ${feet.toFixed(2)} feet`;

  resultDiv.classList.add("show");
}
function calculateChange() {
  const inputEl = document.getElementById('amount');
  const resultDiv = document.getElementById('result');
  const submitBtn = document.getElementById('submitBtn');
  const backBtn = document.getElementById('backBtn');

  // Clear previous result and classes
  resultDiv.textContent = '';
  resultDiv.className = '';

  // Trim and parse input
  const rawValue = inputEl.value.trim();
  const amount = parseInt(rawValue, 10);

  // Validation: empty or non-positive integer
  if (rawValue === '' || isNaN(amount) || amount <= 0) {
    resultDiv.textContent = '❗ Please enter a valid positive amount.';
    resultDiv.classList.add('error');
    return;
  }

  // Calculate change
  let remaining = amount;
  const denominations = [500, 100, 50, 20, 10, 5, 1];

  for (let bill of denominations) {
    const count = Math.floor(remaining / bill);
    if (count > 0) {
      resultDiv.innerHTML += `${count} × ฿${bill}<br>`;
      remaining %= bill;
    }
  }

  // Toggle buttons
  submitBtn.classList.add('hidden');
  backBtn.classList.remove('hidden');
}

function resetCalculator() {
  const inputEl = document.getElementById('amount');
  const resultDiv = document.getElementById('result');
  const submitBtn = document.getElementById('submitBtn');
  const backBtn = document.getElementById('backBtn');

  // Reset form fields and result
  inputEl.value = '';
  resultDiv.textContent = '';
  resultDiv.className = '';

  // Toggle buttons back
  submitBtn.classList.remove('hidden');
  backBtn.classList.add('hidden');

  // Focus input for user convenience
  inputEl.focus();
}

// Grade Calculator Logic
function calculateGrade() {
  const input = document.getElementById('score');
  const resultDiv = document.getElementById('result');
  const submitBtn = document.getElementById('submitBtn');
  const backBtn = document.getElementById('backBtn');

  // Reset previous result and classes
  resultDiv.textContent = '';
  resultDiv.className = 'result'; // base class only

  const raw = input.value.trim();
  const score = parseInt(raw, 10);

  // Validation: empty or non-numeric
  if (raw === '' || isNaN(score)) {
    resultDiv.textContent = '❗ Please enter a valid number.';
    resultDiv.classList.add('grade-error', 'show');
    return;
  }

  // Validation: out of range
  if (score < 0 || score > 100) {
    resultDiv.textContent = '❗ Score must be between 0 and 100.';
    resultDiv.classList.add('grade-error', 'show');
    return;
  }

  // Determine grade and corresponding class
  let gradeText = '';
  let gradeClass = '';

  if (score >= 90) {
    gradeText = 'A';
    gradeClass = 'grade-A';
  } else if (score >= 80) {
    gradeText = 'B';
    gradeClass = 'grade-B';
  } else if (score >= 70) {
    gradeText = 'C';
    gradeClass = 'grade-C';
  } else if (score >= 60) {
    gradeText = 'D';
    gradeClass = 'grade-D';
  } else {
    gradeText = 'F';
    gradeClass = 'grade-F';
  }

  // Display result with styling
  resultDiv.textContent = `Your grade: ${gradeText} (${score}%)`;
  resultDiv.classList.add('show', gradeClass);

  // Toggle buttons
  submitBtn.classList.add('hidden');
  backBtn.classList.remove('hidden');
}

// Reset Form Logic
function resetForm() {
  const input = document.getElementById('score');
  const resultDiv = document.getElementById('result');
  const submitBtn = document.getElementById('submitBtn');
  const backBtn = document.getElementById('backBtn');

  // Clear input and result
  input.value = '';
  resultDiv.textContent = '';
  resultDiv.className = 'result'; // reset to base class

  // Toggle buttons back
  submitBtn.classList.remove('hidden');
  backBtn.classList.add('hidden');

  // Focus input for user convenience
  input.focus();
}
