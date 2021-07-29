const updateProject = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const title = document.querySelector('#project-name').value.trim();
    const contents = document.querySelector('#project-desc').value.trim();

    if (title && contents) {
      const response = await fetch(`/api/projects/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, contents }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to update post');
      }
    }
  }
};
  
  document
  .querySelector('.update-project-form')
  .addEventListener('submit', updateProject);
  