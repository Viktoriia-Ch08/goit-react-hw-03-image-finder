import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 12;

async function getImages(value, page) {
  const params = new URLSearchParams({
    key: '38831049-96c7643f1aee916d65391f7e0',
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: PER_PAGE,
    page: page,
  });

  const response = await axios.get(`${BASE_URL}?${params}`);
  return response.data;
}

export { getImages };
