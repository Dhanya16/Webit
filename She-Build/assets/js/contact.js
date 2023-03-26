const form = document.querySelector('.comment-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const commentInput = document.getElementById('comment');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const comment = commentInput.value;
  console.log(`Name: ${name}\nEmail: ${email}\nComment: ${comment}`);
  form.reset();
});
