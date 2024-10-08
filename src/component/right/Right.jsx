import React from 'react'
import RightIm from './rightimport/RightIm'



const Right = () => {
  const text = [
    { name: "Пылесос", category: "VacuumCleaner" },
    { name: "Холодильник", category: "Fridge" },
    { name: "Утюг", category: "iron" },
    { name: "Морозильник", category: "Freezer" },
    { name: "Телевизор", category: "Tv" },
    { name: "Аристон", category: "Ariston" },
    { name: "Вафельница", category: "waffli" },
    { name: "Блендер", category: "Blender" },
    { name: "Миксер", category: "Mikser" },
    { name: "Вытяжка", category: "Vitishka" },
    { name: "Стиральная машина", category: "Washing" },
    { name: "Кондиционер", category: "Condis" },
    { name: "Микроволновка", category: "Microvol" },
    { name: "Духовка", category: "Duhovka" },
    { name: "Газ плита", category: "Plita" },
    { name: "Соковыжималка", category: "Socovij" },
    { name: "Электрический плита", category: "Electriplita" },
    { name: "Электрический чайник", category: "Chainik" },
    { name: "Электрический нагреватель", category: "Nagrevatel" },
    { name: "Встраиваемая техника", category: "Vstoemyi" },
    { name: "Посудомоечная машина", category: "PosydaMashine" }
  ];

  
  return (
    <div>
      <RightIm text={text} />
    </div>
  )
}

export default Right