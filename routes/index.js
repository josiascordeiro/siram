// Importando os módulos necessários
const express = require('express');
const router = express.Router();


// Configurando o EJS como mecanismo de visualização
/*router.set('view ', 'ejs');
router.set('views', path.join(__dirname, '../views'));
*/

//  rota GET  para listar alunos

// Rota GET para a página inicial
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Página Inicial' });
});

// Definindo uma rota GET para fazer login de aluno
router.get('/login', (req, res) => {
    res.render('login', { title: '/login-aluno' });
  });

  // Definindo uma rota GET para fazer um login de professor
router.get('/loginprof', function (req, res) {
    res.render('loginprof', { title: 'login-prof' });
  });

  // Definindo uma rota GET para criar conta de professor
router.get('/criarcont_prof', (req, res) => {
    res.render('criarcont_prof', { title: 'criar-conta-de-professor' });
  });

  // Definindo uma rota GET para criar conta de aluno
router.get('/criarcontaluno', (req, res) => {
    res.render('criarcontaluno', { title: 'criarcontaaluno' });
  });

  // Definindo uma rota GET para escolher a serie
router.get('/serie_prof', (req, res) => {
    res.render('serie_prof', { title: 'serie-prof' });
  });

  // Definindo uma rota GET para recuperar senha de aluno
router.get('/esquecisenha_a', (req, res) => {
    res.render('esquecisenha_a', { title: 'esqueci-senha-aluno' });
  });

  // Definindo uma rota GET para recuperar senha de professor
router.get('/esquecisenha_p',  function (req, res) {
    res.render('esquecisenha_p', { title: 'esquecisenha_p' });
  });

  // Definindo uma rota GET para dizer que esta concluido 
router.get('/conclusao', (req, res) => {
    res.render('conclusao', { title: 'conclusao' });
  });

  // Definindo uma rota GET para listar alunos do 1 ano
router.get('/list1ano', (req, res) => {
    res.render('list1ano', { title: 'lista-1-ano' });
  });

  // Definindo uma rota GET para listar os alunos do 2 ano 
router.get('/list2ano', (req, res) => {
    res.render('list2ano', { title: 'lista-2-ano' });
  });

  // Definindo uma rota GET para listar os alunos do 3 ano
router.get('/list3ano', (req, res) => {
    res.render('list3ano', { title: 'lista-3-ano' });
  });        

  // Definindo uma rota GET para listar alunos do 1 ano A DS
router.get('/1-a-ds', (req, res) => {
    res.render('1-a-ds', { title: '/1-a-ds' });
  });     

  // Definindo uma rota GET para listar alunos do 1 ano B DS
router.get('/1-b-ds', (req, res) => {
    res.render('1-b-ds', { title: '/1-b-ds' });
  });

  // Definindo uma rota GET para listar alunos do 1 ano A MM
router.get('/1-a-mm', (req, res) => {
    res.render('1-a-mm', { title: '/1-a-mm' });
  });

  // Definindo uma rota GET para listar alunos do 1 ano B MM
router.get('/1-b-mm', (req, res) => {
    res.render('1-b-mm', { title: '/~1-b-mm' });
  });

  // Definindo uma rota GET para listar alunos do 2 ano A DS
router.get('/2-a-ds', (req, res) => {
    res.render('2-a-ds', { title: '/2-a-ds' });
  });

  // Definindo uma rota GET para listar alunos do 2 ano B DS
router.get('/2-b-ds', (req, res) => {
    res.render('2-b-ds', { title: '/2-b-ds' });
  });

  // Definindo uma rota GET para listar alunos do 2 ano A mm
router.get('/2-a-mm', (req, res) => {
    res.render('2-a-mm', { title: '/2-a-mm' });
  });

  // Definindo uma rota GET para listar alunos do 2 ano B MM
router.get('/2-b-mm', (req, res) => {
    res.render('2-b-mm', { title: '/2-b-mm' });
  });

  // Definindo uma rota GET para listar alunos do 3 ano A DS
router.get('/3-a-ds', (req, res) => {
    res.render('3-a-ds', { title: '/3-a-ds' });
  });

  // Definindo uma rota GET para listar alunos do 3 ano B DS
router.get('/3-b-ds', (req, res) => {
    res.render('3-b-ds', { title: '/3-b-ds' });
  });

  // Definindo uma rota GET para listar alunos do 3 ano A MM
router.get('/3-a-mm', (req, res) => {
    res.render('3-a-mm', { title: '/3-a-mm' });
  });

  // Definindo uma rota GET para listar alunos do 3 ano B MM
router.get('/3-b-mm', (req, res) => {
    res.render('3-b-mm', { title: '/3-b-mm' });
  });

  // Definindo uma rota GET para enviar a justificaçao de faltas
router.get('/enviardocs_aluno', (req, res) => {
    res.render('enviardocs_aluno', { title: '/enviardocs_aluno' });
  });


   // Definindo uma rota GET justificar
router.get('/justificar', (req, res) => { 
    res.render('justificar', { title: 'justificar' });
  });


  //Rota GET para listar a funcao listarAtestados
router.get('/listarAtestado', async function (req, res) {
    try { const atestados = await global.db.listarAtestado();
      console.log(atestados);
    res.render('listarAtestado', { title: 'Atestados', atestados });
    }
    catch (e) {
      console.log(e);
      res.status(500).send({ message: e.message });
    }
  });
 


  



// Exportando o router para ser utilizado pelo Express
module.exports = router;



