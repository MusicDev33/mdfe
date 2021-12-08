import cheerio from 'cheerio';
import { getGoogleSearch } from "@services/google";

export const parseResults = async (searchTerms) => {
  const results = await getGoogleSearch(searchTerms);
  const resultData = results.data;

  const $ = cheerio.load(resultData);

  let returnData = [];

  // Check for redundancy
  $('div.g div div').each((i, el) => {
    // console.log(cheerio.html($(el)))

    const outer = cheerio.load(cheerio.html($(el)));
    const header = cheerio.text(outer('div a h3'));
    const anchor = cheerio.html(outer('div a'));
    const description = cheerio.text(outer('div div span:not(.MUxGbd):not(.qzEoUe)'));

    if (header && header.trim().length) {

      if (!returnData.filter(item => {return item.name === header}).length) {
        console.log('LINK');
        returnData.push({
          name: header,
          link: $(anchor).attr('href'),
          description
        });
        console.log(header);
        console.log($(anchor).attr('href'));
        console.log(description);
      }
    }
  })

  return returnData;
}
