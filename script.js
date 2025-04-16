// Define the GPA point values for each letter grade
const gradePoints = {
  A: 4,
  B: 3,
  C: 2,
  D: 1,
  F: 0
};

// Get references to the DOM elements we need
const coursesContainer = document.getElementById("courses");
const resultDiv = document.getElementById("result");

// Handle "Add Another Course" button click
document.getElementById("add-course").addEventListener("click", () => {
  // Create a new course row dynamically
  const row = document.createElement("div");
  row.className = "course-row";

  // Set the inner HTML of the new row to include input and select elements
  row.innerHTML = `
    <input type="text" placeholder="Course Name" required />
    <select required>
      <option value="">Select Grade</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
      <option value="D">D</option>
      <option value="F">F</option>
    </select>
  `;

  // Append the new row to the container
  coursesContainer.appendChild(row);
});

// Handle "Calculate GPA" button click
document.getElementById("calculate").addEventListener("click", () => {
  // Get all course rows
  const rows = document.querySelectorAll(".course-row");

  let totalPoints = 0; // Sum of all GPA points
  let count = 0;       // Number of valid grade entries
  let valid = true;    // Flag to track if all rows have selected grades

  // Loop through each course row
  rows.forEach(row => {
    const gradeSelect = row.querySelector("select"); // Get grade select element
    const grade = gradeSelect.value;                 // Get selected grade

    if (!grade) {
      // If a grade is not selected, mark as invalid
      valid = false;
    } else {
      // Otherwise, add corresponding GPA points to total
      totalPoints += gradePoints[grade];
      count++;
    }
  });

  // Display error if grades are missing
  if (!valid || count === 0) {
    resultDiv.textContent = "Please make sure all grades are selected.";
    resultDiv.style.color = "red";
    return;
  }

  // Calculate average GPA and display it
  const gpa = (totalPoints / count).toFixed(2);
  resultDiv.textContent = `Your estimated GPA is: ${gpa}`;
  resultDiv.style.color = "#2980b9";
});

