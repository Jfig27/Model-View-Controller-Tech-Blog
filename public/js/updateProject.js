const updateProject = async (event) => {

  event.preventDefault();
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const name = document.querySelector('#project-name').value.trim();
    const description = document.querySelector('#project-desc').value.trim();

    if (name && description) {
      const response = await fetch(`/api/projects/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response)
      if (response.ok) {
        document.location.replace('/profile');
        console.log(response)
      } else {
        alert('Failed to update post');
      }
    }
  }
};
  
  document
  .querySelector('.update-project-form')
  .addEventListener('submit', updateProject);
  