import axios from 'axios';

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

  async getProducts() {
    const productsResponse = await this._strapiInstance.get('/items');
    return await productsResponse.data;
  }
}
export const StrapiServiceInstance = new StrapiService(
  strapiInstance,
  baseURL,
  timeToRebuild
);
