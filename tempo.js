function caltem() {
    var temperature = document.getElementById("box").value;
    var fromUnit = document.getElementById("tempdif").value;
    var toUnit = document.getElementById("tempdiff").value;
  
    
    var result;
    if (fromUnit === "cels") {
      
      if (toUnit === "cel") {
        result = temperature; 
      } else if (toUnit === "fa") {
        result = (temperature * 9/5) + 32; 
      } else if (toUnit === "ke") {
        result = parseFloat(temperature) + 273.15; 
      }
    } else if (fromUnit === "fah") {
      
      if (toUnit === "cel") {
        result = (temperature - 32) * 5/9; 
      } else if (toUnit === "fa") {
        result = temperature; 
      } else if (toUnit === "ke") {
        result = (temperature - 32) * 5/9 + 273.15; 
      }
    } else if (fromUnit === "kel") {
      
      if (toUnit === "cel") {
        result = temperature - 273.15; 
      } else if (toUnit === "fa") {
        result = (temperature - 273.15) * 9/5 + 32; 
      } else if (toUnit === "ke") {
        result = temperature; 
      }
    }
  
    document.getElementById("result").textContent = "Result: " + result;
  }
  