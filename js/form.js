// Form Functionality - Direct mailto fallback with optional form service
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form')
  const status = document.getElementById('status')

  if (!form) return

  form.addEventListener('submit', function (event) {
    event.preventDefault()
    
    const formData = new FormData(form)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    
    // Create mailto link - this always works!
    const subject = `AI-Generated Contact Form: Message from ${name}`
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    const mailtoLink = `mailto:prespain2018@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Open email client
    window.location.href = mailtoLink
    
    // Show confirmation
    status.textContent = 'Opening your email client... If it doesn\\'t open, please email prespain2018@gmail.com directly.'
    status.style.color = '#4CAF50'
    
    // Reset form after a delay
    setTimeout(() => {
      form.reset()
      status.textContent = ''
    }, 5000)
  })
})
