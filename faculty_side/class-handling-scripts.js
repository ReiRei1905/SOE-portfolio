document.addEventListener("DOMContentLoaded", () => {
    // Select elements
    const createOutputBtn = document.getElementById('createOutputBtn');
    const createOutputContainer = document.querySelector('.create-output-container');
    const confirmOutputBtn = document.getElementById('confirmOutputBtn');
    const cancelOutputBtn = document.getElementById('cancelOutputBtn');
    const outputsList = document.getElementById('outputsList');

    // Show the create output container
    createOutputBtn.addEventListener('click', () => {
        createOutputContainer.classList.remove('hidden');
    });

    // Hide the create output container
    cancelOutputBtn.addEventListener('click', () => {
        createOutputContainer.classList.add('hidden');
    });

    // Confirm and add the required output
    confirmOutputBtn.addEventListener('click', () => {
        const outputName = document.getElementById('outputName').value.trim();
        const totalScore = document.getElementById('totalScore').value.trim();

        if (outputName === '' || totalScore === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Create a new list item for the output
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${outputName} (Total Score: ${totalScore})</span>
            <div class="input-and-buttons">
                <input type="number" placeholder="Enter your score" class="user-score" />
                <div class="button-group">
                    <button class="editOutput-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </div>
            </div>
        `;

        // Append the new output to the list
        outputsList.appendChild(listItem);

        // Clear the input fields and hide the container
        document.getElementById('outputName').value = '';
        document.getElementById('totalScore').value = '';
        createOutputContainer.classList.add('hidden');
    });

    // Use event delegation for Edit and Delete buttons
    outputsList.addEventListener('click', (event) => {
        const target = event.target;

        // Handle Edit button click
        if (target.classList.contains('editOutput-btn')) {
            const listItem = target.closest('li');
            const outputDetails = listItem.querySelector('span').textContent;
            const [outputName, totalScore] = outputDetails
                .match(/^(.*) \(Total Score: (\d+)\)$/)
                .slice(1);

            // Populate the input fields with the existing values
            document.getElementById('outputName').value = outputName;
            document.getElementById('totalScore').value = totalScore;

            // Show the create output container for editing
            createOutputContainer.classList.remove('hidden');

            // Remove the existing list item
            listItem.remove();
        }

        // Handle Delete button click
        if (target.classList.contains('delete-btn')) {
            const listItem = target.closest('li');
            listItem.remove();
        }
    });

    // Deadline Logic Frontend:
    const setDeadlineBtn = document.querySelector('.class-actions button:nth-child(2)');
    const setDeadlineContainer = document.querySelector('.set-deadline-container');
    const confirmDeadlineBtn = document.getElementById('confirmDeadlineBtn');
    const cancelDeadlineBtn = document.getElementById('cancelDeadlineBtn');
    const deadlineDisplay = document.getElementById('deadlineDisplay');

    // Show the set deadline container
    setDeadlineBtn.addEventListener('click', () => {
        setDeadlineContainer.classList.remove('hidden');
    });

    // Hide the set deadline container
    cancelDeadlineBtn.addEventListener('click', () => {
        setDeadlineContainer.classList.add('hidden');
    });

    confirmDeadlineBtn.addEventListener('click', () => {
        const deadlineDate = document.getElementById('deadlineDate').value;
        const deadlineTime = document.getElementById('deadlineTime').value;
    
        if (deadlineDate === '' || deadlineTime === '') {
            alert('Please select both date and time.');
            return;
        }
    
        // Convert the time to 12-hour format with AM/PM
        const [hours, minutes] = deadlineTime.split(':');
        const period = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
    
        const formattedTime = `${formattedHours}:${minutes} ${period}`;
        const formattedDeadline = `${deadlineDate} at ${formattedTime}`;
    
        // Display the formatted deadline
        deadlineDisplay.innerHTML = `<strong>Deadline:</strong> ${formattedDeadline}`;
    
        // Hide the set deadline container
        setDeadlineContainer.classList.add('hidden');
    });

    const showRequirementInputBtn = document.getElementById("showRequirementInputBtn");
    const addRequirementContainer = document.querySelector(".add-requirement-container");
    const requirementInput = document.getElementById("requirementInput");
    const addRequirementBtn = document.getElementById("addRequirementBtn");
    const requirementsList = document.getElementById("requirementsList");

    let editingRequirement = null; // Track the requirement being edited

    // Show the input container when "Add Requirement" button is clicked
    showRequirementInputBtn.addEventListener("click", () => {
        addRequirementContainer.classList.remove("hidden");
        showRequirementInputBtn.classList.add("hidden"); // Hide the "Add Requirement" button
    });

    // Add a new requirement
    addRequirementBtn.addEventListener("click", () => {
        const requirementText = requirementInput.value.trim();

        if (requirementText === "") {
            alert("Please type a requirement.");
            return;
        }

        if (editingRequirement) {
            // Update the existing requirement
            editingRequirement.querySelector(".requirement-text").textContent = requirementText;
            editingRequirement = null; // Reset the editing state
        } else {
            // Create a new list item for the requirement
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span class="requirement-text">${requirementText}</span>
                <div class="requirement-actions">
                    <button class="edit-requirement-btn">Edit</button>
                    <button class="delete-requirement-btn">Delete</button>
                </div>
            `;
          // Append the new requirement to the list
          requirementsList.appendChild(listItem);
        }  

        // Clear the input field and hide the input container
        requirementInput.value = "";
        addRequirementContainer.classList.add("hidden");
        showRequirementInputBtn.classList.remove("hidden"); // Show the "Add Requirement" button again
    });

    // Use event delegation for Edit and Delete buttons
    requirementsList.addEventListener("click", (event) => {
        const target = event.target;

        // Handle Edit button click
        if (target.classList.contains("edit-requirement-btn")) {
            const listItem = target.closest("li");
            const requirementText = listItem.querySelector(".requirement-text").textContent;

            // Populate the input field with the existing requirement
            requirementInput.value = requirementText;

            // Show the input container for editing
            addRequirementContainer.classList.remove("hidden");
            showRequirementInputBtn.classList.add("hidden");

            // Set the editing state
            editingRequirement = listItem;
        }

        // Handle Delete button click
        if (target.classList.contains("delete-requirement-btn")) {
            const listItem = target.closest("li");
            listItem.remove();
        }
    });

    
});