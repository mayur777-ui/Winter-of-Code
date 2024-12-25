let toast_box = document.getElementById("toast-box");

// let successMsg = 'Successfully submitted';
// let ErrorMsg = 'please fix the error';
// let InvalidMsg = 'Invalid input, check again';

function showToast(content) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  if (content === 'Success') {
    toast.innerHTML = `<i id="success-icon" class="fa-solid fa-circle-check"></i> Successfully ${content}`;
} else if (content === 'Error') {
    toast.innerHTML = `<i id="Error-icon" class="fa-solid fa-circle-xmark"></i> Please fix the ${content}`;
} else {
    toast.innerHTML = `<i id="Invalid-icon" class="fa-solid fa-circle-info"></i> Invalid input, check again`;
}
  toast_box.appendChild(toast);
    if(content.includes('Error') || content.includes('Invalid')){
        toast.classList.add('error');
    }
  setTimeout(()=>{
    // toast_box.removeChild(toast);
    toast.remove();
  },3000);
}
