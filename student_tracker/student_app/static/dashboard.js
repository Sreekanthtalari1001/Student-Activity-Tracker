const score = require("./test.js")
const score1 = require("./test1.js")
const score2 = require("./test3.js")

var quizzes = [
    { name: "Quiz 1", date: "2023-04-30", score: score },
    { name: "Quiz 2", date: "2023-05-01", score: score1 },
    { name: "Quiz 3", date: "2023-05-02", score: score2 },
  ];
  
  // Calculate total score, number of quizzes, and average score
  var totalScore = quizzes.reduce(function(sum, quiz) {
    return sum + quiz.score;
  }, 0);
  var numQuizzes = quizzes.length;
  var avgScore = totalScore / numQuizzes;
  
  // Update the dashboard with the summary and quiz results
  document.getElementById("total-score").innerHTML = totalScore;
  document.getElementById("num-quizzes").innerHTML = numQuizzes;
  document.getElementById("avg-score").innerHTML = avgScore.toFixed(2);
  
  // Generate quiz results chart
  var quizLabels = quizzes.map(function(quiz) {
    return quiz.name;
  });
  var quizScores = quizzes.map(function(quiz) {
    return quiz.score;
  });
  var quizChart = new Chart(document.getElementById("quiz-chart"),{
    type: "bar",
    data: {
      labels: quizLabels,
      datasets: [{
        label: "Quiz Scores",
        data: quizScores,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });