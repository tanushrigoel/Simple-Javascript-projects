
function calculate(){
    const height = parseInt(document.querySelector('#heig').value);
    const weight = parseInt(document.querySelector('#wei').value);
    let BMI = document.querySelector('#ans')
    if(height==='' || height<=0 || isNaN(height)){
        BMI.innerText="Please enter a valid height";
    }
    else if(weight===''||weight<=0|| isNaN(weight)){
        BMI.innerText="Please enter a valid weight";
    }else{
        const bmi = weight/height;
        BMI.innerText=bmi;
    }
}