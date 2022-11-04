import toDoListImg from '../img/toDoList.png';
import previsaoTempo from '../img/previsao-do-tempo.png';

const img ={
  img: [
    {
      id:1,
      src: toDoListImg,
      title: 'Lista de Tarefas',
      subTitle: 'JavaScript(LocalStorage) - HTML - CSS',
      paragraph: 'Projeto feito com JavaScript para organização pessoal, utilizando LocalStorage, para armazenamento de dados.',
      link: 'https://to-do-list-pied-iota.vercel.app'
    },
    {
      id:2,
      src: previsaoTempo,
      title: 'Previsão do Tempo',
      subTitle: 'JavaScript - HTML - CSS',
      paragraph: 'Projeto consumindo API Open weather. Feito com JavaScript trazendo a previsao do tempo atual.',
      link: 'https://previsao-do-tempo-zeta.vercel.app',
    },
  ]
}

export default img;