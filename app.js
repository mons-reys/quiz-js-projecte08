const correctAnswers = ['B','B','B','B'];
const form = document.querySelector('.quiz-form');

const score = document.querySelector('.result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let result = 0 ;
    let userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    //answer validation 
    userAnswers.forEach((answer,index)=>{
        if(answer === correctAnswers[index]){
            result += 25;
        }
    });

    //show result 
    scrollTo(0,0);
    score.classList.remove('d-none');
    
    let output = 0;
    const Timer = setInterval(() => {

        score.querySelector('span').textContent = `${output} %`;
        if(output === result){
            clearInterval(Timer);
        }else{
            output++;
        }
    },10);

    
    
});

// window.setTimeout(() => {
//     alert('helloooo');
// },5000);