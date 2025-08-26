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

function calculateGrade() {
  const input = document.getElementById('score');
  const resultDiv = document.getElementById('result');
  const submitBtn = document.getElementById('submitBtn');
  const backBtn = document.getElementById('backBtn');

  // reset prior state
  resultDiv.textContent = '';
  resultDiv.className = 'result';

  const raw = input.value.trim();
  const score = parseInt(raw, 10);

  // validation: empty or non-numeric
  if (raw === '' || isNaN(score)) {
    resultDiv.textContent = '❗ Please enter a valid number.';
    resultDiv.classList.add('grade-error');
    return;
  }

  // validation: range 0–100
  if (score < 0 || score > 100) {
    resultDiv.textContent = '❗ Score must be between 0 and 100.';
    resultDiv.classList.add('grade-error');
    return;
  }

  // determine grade
  let grade, cls;
  if (score >= 90)      { grade = 'A'; cls = 'grade-A'; }
  else if (score >= 80) { grade = 'B'; cls = 'grade-B'; }
  else if (score >= 70) { grade = 'C'; cls = 'grade-C'; }
  else if (score >= 60) { grade = 'D'; cls = 'grade-D'; }
  else                  { grade = 'F'; cls = 'grade-F'; }

  resultDiv.textContent = `Your grade: ${grade} (${score}%)`;
  resultDiv.classList.add(cls);

  // toggle buttons
  submitBtn.classList.add('hidden');
  backBtn.classList.remove('hidden');
}

function resetForm() {
  const input = document.getElementById('score');
  const resultDiv = document.getElementById('result');
  const submitBtn = document.getElementById('submitBtn');
  const backBtn = document.getElementById('backBtn');

  // clear everything
  input.value = '';
  resultDiv.textContent = '';
  resultDiv.className = 'result';

  // toggle buttons back
  submitBtn.classList.remove('hidden');
  backBtn.classList.add('hidden');
  input.focus();
}

