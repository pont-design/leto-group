import axios from 'axios';
import { StrapiHandlerInstance } from './CMSAPIHandler'

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
    const imagesResponse = await this._strapiInstance.get('/imgs');
    return await imagesResponse.data;
  }

  async getProduct(id) {
    const itemResponse = await this._strapiInstance.get(`/items/${id}`);
    return await itemResponse.data;
  }

  async getProducts() {
    const productsResponse = await this._strapiInstance.get('/items');
    return await productsResponse.data;
  }

  async getSimilarProducts(query) {
    const similarProductsResponse = await this._strapiInstance.get(`/items?category_eq=${query}`);
    return similarProductsResponse.data
  }

  async getAllIds(nameOfPage) {
    const productsResponse = await this._strapiInstance.get('/items');
    return StrapiHandlerInstance.getPaths(nameOfPage, productsResponse.data)
  }

}

export const StrapiServiceInstance = new StrapiService(
  strapiInstance,
  baseURL,
  timeToRebuild
);
