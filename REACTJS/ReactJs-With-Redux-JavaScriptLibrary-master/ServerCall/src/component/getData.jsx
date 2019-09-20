import React, { Component } from "react";

export class GetData extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            productsArray: []
        }
    }

    componentWillMount() {
        const self = this;
        var url = "https://raw.githubusercontent.com/DevelopByTarun/ReactJs/master/test.json";
        fetch(url).then((response)=> {
            response.json().then((data)=> {
                console.log("You Have Successfully Fetch Products Through Client Side :: ",data.data);
                self.setState({ productsArray: data.data});
            }).catch((error)=> {
                console.log("Unable To Fetch Products Through Client Side :: ",error);
            })
        }).catch((error)=> {
            console.log("Unable To Fetch Products Through Client Side :: ",error);
        });
    }

    render() {

        var myStyle = {
            textAlign: "center",
            fontFamily: "gothic"
        }

        return (
            <div>
                 <h2 style={myStyle} className="notice notice-danger">{this.props.head}</h2>
    <br/>
    {/* <button type="button" onClick={this.getProductsFromDatabase.bind(this)} class="btn btn-secondary btn-lg">Get Products From Database</button>
    <br/> */}
    <div className="card-deck">
        {this.state.productsArray.map((mobile)=> { return(
        <div className="card" key={mobile.id}>
            <img className="card-img-top" src={mobile.image} alt="CardImageCap"/>
            <div className="card-body">
                <h5 className="card-title">{mobile.name}</h5>
                <p className="card-text">{mobile.shipping}</p>
                <p className="card-text">{mobile.vendor}</p>
                <p className="card-text">{mobile.inStock}</p>
                <p className="card-text">{mobile.price}</p>
            </div>
        </div>
        ); })}
    </div>
            </div>
        );
    }
}