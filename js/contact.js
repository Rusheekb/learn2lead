// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) {
        console.error('Contact form not found');
        return;
    }

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        
        try {
            // Disable the submit button and show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            
            // Get form data
            const formData = new FormData(contactForm);
            
            // Send the form data to Formspree
            const response = await fetch('https://formspree.io/f/mgvanndr', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: formData // Send FormData directly instead of JSON
            });
            
            const result = await response.json();
            
            if (!response.ok) {
                throw new Error(result.error || 'Network response was not ok');
            }
            
            // Show success message
            showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
            
            // Reset the form
            contactForm.reset();
            
        } catch (error) {
            console.error('Form submission error:', error);
            showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
        } finally {
            // Re-enable the submit button and restore original text
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });
});

// Notification system
function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 6px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;
    
    // Set background color based on type
    notification.style.backgroundColor = type === 'success' ? '#10B981' : '#EF4444';
    
    // Add to document
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Add keyframe animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style); 