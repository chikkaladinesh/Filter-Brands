import {React,Component} from 'react';
import BrandFilter from "../../components/BrandFilter/BrandFilter";
import ProductList from "../../containers/ProductList/ProductList"; 

class Home extends Component {
    constructor() {
        super();
        this.state = {
          name: 'React',
          parentCheckBoxValue: ''
        };
      }

      handleParentData = (e) => {
        this.setState({ parentCheckBoxValue: e })
      }
      logChildValue = (value) => {
        console.log("In Parent component");
       console.log(value);
       this.setState({childObj:value});
    
   
     }

render() {
    return (
       
             
            <div className="container" style={{paddingTop: '6rem'}} >
                <div className="row">
                <BrandFilter handleData={this.handleParentData} childObj={this.state.childObj}/>
                <ProductList parentCheckBoxValue={this.state.parentCheckBoxValue} onSubmitChild={this.logChildValue} />
                
                </div>
            </div>
        
    );
}

}
export default Home;
