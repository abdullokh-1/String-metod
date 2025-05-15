

// let str = "salomlar"

// console.log(str.indexOf("l"))

document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name-input');
    const nameDisplay = document.getElementById('name-display');
    const lettersDisplay = document.getElementById('letters-display');
    const bStatus = document.getElementById('b-status');
    
    // Update results as user types
    nameInput.addEventListener('input', showLetters);
    
    function showLetters() {
        const name = nameInput.value.trim();
        
        if (name === '') {
            nameDisplay.textContent = '';
            lettersDisplay.textContent = '';
            bStatus.textContent = '';
            return;
        }
        
        // Display the name
        nameDisplay.textContent = `Имя: ${name}`;
        
        // Get all letters in the name
        const letters = [];
        for (let i = 0; i < name.length; i++) {
            const char = name[i];
            if (char.match(/[a-zA-Zа-яА-Я]/)) {
                letters.push(char);
            }
        }
        
        // Display all letters
        lettersDisplay.textContent = `Буквы в имени: ${letters.join(', ')}`;
        
        // Tell about letter 'B'/'b'
        const hasLetterB = name.toLowerCase().includes('b');
        if (hasLetterB) {
            bStatus.textContent = 'Буква "B" присутствует в вашем имени.';
        } else {
            bStatus.textContent = 'Буква "B" отсутствует в вашем имени.';
        }
    }
});