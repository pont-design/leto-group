import axios from 'axios';
import { StrapiHandlerInstance } from './CMSAPIHandler';

const qs = require('qs');

const test = qs.stringify(
  {
    populate: '*',
  },
  {
    encodeValuesOnly: true,
  }
);

const baseURL = 'http://188.225.45.114:1337';
const sendAddress = 'ch69865@868749-ch69865.tmweb.ru';

const timeToRebuild = 10;

const strapiInstance = axios.create({
  baseURL,
});

class StrapiService {
  constructor(strapiInstance, sendAddress, baseURL, timeToRebuild) {
    this._strapiInstance = strapiInstance;
    this._sendAddress = sendAddress;
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
    return await itemResponse.data.data;
  }

  async getProducts() {
    const productsResponse = await this._strapiInstance.get(
      `/api/items?${test}`
    );
    return await productsResponse.data;
  }

  async getSimilarProducts(query) {
    const filterValue = qs.stringify(
      {
        filters: {
          category: {
            $eq: query,
          },
        },
        populate: ['img'],
      },
      {
        encodeValuesOnly: true,
      }
    );

    const similarProductsResponse = await this._strapiInstance.get(
      `/api/items?${filterValue}`
    );
    return similarProductsResponse.data.data;
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
  sendAddress,
  baseURL,
  timeToRebuild
);
