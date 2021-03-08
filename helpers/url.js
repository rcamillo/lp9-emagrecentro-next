// como o isomorphic-fetch exige url absoluta, esta eh a unica forma de contornar
// dinamicamente sem 'muita' gambiarra
export const getAbsoluteUrl = (headers) => {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }

  if (headers && headers['x-forwarded-proto'] && headers['x-forwarded-host']) {
    return `${headers['x-forwarded-proto']}://${headers['x-forwarded-host']}`;
  }

  return '/';
};
