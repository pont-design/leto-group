import axios from 'axios';
import { StrapiHandlerInstance } from './CMSAPIHandler';

const qs = require('qs');

const query = qs.stringify(
  {
    populate: '*',
  },
  {
    encodeValuesOnly: true,
  }
);

const baseURL = 'http://188.225.45.114:1337';

const timeToRebuild = 10;

const strapiInstance = axios.create({
  baseURL: baseURL,
});

class StrapiService {
  constructor(strapiInstance, baseURL, timeToRebuild) {
    this._strapiInstance = strapiInstance;
    this.baseURL = baseURL;
    this.timeToRebuild = timeToRebuild;
  }

  async getImages() {
    const imagesResponse = await this._strapiInstance.get(
      '/api/imgs?populate=*'
    );
    return await imagesResponse.data;
  }

  async getProduct(id) {
    const itemResponse = await this._strapiInstance.get(
      `/api/items/${id}?populate=*`
    );
    return await itemResponse.data;
  }

  async getProducts() {
    const productsResponse = await this._strapiInstance.get(
      '/api/items?populate=*'
    );
    return await productsResponse.data;
  }

  async getSimilarProducts(query) {
    const similarProductsResponse = await this._strapiInstance.get(
      `/api/items?populate=*?category_eq=${query}`
    );
    return similarProductsResponse.data;
  }

  async getAllIds(nameOfPage) {
    const productsResponse = await this._strapiInstance.get(
      '/api/items?populate=*'
    );
    return StrapiHandlerInstance.getPaths(
      nameOfPage,
      productsResponse.data.data
    );
  }
}

export const StrapiServiceInstance = new StrapiService(
  strapiInstance,
  baseURL,
  timeToRebuild
);
