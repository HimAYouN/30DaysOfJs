import ProductItem from './ProductItem';
import Card from './Card';
import './Products.css';

// import './Products.css';

const Products = (props)=>{
    return (
        <Card className="products">
            <ProductItem
                title={props.product[0].title}
                amount={props.product[0].amount}
                date={props.product[0].itemDate}
            />
            <ProductItem
                title={props.product[1].title}
                amount={props.product[1].amount}
                date={props.product[1].itemDate}
            />
            <ProductItem
                title={props.product[2].title}
                amount={props.product[2].amount}
                date={props.product[2].itemDate}
            />
            
        </Card>
    )
}

export default Products;