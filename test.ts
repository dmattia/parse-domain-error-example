const parseDomainModule = import('parse-domain');

async function parseDomain(url: string) {
  const { parseDomain, fromUrl } = await parseDomainModule;

  return parseDomain(fromUrl(url));
}

parseDomain('https://www.münchen.de?query').then((result) => {
  console.log(result);
});
