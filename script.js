// script.js

document.addEventListener('DOMContentLoaded', () => {
    const dataList = document.getElementById('data-list');
    const apiUrl = 'http://localhost:3000/todo'; // Replace with your API endpoint

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Assuming data is an array of objects
            data.forEach(item => {
                const listItem = document.createElement('li');
                console.log(item)
                listItem.textContent = item.toDo || item.description; // Adjust based on your data structure
                dataList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});


// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('data-form');
    const dataList = document.getElementById('data-list');
    const apiUrl = 'http://localhost:3000/todo'; // Replace with your API endpoint

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const formData = new FormData(form);
        const data = {
            todo: formData.get('todo'),
            description: formData.get('description')
        };

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            const listItem = document.createElement('li');
            listItem.textContent = data.todo || data.description
            dataList.appendChild(listItem)
            form.reset()

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    });
});
