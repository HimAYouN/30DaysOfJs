// import './ProductForm.css';

function ProductForm(){
    return (
        <form>
            <div className='new-product_controls'>
                <div className='new-product_controls'>
                    <label>Title</label>
                    <input type='text'></input>
                </div>
                <div className='new-product_controls'>
                    <label>Date</label>
                    <input type='date' min='2023-01-01' max='2023-12-12'></input>
                </div>
                <div className='new-product_controls'>
                    <button type='submit'>Submit</button>
                </div>
            </div>
        </form>
    )
}

export default ProductForm;