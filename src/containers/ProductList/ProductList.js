import React, {Component} from 'react';
import Product from "../../components/Product/Product";

import {brandFilter} from "../../pipes/brandFilter";
import {orderByFilter} from "../../pipes/orderByFilter";
// import LayoutMode from "../../components/LayoutMode/LayoutMode";
import {paginationPipe} from "../../pipes/paginationFilter";
import Pagination from "../../components/Pagination/Pagination";
 
import {phones} from "../../data/phones";

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colValue : 'col-lg-4',
            perPage: 12,
            currentPage: 1,
            pagesToShow: 3,
            gridValue: 3,
            products:[]
        }
        
       
      }
      
       
      componentDidMount() {
        console.log(`in parent componentDidMount  name is ${this.props.parentCheckBoxValue}`);
       this.getData()
      };
    
    getData=()=>{
        this.setState({products: phones});
      
        console.log(`in parent getData  name is ${this.props.parentCheckBoxValue}`);
      };
      
    changeLayout = (n) => {
        this.setState({gridValue: n});

        let realGridValue;

        if(n === 4) {
            realGridValue = 3
        } else {
            realGridValue = 4;
        }

      this.setState({
          colValue: `col-lg-${realGridValue}`
      });
    };


    onPrev = () => {
        const updatedState = {...this.state};
        updatedState.currentPage = this.state.currentPage - 1;
        this.setState(updatedState);
    };


    onNext = () => {
        this.setState({
            ...this.state,
            currentPage: this.state.currentPage + 1
        });
    };

    goPage = (n) => {
        this.setState({
            ...this.state,
            currentPage: n
        });
    };


    render() {
        console.log(`in parent render name is ${this.props.parentCheckBoxValue}`);
        
        return (
            <div className="col-lg-9">
                <div className="row mb-3">
                    <div className="col-12 d-none d-lg-block d-xl-block">
                        <div className="card ">
                            <div className="card-header d-flex justify-content-end">
                                {/* <span className="mr-3">Change Layout: </span> */}
                                {/* <LayoutMode len={3} isActive={this.state.gridValue === 3} click={this.changeLayout} /> */}
                                {/* <LayoutMode len={4} isActive={this.state.gridValue === 4}  click={this.changeLayout} /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                
                 
                    {(this.props.parentCheckBoxValue.length ===0 || this.props.parentCheckBoxValue==='') && this.state.products.map(product =>{
                        let classes = `${this.state.colValue} col-md-6 mb-4`;
                        return (<div className={classes}>
                            <Product key={product.id} product={product} />
                        </div>)
                    })}
                    {(this.props.parentCheckBoxValue.length > 0) && this.state.products.filter(product => this.props.parentCheckBoxValue.includes(product.brand)).map(product =>{
                        let classes = `${this.state.colValue} col-md-6 mb-4`;
                        return (<div className={classes}>
                            <Product key={product.id} product={product} />
                        </div>)
                    })}
                </div>
                {/* <div className="d-flex justify-content-end">
                    <Pagination
                        totalItemsCount={this.state.products.length}
                        currentPage={this.state.currentPage}
                        perPage={this.state.perPage}
                        pagesToShow={this.state.pagesToShow}
                        onGoPage={this.goPage}
                        onPrevPage={this.onPrev}
                        onNextPage={this.onNext}
                    />
                </div> */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const brands = state.brandFilter;
    const orderBy = state.orderBy;

    const filterByBrandArr = brandFilter(state.shop.products, brands);
    const filterByOrderArr = orderByFilter(filterByBrandArr, orderBy);


    return {products: filterByOrderArr }
};

export default  ProductList;
