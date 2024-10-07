// Edit
  function openModal() {
    document.getElementById("editModal").classList.remove("hidden");
    document.getElementById("editModal").classList.add("flex");
}


function closeModal() {
    document.getElementById("editModal").classList.add("hidden");
    document.getElementById("editModal").classList.remove("flex");
}

 
// Remove
  function openWarning() {
    document.getElementById("remove").classList.remove("hidden");
    document.getElementById("remove").classList.add("flex");
}


function closeWarning() {
    document.getElementById("remove").classList.add("hidden");
    document.getElementById("remove").classList.remove("flex");
}

// AddUser

function openAddUser() {
    document.getElementById("addUser").classList.remove("hidden");
    document.getElementById("addUser").classList.add("flex");
}


function closeAddUser() {
    document.getElementById("addUser").classList.add("hidden");
    document.getElementById("addUser").classList.remove("flex");
}

// rotateIcon
function rotateIcon() {
    const icon = document.querySelector("#rotate");
    const iconBg = document.querySelector("#iconBg");
    const options = document.querySelector("#options");
    icon.classList.toggle("-rotate-90"); // Toggle the rotation class
    iconBg.classList.toggle("bg-slate-300");
    options.classList.toggle("hidden");
    options.classList.toggle("opacity-100")
}
