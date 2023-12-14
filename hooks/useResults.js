import { useEffect, useState } from "react";
import yelp from "../api/yelp";


export default () => {

    const [results, setResults] = useState([])

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search',{
                params:{
                    term:searchTerm,
                    location:'İstanbul',
                    limit:40
                    
                }
            });
            setResults(response.data.businesses);
        } catch (error) {
            console.log("🚀 ~ file: useResults.js:21 ~ searchApi ~ error:", error)
             
        }
    }

    useEffect(() => {
        searchApi('Toast')
    },[]);

    return[searchApi , results]
}