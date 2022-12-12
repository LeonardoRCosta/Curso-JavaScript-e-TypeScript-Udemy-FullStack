import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Leonardo',
      sobrenome: 'Ramos',
      email: 'leo.ramos@gmail.com',
      idade: 18,
      peso: 68.2,
      altura: 1.78,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
