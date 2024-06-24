import axios from 'axios';
const fetchAboutUsData = async () => {

  try {
    const response = await axios.get('http://localhost:1337/api/about-us?populate[block][populate][AboutCompany][populate]=*&populate[block][populate][image][populate]=*&populate[block][populate][card_category][populate]=*&populate[block][populate][provider][populate]=*&populate[block][populate][clientSays][populate]=*');
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default  fetchAboutUsData;
