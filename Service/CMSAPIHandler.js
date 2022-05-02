import axios from 'axios';

import mockImg from '../public/images/ProductCard/mockBaseCard.jpg';

import { StrapiServiceInstance } from './CMSAPI';

class StrapiHandler {
  handleCatalog(res) {
    return res.map((el) => ({
      id: el.id,
      // image: `${StrapiServiceInstance.baseURL}${el.img[0].formats.medium.url}`,
      image: mockImg.src,
      name: el.attributes.name,
      gost: this.getGost(el.attributes.document),
      Категория: this.translateCategory(el.attributes.category),
      Консистенция: this.translateConsistency(el.attributes.consistency),
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

  getPaths(nameOfPage, allItems) {
    const paths = [];
    allItems.forEach((item) => {
      paths.push({
        params: {
          [nameOfPage]: String(item.id),
        },
      });
    });
    return paths;
  }
}

export const StrapiHandlerInstance = new StrapiHandler();
