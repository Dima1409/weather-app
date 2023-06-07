import axios, {AxiosResponse} from 'axios';

const baseSearch = async (value:string):Promise<any> => {
    if(!value) {
        return;
    }
    try {
        const {data}: AxiosResponse<any> = await axios.get(
            `${process.env.REACT_APP_BASE_URL}?q=${value}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        ) 
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default baseSearch;