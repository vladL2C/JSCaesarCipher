let caesar = function(string,shift) {
  
  let cipheredString = '';

  for (let i = 0; i < string.length; i++){
    var char = string[i];
    
    var code = string[i].charCodeAt();
     if (code >= 97 && code <= 122){
      char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      
    } else if (code >= 65 && code <= 90) {
      char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
    }
    
    cipheredString += char;
  }
  
  return cipheredString;
};