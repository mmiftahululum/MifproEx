document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const clearSearchBtn = document.getElementById('clear-search');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const appCards = document.querySelectorAll('.app-card');
    const appsGrid = document.getElementById('apps-grid');
    const emptyState = document.getElementById('empty-state');
    const themeToggle = document.getElementById('theme-toggle');

    // Theme Switcher Logic
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        themeToggle.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    // Search and Filter State variables
    let activeCategory = 'all';
    let searchQuery = '';

    // Search input handler
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        
        // Show/hide clear button
        if (searchQuery.length > 0) {
            clearSearchBtn.style.display = 'block';
        } else {
            clearSearchBtn.style.display = 'none';
        }
        
        applyFilters();
    });

    // Clear search button handler
    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        clearSearchBtn.style.display = 'none';
        searchInput.focus();
        applyFilters();
    });

    // Category filter handler
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from other buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            activeCategory = button.getAttribute('data-category');
            
            applyFilters();
        });
    });

    // Combined search and category filter logic
    function applyFilters() {
        let visibleCount = 0;

        appCards.forEach(card => {
            const categories = card.getAttribute('data-category').split(' ');
            const title = card.querySelector('.app-title').textContent.toLowerCase();
            const description = card.querySelector('.app-description').textContent.toLowerCase();
            const techTags = Array.from(card.querySelectorAll('.app-tech-tags span'))
                                  .map(tag => tag.textContent.toLowerCase());
            
            // Match category
            const matchCategory = activeCategory === 'all' || categories.includes(activeCategory);
            
            // Match search query
            const matchSearch = searchQuery === '' || 
                                title.includes(searchQuery) || 
                                description.includes(searchQuery) ||
                                techTags.some(tag => tag.includes(searchQuery));

            if (matchCategory && matchSearch) {
                // Show card with smooth animation
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 50);
                visibleCount++;
            } else {
                // Hide card smoothly
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });

        // Toggle empty state message
        setTimeout(() => {
            if (visibleCount === 0) {
                appsGrid.style.display = 'none';
                emptyState.style.display = 'block';
            } else {
                appsGrid.style.display = 'grid';
                emptyState.style.display = 'none';
            }
        }, 150);
    }
    
    // Add entry animation to cards
    appCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease, transform 0.5s var(--ease-bounce), border-color var(--transition-speed) ease, box-shadow 0.4s ease`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});
