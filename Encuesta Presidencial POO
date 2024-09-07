//Encuenta con CLass Survey 
class PresidentialSurvey {
    constructor(candidates) {
        this.candidates = candidates;
        this.votes = new Array(candidates.length).fill(0); //Arreglo de votos, comienza en 0 

    }

    //Metodo para votar 
    vota(candidateIndex) {
        if (candidateIndex >= 0 && candidateIndex < this.candidates.length) {
            this.votes[candidateIndex]++;
            console.log( `Voto registrado para: ${this.candidates[candidateIndex]}`);
        } else {
            console.log ('Candidato No Invalido');
        }
    }
//obtener resultados 

    getResults () {
        return this.candidates.map((candidate, index) => {
            const voteCount = this.votes[index];
            return `${candidate}: ${voteCount} voto(s)`;
        }).join ('\n');
    }

    getWinner () {
        const maxVotes = Math.max(...this.votes);
        const winnerIndex = this.votes.indexOf(maxVotes);
        return this.candidates[winnerIndex];

    }
}


//Administtador de Encuestas 
class SurveyManager {
     constructor() {
        this.surveys = [];
    }
    

    //Meotdo Crear nueva encuesta presidencial 
    createPresidentialSurvey(candidates) {
        const newSurvey = new PresidentialSurvey(candidates);
        this.surveys.push(newSurvey);
        return newSurvey;
    }
getSurvey(index) {
    if (index >= 0 && index < this.surveys.length) {
        return this.surveys[index];
    } else {
        console.log('Encuesta No encontrada');
    }
}

}

const surveyManager = new SurveyManager();

const encuestaPresidencial = surveyManager.createPresidentialSurvey(['Donald Trump', 'Joe Biden', 'Barack Obama', 'John Kennedy']);

encuestaPresidencial.vota(0);
encuestaPresidencial.vota(1);
encuestaPresidencial.vota(0);
encuestaPresidencial.vota(2);
encuestaPresidencial.vota(3);

console.log('Resultados en tiempo real de la encuesta presidencial:');
console.log(encuestaPresidencial.getResults());

console.log('Candidato con más votos hasta el momento:');
console.log(encuestaPresidencial.getWinner());
