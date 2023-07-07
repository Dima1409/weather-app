import axios, { AxiosResponse } from "axios";

const baseSearch = async (value: string, lang: string): Promise<any> => {
  if (!value) {
    return;
  }
  try {
    const { data }: AxiosResponse<any> = await axios.get(
      `${process.env.REACT_APP_BASE_URL}?q=${value}&units=metric&lang=${lang}&appid=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

const searchFiveDays = async (value: string, lang: string): Promise<any> => {
  if (!value) {
    return;
  }
  try {
    const { data }: AxiosResponse<any> = await axios.get(
      `${process.env.REACT_APP_FIVE_DAYS}?q=${value}&units=metric&lang=${lang}&appid=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { baseSearch, searchFiveDays };
