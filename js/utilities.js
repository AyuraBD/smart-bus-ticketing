function getTextElementById (elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const number = parseInt(elementText);
    return number;
}

function setValueById (elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}







