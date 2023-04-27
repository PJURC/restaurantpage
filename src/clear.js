function clearDom() {
    const content = document.getElementById('content');
    const navbar = document.getElementById('navbar');
    // Remove all children except the navbar
    while(content.lastChild !== navbar) {
        content.removeChild(content.lastChild);
    } 
};

function clearSelection() {
    // Remove the class 'selected'
    document.querySelectorAll('.selected').forEach(element => {
        element.classList.remove('selected')
    });
};

function assignSelected(element) {
    // Assign the id 'selected' to the passed element
    element.classList.add('selected');
};

export { clearDom, clearSelection, assignSelected };