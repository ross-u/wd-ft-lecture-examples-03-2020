import React, { Component } from 'react'
import foods from './../foods.json'
import Foodbox from './Foodbox';
import Addfood from './Addfood'
import Searchbar from './Searchbar';
import './../App.css';



export default class Foodlist extends Component {
    state = {
        foods: foods,
        filterFoods: foods,
        showAdd: false,
        inputValue: '',
        quantity: 0,
        totalCalories:0,
        listOfFoods: []

    }

    showAdd = () => {
        this.setState({ showAdd: !this.state.showAdd });
    };

    addOneFood = (newFoodObj) => {
        const foodCopy = [...this.state.foods];
        foodCopy.unshift(newFoodObj)

        this.setState({ foods: foodCopy })
    }

    filterOnChange = (searchStr) => {

        let searchValue = searchStr.toLowerCase()
        let foodsCopy = [...this.state.foods]

        let filteredFoods = foodsCopy.filter(food => (
            food.name.toLowerCase().includes(searchValue)))


        this.setState({ filterFoods: filteredFoods })
    }

    sumTheTotal = (totalCalories,name, quantity) =>{
        let listOfFoodsCopy = [...this.state.listOfFoods]
        let newTotalCalories = this.state.totalCalories;

        const foundRow = listOfFoodsCopy.find((row) => row.name === name);

        if (foundRow) {
            foundRow.quantity += parseInt(quantity);
            foundRow.total += quantity * totalCalories;
        }
        else if (!foundRow) {
            let row = { quantity: parseInt(quantity), name, total: totalCalories * quantity }
            listOfFoodsCopy.push(row)
        }
        

        newTotalCalories += parseInt(totalCalories * quantity)
        
        this.setState({
            listOfFoods: listOfFoodsCopy,
            totalCalories: newTotalCalories
        })
    }

    render() {
        return (
            <div className="centered">

                <h1 className="foodlisth1">Food List</h1>
                <button className="button centered" onClick={this.showAdd}>Add a Food</button>
                {
                    this.state.showAdd
                        ? <Addfood createFood={this.addOneFood} />
                        : null
                }
                <Searchbar filterOnChange={this.filterOnChange}
                    inputValue={this.state.inputValue} />
                <div className="list-add">
                <ul>
                    {
                        this.state.filterFoods.map((oneFood, index) => {
                            return (
                                <Foodbox
                                key={index}
                                {...oneFood}
                                quantityChange={this.quantityChange}
                                quantity={this.state.quantity}
                                sumTheTotal={this.sumTheTotal} />
                            );
                        })
                    }
                </ul>
                <div className="todaysFood">
                    <h1>Today's Food</h1>
                   
                    <ul id="listOfFoods">
                        {
                            this.state.listOfFoods.map((food,ind)=>{
                                return ( <li key={ind}> {food.quantity} {food.name} - {food.total}kcal</li> )
                            })
                        }
                    </ul>
                    <br/>
                    <h3> Total  {this.state.totalCalories} Cal.</h3>
                </div>
                </div>
            </div>
        )
    }
}
