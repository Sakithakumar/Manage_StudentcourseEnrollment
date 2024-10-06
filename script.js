document.getElementById('enrollmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    // Get input values
    const courseName = document.getElementById('courseName').value.trim();
    const courseCode = document.getElementById('courseCode').value.trim();
    const studentName = document.getElementById('studentName').value.trim();

    // Create a new list item
    const studentList = document.getElementById('studentList');
    
    const listItem = document.createElement('li');
    
    // Structure the output
    listItem.innerHTML = `<strong>${studentName}</strong> is enrolled in <em>${courseName}</em> (<code>${courseCode}</code>)`;
    
    // Append to the student list
    studentList.appendChild(listItem);

   // Clear input fields
   document.getElementById('enrollmentForm').reset();
});
