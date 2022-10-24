import React, {Component} from 'react';
import BrandFilter from "../../components/BrandFilter/BrandFilter";


class FilterBar extends Component {
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
            <div className="col-lg-3">
                <div className="row">
                    <div className="col-12">
                    <BrandFilter handleData={this.handleParentData} childObj={this.state.childObj}/>
                      
                    </div>
                   
                </div>
            </div>
        );
    }
}

export default FilterBar;