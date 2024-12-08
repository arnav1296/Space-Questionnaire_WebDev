const form = document.getElementById('questionnaire');
const btn = document.getElementById('btn-1');

form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from reloading the page
    showResults();  // Call your function to process the results
});

function showResults() {
    const answers = ['venus', 'saturn', 'Cosmos-3M', 'jupiter', 'celestial'];
    const questions = ['q1', 'q2', 'q3', 'q4', 'q5'];
    let score = 0;
    let result = '';

    for (let i = 0; i < 5; i++) {
        const selected = document.querySelector('input[name=' + questions[i] + ']:checked');

        if (selected) {
            if (selected.value === answers[i]) {
                score++;
            } else {
                result += '\nQuestion ' + (i + 1) + ' Incorrect (Your answer: ' + selected.value + ', Correct answer: ' + answers[i] + ')';
            }
        } else {
            result += '\nQuestion ' + (i + 1) + ' Unanswered. Correct answer: ' + answers[i];
        }
    }

    alert('You scored: ' + score + '\nFeedback: ' + result);
}
