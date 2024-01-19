const forms = document.querySelector('form')
console.log(forms);

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value);

forms.addEventListener("submit", function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight =  parseInt(document.querySelector('#weight').value);
    const results =  document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }

    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid height ${weight}`
    }else{
       const bmi =  (weight/((height*height)/10000).toFixed(2));
       results.innerHTML = `<span>${bmi}</span>`;
       switch (results.innerHTML) {
        case (results.innerHTML < 18.6):
            results.innerHTML = "You are under Weight";
            break;
        case ((results.innerHTML > 18.6) && (results.innerHTML < 24.9)):
            results.innerHTML = "You are fit and in proper range"
            break;
        case (results.innerHTML > 24.9):
            results.innerHTML = "You are overWeight";
            break;
       
        default:
            break;
       }
    }
})