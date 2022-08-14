
export function resolve(url){
  const basePath = 'http://localhost:5000';

  url.replace(/^,/, '');

  return basePath + '/' + url;
}

