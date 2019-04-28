import { dataTpl, navLinks } from './data';

export function getRegionalPageData(city) {
  return new Promise(res => {
    let url;

    if (typeof city === 'string') {
      url = navLinks.find(({ link }) => link === city);
    }

    validateParam(url);

    res({
      name: url.text,
      ...dataTpl
    });
  });
}

export function getDetailPageData(event, { events = [{}] }) {
  return new Promise(res => {
    let url;

    if (typeof event === 'string') {
      for (const { batch } of events) {
        url = batch.find(({ url }) => url === event);
        if (url && typeof url === 'object') {
          break;
        }
      }
    }

    validateParam(url);

    res(url.detail);
  });
}

function validateParam(url) {
  if (!url || typeof url !== 'object') {
    throw new Error('Invalid url param');
  }
}
