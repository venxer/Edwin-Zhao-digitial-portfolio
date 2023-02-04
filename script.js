const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>
    {
        if (entry.isIntersecting)
        {
            entry.target.classList.add('show');
        }
        else
        {
            entry.target.classList.remove('show');
        }
    });
});

const languageDivs = document.querySelectorAll(".language");
languageDivs.forEach((el) => observer.observe(el));