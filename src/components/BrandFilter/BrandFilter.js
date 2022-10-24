import {React, Component} from 'react';
import './BrandFilter.scss';
import {brands} from "../../data/brands";
 
import {addBrandToFilter, removeBrandFromFilter} from "../../actions";

class BrandFilter extends Component {
    
    constructor(props){
        super(props);
        this.state={languages: []}
    }   
  
    SubmitValue = () => {
        this.props.handleData(this.state.languages)
     }

    handleCheckboxChange = event => {
        const name = event.target.name;
        const value =event.target.value;
        

        console.log(`${value} is   name is ${name}`);
        

        
        if(this.state.languages.length===0){
            
           let languages_new=[event.target.value];
            
            console.log(languages_new);
            this.props.handleData(languages_new)
            this.setState({
                languages: languages_new
            });
        }else{
            let newArray = [...this.state.languages, event.target.value];
        if (this.state.languages.includes(event.target.value)) {
          newArray = newArray.filter(day => day !== event.target.value);
        }
        this.setState({
            languages: newArray
        });
            this.props.handleData(newArray)
            console.log(this.state.languages);
        }
        
      };

     handleSelectBox = (e) => {
        // Destructuring
	  
    
        const name = e.target.name;
        const value = e.target.value;
        const languages=this.state.languages;

        console.log(`${value} is   name is ${name}`);
        console.log(this.state.languages);

        if(e.target.checked) {
            
            this.setState({'languages': [...languages, value]})
            // setUserInfo({
            //     languages: [...languages, value],
            // });
            //dispatch(addBrandToFilter(name));
        } else {
           // dispatch(removeBrandFromFilter(name));
           this.setState({ 'languages': languages.filter((e) => e !== value)})
           
        //    setUserInfo({
        //     languages: languages.filter((e) => e !== value),
            
        //    });
        }
        //this.props.handleData(this.state.languages)
        console.log(`${this.state.languages} `);
    };

    render() {
        
        return (
            <div className="col-lg-3">
            <div className="row">
                <div className="col-12">
            <div className="card mb-3">
                <form>
                    <div>
                <div className="card-header">
                    <h3>Brands</h3>
                </div>
                <ul className="list-group flex-row flex-wrap">
                    {brands.map(brand => (
                        <li className="list-group-item flex-50">
                            <label className="custom-checkbox text-capitalize"> {brand}  
                                <input type="checkbox"
                                       name='languages' value={brand} id={brand}
                                       className="custom-checkbox__input" onInput={this.handleCheckboxChange}/>
                                <span className="custom-checkbox__span"></span>
                            </label>
                        </li>
                    ))}
                </ul>
                
         
                </div>
                </form>
            </div>
            </div>
                   
                </div>
            </div>
        );
    }
}


export default BrandFilter;