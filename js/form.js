// Form Functionality
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form')
  const status = document.getElementById('status')

  form.addEventListener('submit', function (event) {
    event.preventDefault()

    const formData = new FormData(form)

    fetch('https://formsubmit.io/send/46cacb66-cf8d-489e-8906-803dfc5ceb5e', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('Form submission failed')
      })
      .then((data) => {
        status.textContent = 'Your message was sent successfully!'
        status.style.color = '#4CAF50'
        form.reset()
        setTimeout(() => {
          status.textContent = ''
        }, 5000)
      })
      .catch((error) => {
        status.textContent = 'An error occurred while submitting the form.'
        status.style.color = '#f44336'
        console.error(error)
      })
  })
})
