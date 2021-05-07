import React, { Component } from "react";
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Add Item Details",
            act: 0,
            index: "",
            datas: [],
        };
    }

    componentDidMount() {
        this.refs.name.focus();
    }
    handleInputChange = (evt) => {
        document.getElementsByClassName("myBtn").disabled = true;
    }
    fSubmit = (e) => {

        e.preventDefault();
        console.log("try");

        let datas = this.state.datas;
        let name = this.refs.name.value;
        let address = this.refs.address.value;
        let price = this.refs.price.value;

        if (this.state.act === 0) {
            //new
            let data = {
                name,
                address,
                price
            };

            datas.push(data);
        } else {
            //update
            let index = this.state.index;
            datas[index].name = name;
            datas[index].address = address;
            datas[index].price = price;

        }




        this.setState({
            datas: datas,
            act: 0,
        });

        this.refs.myForm.reset();
        this.refs.name.focus();
    };

    fRemove = (i) => {
        let datas = this.state.datas;
        datas.splice(i, 1);
        this.setState({
            datas: datas,
        });

        this.refs.myForm.reset();
        this.refs.name.focus();
    };

    fEdit = (i) => {
        let data = this.state.datas[i];
        this.refs.name.value = data.name;
        this.refs.address.value = data.address;
        this.refs.price.value = data.price;
        this.setState({
            act: 1,
            index: i,
        });

        this.refs.name.focus();
    };

    render() {
        let datas = this.state.datas;
        return (
            <div className="App m-auto">

                <h2>{this.state.title}</h2>
                <br></br>

                <form ref="myForm" className="myForm Para-filed">
                    <h6>Item Name</h6>  <input
                        type="text"
                        ref="name"
                        placeholder="Enter the name of the item"
                        onChange={this.handleInputChange}
                        className="formField"
                    />

                    <h6>Item Description</h6> <input
                        type="text"
                        ref="address" maxLength="30"
                        placeholder="Enter item description"

                        className="formField"
                    />
                    <h6>Item Price</h6> <input
                        type="Number"
                        ref="price"
                        placeholder="Enter the price of the item"

                        className="formField"
                    />

                    <br></br>
                    <br></br>
                    <button onClick={(e) => this.fSubmit(e)} className="btn btn-welcome myBtn" >
                        ADD / UPDATE {" "}
                    </button>
                    <br></br>
                    <br></br>
                    <br></br>

                </form>
                <div>
                    {datas.map((data, i) => (

                        <div key={i} className="card p-3 Para-filed mb-3 wid">
                            {/* {i + 1}. */}
                            <div className="">
                                {/* <div className="bridge-logo"> <img src={bridge}></img></div> */}
                                <h6 className="font-weight-bold">Item Name :</h6> <p>{data.name}</p>
                                <h6 className="font-weight-bold">Item Description :</h6> <p>{data.address}</p>
                                <h6 className="font-weight-bold">Item Price :</h6><p>${data.price}</p>
                                <div className="row"> <div className="col-6 text-center"> <button onClick={() => this.fRemove(i)} className="myListButton btn btn-welcome">
                                    Delete{" "}
                                </button></div> <div className="col-6 text-center"> <button onClick={() => this.fEdit(i)} className="myListButton btn btn-welcome">
                                    Edit{" "}
                                </button></div></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Admin;
