# project 1

``` javascript
const body = document.querySelector('body');
const button = document.querySelectorAll('.button');
button.forEach(function (button) {
  button.addEventListener('click', function (e) {
    body.style.backgroundColor = e.target.id;
  });
});
```