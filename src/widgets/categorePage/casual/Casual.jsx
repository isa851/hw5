// import { Casual } from "../casual";  
import { Card } from '../../../entities';
import './Casual.css'

export const Casual = ({product}) => {
    return (
        <div className='casualCont'>
            
            {
               product && (
                    product.slice(2, 7).map((item)=>(
                        <div key={item.id}> 
                        <Card img={item.images[0]} 
                        title={item.title} 
                        rate={item?.rating?.rate}
                        price={item.price} /> 
                        </div>
                    ))
                )
            }
        </div>
    );
}

