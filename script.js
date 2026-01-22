document.addEventListener('DOMContentLoaded', () => {
    
    /* --------------------------------------------------
       SCROLL ANIMATIONS (Global)
    -------------------------------------------------- */
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-in-view');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-up, .reveal-scale');
    revealElements.forEach((el) => observer.observe(el));


    /* --------------------------------------------------
       MODAL LOGIC (Projects Page Only)
    -------------------------------------------------- */
    const modal = document.getElementById('projectModal');
    
    if (modal) {
        const mImg = document.getElementById('m-img');
        const mTitle = document.getElementById('m-title');
        const mCat = document.getElementById('m-cat');
        const mDesc = document.getElementById('m-desc');
        const cards = document.querySelectorAll('.project-card');
        const closeBtn = document.querySelector('.modal-close');

        // Open Modal
        cards.forEach(card => {
            card.addEventListener('click', () => {
                mTitle.innerText = card.dataset.title;
                mCat.innerText = card.dataset.cat;
                mDesc.innerText = card.dataset.desc;
                mImg.src = card.dataset.img;

                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; 
            });
        });

        // Close Logic
        const closeModal = () => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto'; 
        };

        closeBtn.addEventListener('click', closeModal);
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
        });
    }

    /* --------------------------------------------------
       FORM SUBMISSION (Contact Page Only)
    -------------------------------------------------- */
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = "Sent Successfully";
            btn.style.backgroundColor = "var(--accent)";
            btn.style.color = "#fff";
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = "transparent";
                btn.style.color = "var(--text-main)";
                contactForm.reset();
            }, 3000);
        });
    }
});