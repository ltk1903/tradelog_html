document.addEventListener("DOMContentLoaded", function () {
	const icons = document.querySelectorAll("#mysidenav .list-item a i");

	icons.forEach((icon, index) => {
		const colors = ["#3498db", "#2ecc71", "#9b59b6", "#f1c40f", "#e74c3c"];
		const colorIndex = index % colors.length;
		icon.style.color = colors[colorIndex];
	});
});

document.addEventListener('DOMContentLoaded', function() {
	const addButton = document.querySelector('.btn-list');
	const inputElement = document.getElementById('txt');
	const listElement = document.querySelector('.box-add-remove-list ul');

	addButton.addEventListener('click', function() {
	  const inputValue = inputElement.value.trim();
	  if (inputValue !== '') {
		const newItem = document.createElement('li');
		newItem.innerHTML = `${inputValue} <span>X</span>`;
		listElement.appendChild(newItem);

		inputElement.value = '';
	  }
	});

	listElement.addEventListener('click', function(event) {
	  if (event.target.tagName === 'SPAN') {
		const listItem = event.target.closest('li');
		listItem.remove();
	  }
	});
  });

 
