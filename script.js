document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-in-view');
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.reveal-up, .reveal-scale').forEach((el) => observer.observe(el));

    // 2. Modal Logic
    const modal = document.getElementById('projectModal');
    if (modal) {
        const mImg = document.getElementById('m-img');
        const mTitle = document.getElementById('m-title');
        const mCat = document.getElementById('m-cat');
        const mDesc = document.getElementById('m-desc');
        const closeBtn = document.querySelector('.modal-close');

        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', () => {
                mTitle.innerText = card.dataset.title;
                mCat.innerText = card.dataset.cat;
                mDesc.innerText = card.dataset.desc;
                mImg.src = card.dataset.img;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; 
            });
        });

        const closeModal = () => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto'; 
        };

        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('active')) closeModal(); });
    }
});