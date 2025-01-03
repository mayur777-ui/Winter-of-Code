let toast_box = document.getElementById("toast-box");

// let successMsg = 'Successfully submitted';
// let ErrorMsg = 'please fix the error';
// let InvalidMsg = 'Invalid input, check again';

function showToast(content) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  if (content === 'Success') {
    toast.innerHTML = `<i id="success-icon" class="fa-solid fa-circle-check"></i>Great ${content}`;
} else if (content === 'Error') {
    toast.innerHTML = `<i id="Error-icon" class="fa-solid fa-circle-xmark"></i> Please fix the ${content}`;
} else {
    toast.innerHTML = `<i id="Invalid-icon" class="fa-solid fa-circle-info"></i> Invalid input, check again`;
}
  toast_box.appendChild(toast);
    if(content.includes('Error')){
        toast.classList.add('error');
    }else if(content.includes('Invalid')){
      toast.classList.add('invalid');
    }else{
      toast.classList.add('success');
    }
  setTimeout(()=>{
    // toast_box.removeChild(toast);
    toast.remove();
  },5000);
}
