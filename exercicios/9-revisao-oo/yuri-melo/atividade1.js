
class Curso {
    constructor(nome, cargaHoraria) {
        this.nome = nome;
        this.cargaHoraria = cargaHoraria;
    }
}
class Estudante {
    constructor(nome, matricula) {
        this.nome = nome;
        this.matricula = matricula;
    }
}
class Turma {
    constructor(curso) {
        if (!(curso instanceof Curso)) {
            throw new Error("Turma precisa de um curso válido");
        }
        this.curso = curso;
        this.estudantes = [];
    }
    adicionarEstudante(estudante) {
        const existe = this.estudantes.some(e => e.matricula === estudante.matricula);
        
        if (existe) {
            throw new Error(`Matrícula ${estudante.matricula} já cadastrada para ${estudante.nome}`);
        }
        
        this.estudantes.push(estudante);
    }

    listarEstudantes() {
        return this.estudantes;
    }
}

const curso = new Curso("Prog2", 40);
const turma = new Turma(curso);

const alunos = [
    new Estudante("Yuri", "123"),
    new Estudante("Joao", "456"),
    new Estudante("Arthur", "123") // Matrícula duplicada com Yuri
];

alunos.forEach(aluno => {
    try {
        turma.adicionarEstudante(aluno);
    } catch (error) {
        console.error(`Erro: ${error.message}`);
    }
});

console.log("--- Lista Final de Alunos ---");
console.table(turma.listarEstudantes());
