/**
 * Downloads a file with the given data and file type.
 *
 * @param {string} name - Name with which the file will be downloaded.
 * @param {string} type - The file type to download, can be 'csv', 'txt' or 'json'.
 * @param {string | object} data - The data to be downloaded in the file.
 */
const downloadFile = (name: string, type: string, data: string | object) => {
  const element = document.createElement('a');
  element.id = 'download-file';
  if (type === 'json') {
    element.setAttribute(
      'href',
      `data:text/json;charset=utf-8,${JSON.stringify(data)}`
    );
  } else {
    element.setAttribute('href', `data:text/plain;charset=utf-8,${data}`);
  }
  element.setAttribute('download', `${name}.${type}`);
  document.body.appendChild(element);
  (document.querySelector('#download-file') as any).click();
  element.remove();
};

export default downloadFile;
