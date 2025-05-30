import navigations from './static-data/navigations.json';

export async function getNavigation(url: string) {
  const result = navigations.find(
    (item) =>
      Array.isArray(item.url) &&
      item.url.some((u: { url: string }) => u.url === url),
  );
  return result;
}
