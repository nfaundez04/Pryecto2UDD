//funcion para crear encuesta presidencial 
const createSurvey = (candidates) => ({
    candidates,
    votes: new Array( candidates.length).fill(0)
});

const vote = (survey, candidateIndex) => {
    if (candidateIndex >= 0 && candidateIndex < survey.candidates.length) {
        const updatedVotes = [...survey.votes]; // Copia del arreglo de votos
        updatedVotes[candidateIndex]++;         // Incrementar el voto del candidato
        console.log(`Voto registrado para: ${survey.candidates[candidateIndex]}`); // Corregido typo en 'candidates'
        return {
            ...survey,                          // Retornar un nuevo objeto con los votos actualizados
            votes: updatedVotes
        };
    } else {
        console.log('Candidato no válido');
        return survey;  // Retorna la encuesta sin cambios si el índice no es válido
    }
};

//para obtener resultados encuesta
const getResults = (survey) => {
    return survey.candidates.map((candidate, index) => {
        const voteCount = survey.votes[index];
        return `${candidate}: ${voteCount} voto(s)`;
    }).join('\n');  
};

//obtener ganador 
const getWinner = (survey) => {
    const maxVotes = Math.max(...survey.votes);
    const winnerIndex = survey.votes.indexOf(maxVotes);
    return survey.candidates[winnerIndex];
};
const createSurveyManager = () => {
    let surveys = [];

    return {
        createSurvey: (candidates) => {
            const newSurvey = createSurvey(candidates);
            surveys = [...surveys, newSurvey]; // Añade una nueva encuesta al array
            return newSurvey;
        },
        voteInSurvey: (surveyIndex, candidateIndex) => {
            if (surveyIndex >= 0 && surveyIndex < surveys.length) {
                surveys = surveys.map((survey, index) => {
                    return index === surveyIndex ? vote(survey, candidateIndex) : survey;
                });
            } else {
                console.log('Encuesta no encontrada');
            }
        },
        showSurveyResults: (surveyIndex) => {
            if (surveyIndex >= 0 && surveyIndex < surveys.length) {
                console.log('Resultados de la encuesta:');
                console.log(getResults(surveys[surveyIndex]));
            } else {
                console.log('Encuesta no encontrada');
            }
        },
        showSurveyWinner: (surveyIndex) => {
            if (surveyIndex >= 0 && surveyIndex < surveys.length) {
                console.log(`El ganador es: ${getWinner(surveys[surveyIndex])}`);
            } else {
                console.log('Encuesta no encontrada');
            }
        }
    };
};


const surveyManager = createSurveyManager();
const encuesta1 = surveyManager.createSurvey(['Donald Trump', 'Joe Biden', 'Barack Obama', 'John Kennedy']);

surveyManager.voteInSurvey(0, 0); // Voto para Donald Trump
surveyManager.voteInSurvey(0, 1); // Voto para Joe Biden
surveyManager.voteInSurvey(0, 0); // Otro voto para Donald Trump
surveyManager.voteInSurvey(0, 2); // Voto para Barack Obama
surveyManager.voteInSurvey(0, 3); // Voto para John Kennedy


//mostrar resultados 
surveyManager.showSurveyResults(0);

// mostrar el ganador 
surveyManager.showSurveyWinner(0);
