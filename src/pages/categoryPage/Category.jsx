import axios from "axios";
import { useEffect, useState } from "react";
import { Casual, Filter } from "../../widgets/categorePage";
import '../../app.css'

export const Category = () => {

    const [product, setProduct] = useState([]);

    useEffect(() =>{
        axios('https://api.escuelajs.co/api/v1/products')
        .then(({data}) =>{
          setProduct(data);
            
        })
        .catch((error) => {console.log(error);})
    }, []);

    return (
        <div className="container FlexCont">
            <Filter />
            <Casual product={product} />
        </div>
    );
}
