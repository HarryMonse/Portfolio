function validateName() {
    var name = document.getElementById("submit-form").value;
  
    if (isNaN(name)) {
      alert("Make sure that you entered it correctly.");
      return false;
    }
  
    return true;
  }