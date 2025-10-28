function calculateTotals() {
    for(let group = 1; group <= 3; group++) {
        let total = 0;
        const inputs = document.querySelectorAll(`td:nth-child(${group + 1}) input`);
        inputs.forEach(input => {
            const value = parseInt(input.value) || 0;
            total += value;
        });
        document.getElementById(`total${group}`).textContent = total;
    }
}

// Add event listeners to all input fields
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.score-input');
    inputs.forEach(input => {
        input.addEventListener('input', calculateTotals);
        input.addEventListener('change', calculateTotals);
    });
});