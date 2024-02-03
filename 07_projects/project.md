# project 1 Color Picker

``` javascript
const body = document.querySelector('body');
const button = document.querySelectorAll('.button');
button.forEach(function (button) {
  button.addEventListener('click', function (e) {
    body.style.backgroundColor = e.target.id;
  });
});
```

# project 2 BMI Calculator

``` javascript
const form =document.querySelector("form")

    form.addEventListener("submit",function(event){
        event.preventDefault();

        const height = parseInt(document.querySelector("#height").value)
        const weight = parseInt(document.querySelector("#weight").value)

        
        const text = document.querySelector("#text")
        const result = document.querySelector("#result")

        if(height === "" || height < 0 || isNaN(height)){
            result.innerHTML = `please enter valid height`
        }else if(weight === "" || weight < 0 || isNaN(weight)){
            result.innerHTML = `please enter valid weight`
        }else { 
            const bmi = (weight /( (height*height)/10000)).toFixed(2)

            result.innerHTML = `your BMI is: ${bmi}`

            if(bmi<18.6){
                text.innerHTML = `your BMI is underweight`
            }else if ( bmi >= 18.6 && bmi < 24.9){
                text.innerHTML = `your BMI is normal`
            } else{
                text.innerHTML = `your BMI is overweight`
            }
        }

    })
```

# project 3 Digital Clock

``` javascript
  const clock = document.querySelector("#clock")
    
    const timer = setInterval(function(){
        const date = new Date();
        clock.innerHTML = date.toLocaleTimeString()
    },1000)
```