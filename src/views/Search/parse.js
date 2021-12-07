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

    if (header && header.trim().length) {
      console.log('LINK');

      returnData.push({
        name: header,
        link: $(anchor).attr('href')
      });
      console.log(header);
      console.log($(anchor).attr('href'));
    }
  })

  return returnData;
}
