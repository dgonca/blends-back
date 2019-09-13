import axios from 'axios';
import React, { Component } from 'react';
import Blend from './Blend';
import NewBlendForm from './NewBlendForm';

class BlendsContainer extends Component {
    constructor(props){
        super(props)
        // this.oilsList = "This is a list";
        this.state = {
            blends: [],
            oils: []
        }
        this.addNewBlend = this.addNewBlend.bind(this);
        this.removeBlend = this.removeBlend.bind(this);
        this.grabOils = this.grabOils.bind(this);

    }

    grabOils(blends, tempOils){
        if (Array.isArray(blends)) {
            blends.forEach(function (blend){
                const oilsList = blend.blend_items.map(function (item){
                    return tempOils[item.oil_id - 1].name;
                });
                // console.log(oilsList);
                // console.log(blend);
                 blend["oilsList"] = oilsList
            });
        } else {
            const oilsList = blends.blend_items.map(function (item){
                return tempOils[item.oil_id - 1].name;
            });
            // console.log(oilsList);
            // console.log(blends);
             blends["oilsList"] = oilsList;
        }

        return blends
    }

    componentDidMount(){
        //getting oils list
        let tempOils;
        axios.get('http://localhost:3001/api/v1/oils.json')
        .then(response => {
            console.log(response);
            tempOils = response.data;
            this.setState({
                oils: response.data
            });
            console.log(this.state.oils);
        }).catch(error => console.log(error));
        //getting blends
        axios.get('http://localhost:3001/api/v1/blends.json')
        .then(response => {
            console.log(response);
            let blends = this.grabOils(response.data, tempOils);
            console.log(blends);
            this.setState({
                blends: blends
            });
        }).catch(error => console.log(error));


    }

    addNewBlend(name, use_case, oils2){
        console.log(oils2);
        let oils = oils2.map(function (n) {
            return n.label
        })
        console.log(oils)
        axios.post('/api/v1/blends', { blend: {name, use_case}, oils: {oils} })
        .then(response => {
            console.log(response)
            let newBlend = this.grabOils(response.data, this.state.oils)
            const allBlends = [...this.state.blends, newBlend]
            console.log(allBlends)
            this.setState({
                blends: allBlends
            })
        }).catch(error => {
            console.log(error)
        })
    }
    removeBlend(id){
        axios.delete('/api/v1/blends/' + id)
        .then(response => {
            const blends = this.state.blends.filter(
                blend => blend.id !== id
            )
            this.setState({blends})
        })
        .catch(error => console.log(error))
    }
    render() {
        return (
            <div className="blends-container">
            <NewBlendForm handleNewBlend={this.addNewBlend}
                                        oilsList = {this.state.oils}
                                         />
                {this.state.blends.map( blend => {
                    return (<Blend blend = {blend}
                                            key = {blend.id}
                                            onRemoveBlend = {this.removeBlend} />)
                })}

            </div>
        )
    }
}

export default BlendsContainer;
