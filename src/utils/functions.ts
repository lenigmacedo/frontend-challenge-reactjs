export const getId = (location: string): string | null => {
  const searchParams = new URLSearchParams(location);
  const idSearch = searchParams.get('id');
  return idSearch;
};

export const getPageNumber = (url: string): number | undefined => {
  const page = url?.substring(url?.lastIndexOf('=') + 1);

  return Number.isNaN(Number(page)) ? undefined : Number(page);
};

export const getIdFromUrl = (url: string): string | null => {
  const page = url.match(/[0-9]+/);

  if (page) {
    return page[0];
  }

  return null;

  // return Number.isNaN(Number(page)) ? undefined : Number(page);
};
