(function(){
  var formDataXHR = new XMLHttpRequest();

  document.addEventListener("DOMContentLoaded", function(e){

    formDataXHR.addEventListener("load", function(e){
      var formDataArray =JSON.parse(e.target.responseText);
      var formElement = document.querySelector("[data-js='form--data']");

      formDataArray.forEach(function(formField){
        if (formField.type === "select") {
          var selectHTML = "<select>";
          formField.options.forEach(function(option){
            selectHTML += `
              <option value="${option.value}">${option.label}</option>
            `;
          })
          selectHTML += "</select>"
          formElement.innerHTML += selectHTML;
        }else {
          formElement.innerHTML += `
            <input  type="${formField.type}" placeholder="${formField.label}" value="" id="${formField.icon}">
          `;
        }
      })
    });
  });
  formDataXHR.open("GET", "http://json-data.herokuapp.com/forms");
  formDataXHR.send();
}());
