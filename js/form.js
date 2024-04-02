// Form Functionality
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form')
  const status = document.getElementById('status')

  form.addEventListener('submit', function (event) {
    event.preventDefault()

    const formData = new FormData(form)
    let item
    for (item of formData) {
      console.log(item[0], item[1])
    }

    fetch('https://httpbin.org/post', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then((response) => {
        status.textContent = 'Your message was send succesfully.'
        form.reset()
        setTimeout(() => {
          status.textContent = ''
        }, 3000)
      })
      .catch((error) => {
        status.textContent = 'An error occurred while submitting the form.'
        console.error(error)
      })
  })
})
