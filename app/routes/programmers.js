import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
  model() {
    return ['Линус Торвальдс', 'Дональд Кнут', 'Сэр Тим Бернерс-Ли', 'Джеймс Гослинг'
      ,"Андерс Хейлсберг","Марк Цукерберг" ];
  }
}

