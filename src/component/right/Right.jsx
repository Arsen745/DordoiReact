import React from 'react'
import RightIm from './rightimport/RightIm'

const Right = () => {
    
    const text = [
        { name: "Пылесос", category: "VacuumCleaner" },
        { name: "Холодильник", category: "Fridge" },
        { name: "Кухонный комбайн", category: "FoodProcessor" },
        { name: "Утюг", category: "Iron" },
        { name: "Морозильник", category: "Freezer" },
        { name: "Телевизор", category: "Tv" },
        { name: "Аристон", category: "Ariston" },
        { name: "Стейк машина", category: "Steik" },
        { name: "Вафельница", category: "Waffli" },
        { name: "Блендер", category: "Blender" },
        { name: "Миксер", category: "Mikser" },
        { name: "Вытяжка", category: "Vitishka" },
        { name: "Стиральная машина", category: "Washing" },
        { name: "Кондиционер", category: "Condis" },
        { name: "Микроволновка", category: "Microvol" },
        { name: "Духовка", category: "Duhovka" },
        { name: "Газ плита", category: "Plita" },
        { name: "Тепловентилятор", category: "Heater" },
        { name: "Кофеварка", category: "Coffe" },
        { name: "Фритюрница", category: "Fryer" },
        { name: "Соковыжималка", category: "Socovij" },
        { name: "Электрическая мясорубка", category: "Miasorubka" },
        { name: "Электрический плита", category: "ElectricStove" },
        { name: "Электрический чайник", category: "Chainik" },
        { name: "Электрический нагреватель", category: "Nagrevatel" },
        { name: "Встраиваемая техника", category: "Vstoemyi" },
        { name: "Отпариватель", category: "Otparivatel" },
        { name: "Посудомоечная машина", category: "PosydaMashine" }
    ];
  return (
    <div>
        <RightIm text={text}/>
        
    </div>
  )
}

export default Right