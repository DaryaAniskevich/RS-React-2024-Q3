import { MagazineDetailsItem } from '../../helpers/types';

function DetailsData({ data }: { data: MagazineDetailsItem }) {
  const { title: magazineTitle, publishedYear, numberOfPages, magazineSeries, publishers } = data;
  const { title: magazineSeriesTitle } =
    magazineSeries && magazineSeries[0] ? magazineSeries[0] : { title: '' };
  const { name: publisherName } = publishers && publishers[0] ? publishers[0] : { name: '' };

  return (
    <>
      <h1>
        {magazineTitle}
        {numberOfPages ? `, ${numberOfPages} pages` : ''}{' '}
        {publishedYear ? `(${publishedYear})` : ''}
      </h1>
      <p>{`Magazine series: ${magazineSeriesTitle || 'No data'}`} </p>
      <p>{`Publisher: ${publisherName || 'No data'}`} </p>
    </>
  );
}

export default DetailsData;
