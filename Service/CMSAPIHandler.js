import { translitRuEn } from "../utils/translitGenerator";
import { StrapiServiceInstance } from './CMSAPI';

class StrapiHandler {
  handleCatalog(res) {

    return res.map((el) => ({
      id: el.id,
      image: `${StrapiServiceInstance.baseURL}${el.attributes.img.data.attributes.formats.medium.url}`,
      name: el.attributes.name,
      gost: el.attributes.document,
      Категория: this.translateCategory(el.attributes.category),
      Консистенция: this.translateConsistency(el.attributes.consistency),
    }));
  }

  translateCategory(str) { //TODO : move function to utils
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
          [nameOfPage]: `${translitRuEn(String(item.attributes.name))}-${String(item.id)}`,
        },
      });
    });
    return paths;
  }
}

export const StrapiHandlerInstance = new StrapiHandler();
