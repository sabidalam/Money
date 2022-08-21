function getInputFieldById(inputId) {
    const inputFieldElement = document.getElementById(inputId);
    const inputFieldValueString = inputFieldElement.value;
    const inputFieldValue = parseInt(inputFieldValueString);
    return inputFieldValue;
}

function getTextFieldById(textId) {
    const textFieldElement = document.getElementById(textId);
    const textFieldValueString = textFieldElement.innerText;
    const textFieldValue = parseInt(textFieldValueString);
    return textFieldValue;
}

function resetInputFieldById(inputId) {
    const fieldElement = document.getElementById(inputId);
    const resetValue = fieldElement.value = '';
    return resetValue;
}
function resetTextFieldById(textId) {
    const textFieldElement = document.getElementById(textId);
    const resetValue = textFieldElement.innerText = '00';
    return resetValue;
}

function setTextFieldById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;

}

document.getElementById('calculate-btn').addEventListener('click', function () {

    const incomeAmount = getInputFieldById('income-amount');

    const foodCost = getInputFieldById('food-cost');

    const rentCost = getInputFieldById('rent-cost');

    const clothesCost = getInputFieldById('cloths-cost');

    const totalExpenses = foodCost + rentCost + clothesCost;
    if (totalExpenses > incomeAmount) {
        alert('insufficient Balance!')
        return;
    }

    setTextFieldById('total-expenses', totalExpenses);

    const remainingBalance = incomeAmount - totalExpenses;

    setTextFieldById('remaining-balance', remainingBalance);


})

document.getElementById('reset-btn').addEventListener('click', function () {

    const incomeAmount = resetInputFieldById('income-amount');

    const foodCost = resetInputFieldById('food-cost');

    const rentCost = resetInputFieldById('rent-cost');

    const clothesCost = resetInputFieldById('cloths-cost');

    const totalExpenses = resetTextFieldById('total-expenses');

    const remainingBalance = resetTextFieldById('remaining-balance');

    const saveField = resetInputFieldById('save-field');

    const savingAmount = resetTextFieldById('save-amount');

    const balance = resetTextFieldById('balance');


})

document.getElementById('save-btn').addEventListener('click', function () {

    const incomeAmount = getInputFieldById('income-amount');

    const saveField = getInputFieldById('save-field');
    if (saveField > 100) {
        alert('can`t percent avobe 100');
        return;
    }

    const savingAmount = incomeAmount * (saveField / 100);

    setTextFieldById('save-amount', savingAmount);

    const remainingBalance = getTextFieldById('remaining-balance');

    const remaining = remainingBalance - savingAmount;

    const remainingAmount = Math.abs(remaining);

    setTextFieldById('balance', remainingAmount);



})