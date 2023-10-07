import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const questions = [
  { question: 'Como você geralmente se sente em relação a si mesmo?', options: ['Muito positivo', 'Positivo', 'Neutro', 'Negativo', 'Muito negativo'], correctAnswer: 'Muito positivo' },
  { question: 'Você acha fácil se colocar no lugar de outras pessoas e entender seus sentimentos?', options: ['Sempre', 'Frequentemente', 'Às vezes', 'Raramente', 'Nunca'], correctAnswer: 'Sempre' },
  { question: 'Você se comunica bem com os outros?', options: ['Sempre', 'Frequentemente', 'Às vezes', 'Raramente', 'Nunca'], correctAnswer: 'Sempre' },
  { question: 'Como você se sente em relação à sua capacidade de tomar decisões importantes?', options: ['Confiança total', 'Geralmente confiante', 'Incerto', 'Geralmente inseguro', 'Totalmente inseguro'], correctAnswer: 'Confiança total' },
  { question: 'Como você lida com situações emocionais desafiadoras?', options: ['Muito bem', 'Bem', 'Mais ou menos', 'Não muito bem', 'Muito mal'], correctAnswer: 'Muito bem' },
  { question: 'Como você lida com o fracasso ou a adversidade?', options: ['Sempre me recupero rapidamente', 'Geralmente me recupero bem', 'Às vezes leva tempo', 'Geralmente leva muito tempo', 'Nunca me recupero'], correctAnswer: 'Sempre me recupero rapidamente' },
  { question: 'Você consegue equilibrar suas responsabilidades de trabalho e vida pessoal?', options: ['Sempre', 'Geralmente', 'Às vezes', 'Raramente', 'Nunca'], correctAnswer: 'Sempre' },
  { question: 'Você está satisfeito com o progresso em relação aos seus objetivos pessoais?', options: ['Muito satisfeito', 'Satisfeito', 'Neutro', 'Insatisfeito', 'Muito insatisfeito'], correctAnswer: 'Muito satisfeito' },
  { question: 'Como você avalia a qualidade das suas relações interpessoais?', options: ['Excelentes', 'Boas', 'Médias', 'Ruins', 'Péssimas'], correctAnswer: 'Excelentes' },
  { question: 'Você acredita que se conhece bem?', options: ['Sim, muito bem', 'Sim, razoavelmente bem', 'Não tenho certeza', 'Não muito bem', 'Não, não me conheço bem'], correctAnswer: 'Sim, muito bem' },
];

export default function QuizScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      // Final do quiz, você pode exibir os resultados aqui
      alert(`Pontuação final: ${score} de ${questions.length}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.progressText}>Pergunta {currentQuestion + 1} de {questions.length}</Text>
      <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
      {questions[currentQuestion].options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleOptionSelect(option)}
          style={[
            styles.optionButton,
            {
              backgroundColor: selectedOption === option ? 'green' : 'white',
            },
          ]}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={handleNextQuestion} style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Próxima Pergunta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressText: {
    fontSize: 16,
    marginBottom: 10,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
