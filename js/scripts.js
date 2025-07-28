document.addEventListener('DOMContentLoaded', function () {
    const blogList = document.getElementById('blog-list');

    fetch('data/posts.json')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('col');

                postElement.innerHTML = `
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text"><small class="text-muted">${post.date}</small></p>
              <p class="card-text">${post.content}</p>
            </div>
          </div>
        `;

                blogList.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error loading blog posts:', error));
});
