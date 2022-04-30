import axios from 'axios';

import { StrapiServiceInstance } from './CMSAPI';

class StrapiHandler {
  handleCatalog(res) {
    console.log(res);
    return res.map((el) => ({
      id: el.id,
      image: `${StrapiServiceInstance.baseURL}${el.img[0].formats.medium.url}`,
      name: el.name,
      gost: this.getGost(el.document),
      Категория: this.translateCategory(el.category),
      Консистенция: this.translateConsistency(el.consistency),
    }));
  }

  getGost(str) {
    if (str) {
      const gost = str.split(' ');
      return `${gost[0]} ${gost[1]}`;
    }
  }

  translateCategory(str) {
    let category = '';
    switch (str) {
      case 'white':
        category = 'Белок';
        break;

      case 'melange':
        category = 'Меланж';
        break;

      case 'yolk':
        category = 'Желток';
        break;
    }
    return category;
  }

  translateConsistency(str) {
    let consistency = '';
    switch (str) {
      case 'dry':
        consistency = 'Сухой';
        break;

      case 'liquid':
        consistency = 'Жидкий';
        break;
    }
    return consistency;
  }
}

export const StrapiHandlerInstance = new StrapiHandler();
