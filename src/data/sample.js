/* Temporary Data for Masonry */
import { RANDOM_COLORS } from '../utils/constants';
const VIDEOLIST = [
  {
    id: '1dttq5p0xUM',
    thumbnail: 'https://i.ytimg.com/vi/1dttq5p0xUM/maxresdefault.jpg',
    title: 'Black Sheep - The Joy of Sharing!',
    source: 'Chuchu TV - youtube'
  },
  {
    id: 'B5csN8gQY4E',
    thumbnail: 'https://i.ytimg.com/vi/B5csN8gQY4E/maxresdefault.jpg',
    title: 'ABCD Song in Alphabet Water Park',
    source: 'King & Queen'
  },
  {
    id: 'CkRdvGmcCBE',
    thumbnail: 'https://i.ytimg.com/vi/CkRdvGmcCBE/maxresdefault.jpg',
    title: 'Mary Had A Little Lamb',
    source: 'Vimeo'
  }
];

const DATA = Array.from({ length: 20 }).map((_, i) => ({
  id: `video_${i}`,
  text: VIDEOLIST[i % VIDEOLIST.length].title,
  source: VIDEOLIST[i % VIDEOLIST.length].source,
  videoID: VIDEOLIST[i % VIDEOLIST.length].id,
  thumbnail: VIDEOLIST[i % VIDEOLIST.length].thumbnail,
  height: 260,
  color: RANDOM_COLORS[i % RANDOM_COLORS.length],
}));

const HOME_DATA = Array.from({ length: 10 }).map((_, i) => ({
  id: `home_${i}`,
  text: VIDEOLIST[i % VIDEOLIST.length].title,
  source: VIDEOLIST[i % VIDEOLIST.length].source,
  videoID: VIDEOLIST[i % VIDEOLIST.length].id,
  thumbnail: VIDEOLIST[i % VIDEOLIST.length].thumbnail,
  height: 200,
  color: RANDOM_COLORS[i % RANDOM_COLORS.length],
}));

const CATEGORIES_RAW = [
  { name: 'Alphabets', image: '', url: 'alphabets' },
  { name: 'Fruits', image: '', url: 'fruits' },
  { name: 'Vehicles', image: '', url: 'vehicles' },
  { name: 'Phonics', image: '', url: 'phonics' },
  { name: 'Vegetables', image: '', url: 'veg' },
  { name: 'Body Parts', image: '', url: 'body' },
  { name: 'Animals', image: '', url: 'animals' },
];

const CATEGORIES = CATEGORIES_RAW.map((_, i) => {
  _.id = `category_${i}`;
  _.image = VIDEOLIST[i % VIDEOLIST.length].thumbnail;
  _.color = RANDOM_COLORS[i % RANDOM_COLORS.length];
  _.height = 260;
  return _;
});

export {
  DATA,
  HOME_DATA,
  CATEGORIES,
};
