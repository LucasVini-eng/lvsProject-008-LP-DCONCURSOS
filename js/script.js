const searchInput = document.getElementById('searchInput');
const suggestionsDiv = document.getElementById('suggestions');
        
const suggestions = [
    'Curso PMAL',
    'Isolada de Legislação - Diego Correia',
    'Curso PMPE',
    'Apostila de Geografia',
    'Curso GCM-Maceió'
];

searchInput.addEventListener('input', function() {
    const value = this.value.toLowerCase();
            
    if (value.length > 0) {
        const filtered = suggestions.filter(s => 
            s.toLowerCase().includes(value)
        );
                
    if (filtered.length > 0) {
        suggestionsDiv.innerHTML = filtered.map(s => 
            `<div class="suggestion-item">${s}</div>`
        ).join('');
        suggestionsDiv.classList.add('show');
            } else {
                suggestionsDiv.classList.remove('show');
    }
        } else {
            suggestionsDiv.classList.remove('show');
        }
});

        
suggestionsDiv.addEventListener('click', function(e) {
    if (e.target.classList.contains('suggestion-item')) {
        searchInput.value = e.target.textContent;
        suggestionsDiv.classList.remove('show');
        }
});

document.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !suggestionsDiv.contains(e.target)) {
        suggestionsDiv.classList.remove('show');
        }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
            behavior: 'smooth',
             block: 'start'
    });
}
    });
});