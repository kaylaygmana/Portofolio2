document.addEventListener('DOMContentLoaded', function () {
    // Function to show image in modal
    function showImage(imageSrc) {
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');

        modal.style.display = 'block';
        modalImage.src = imageSrc;
    }
  

    // Function to close modal
    function closeModal() {
        const modal = document.getElementById('imageModal');
        modal.style.display = 'none';
    }

    // Close modal when clicking outside of it
    window.onclick = function (event) {
        const modal = document.getElementById('imageModal');
        if (event.target == modal) {
            closeModal();
        }
    }

    // Add event listener to handle image click
    document.querySelectorAll('.project').forEach(function (project) {
        project.addEventListener('click', function () {
            const imageSrc = this.querySelector('img').src;
            showImage(imageSrc);
        });
    });

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    // Add the following event listener to handle the smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Button to smooth scroll to Experience section
    const experienceButton = document.getElementById('experience-button');

    if (experienceButton) {
        experienceButton.addEventListener('click', function () {
            const experienceSection = document.getElementById('experience');

            if (experienceSection) {
                experienceSection.classList.add('animate-items');
                experienceSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Typing animation for greeting text
    const textElement = document.getElementById('typing-text');
    const greetings = ["I am a Student of Mulawarman University", "Social Media Content Manager", "Network Topology Mapper", "Content Designer"];
    let greetingIndex = 0;
    let charIndex = 0;

    function typeText() {
        if (greetingIndex < greetings.length) {
            const greeting = greetings[greetingIndex];
            greeting.split('').forEach((char, index) => {
                setTimeout(() => {
                    textElement.textContent += char;
                    if (index === greeting.length - 1) {
                        setTimeout(resetText, 1000);
                    }
                }, index * 50);
            });
        }
    }
    
    function resetText() {
        let currentText = textElement.textContent;
        if (currentText.length > 7) {
            textElement.textContent = currentText.slice(0, -1);
            setTimeout(resetText, 50);
        } else {
            // Text erased, move to the next greeting
            greetingIndex = (greetingIndex + 1) % greetings.length;
            charIndex = 0;
            setTimeout(typeText, 500);
        }
    }
    
    // ngetik
    typeText();

    // Function to handle form submission
    function handleFormSubmission(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const nameValue = document.querySelector('input[name="name"]').value;
        const emailValue = document.querySelector('input[name="email"]').value;
        const messageValue = document.querySelector('textarea[name="message"]').value;

        const pengisiForm = {
            name: nameValue,
            email: emailValue,
            message: messageValue
        };

        localStorage.setItem('pengisi-form', JSON.stringify(pengisiForm));

        document.querySelector('input[name="name"]').value = '';
        document.querySelector('input[name="email"]').value = '';
        document.querySelector('textarea[name="message"]').value = '';

        alert('Form submitted successfully!');
    }

    // Add event listener to the form submission
    document.querySelector('form').addEventListener('submit', handleFormSubmission);
});
