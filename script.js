const gradePoints = {
  A: 4,
  B: 3,
  C: 2,
  D: 1,
  F: 0
};

const coursesContainer = document.getElementById("courses");
const resultDiv = document.getElementById("result");

document.getElementById("add-course").addEventListener("click", () => {
  const row = document.createElement("div");
  row.className = "course-row";
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
  coursesContainer.appendChild(row);
});

document.getElementById("calculate").addEventListener("click", () => {
  const rows = document.querySelectorAll(".course-row");
  let totalPoints = 0;
  let count = 0;
  let valid = true;

  rows.forEach(row => {
    const gradeSelect = row.querySelector("select");
    const grade = gradeSelect.value;

    if (!grade) {
      valid = false;
    } else {
      totalPoints += gradePoints[grade];
      count++;
    }
  });

  if (!valid || count === 0) {
    resultDiv.textContent = "Please make sure all grades are selected.";
    resultDiv.style.color = "red";
    return;
  }

  const gpa = (totalPoints / count).toFixed(2);
  resultDiv.textContent = `Your estimated GPA is: ${gpa}`;
  resultDiv.style.color = "#2980b9";
});
