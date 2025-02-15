document.addEventListener('DOMContentLoaded', function () {
        const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
        const navbarCollapse = document.querySelector('.navbar-collapse');

        navbarLinks.forEach(link => {
            link.addEventListener('click', () => {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false // Ensure it closes without toggling
                });
                bsCollapse.hide();
            });
        });
    });