'use strict';

const storeDiv = document.getElementById('locations');
const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
function Store(name, minCust, maxCust, avgSalePerCust, hourlySalesArray){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSalePerCust = avgSalePerCust;
  this.hourlySalesArray = hourlySalesArray;
  Store.storeLocations.push(this);
}
Store.prototype.customersPerHour = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
}

Store.prototype.hourlyCookieSales = function() {
  for(let i = 0; i < hours.length; i++)
    {
      let hourlySales = this.customersPerHour() * this.avgSalePerCust;
      this.hourlySalesArray.push(Math.ceil(hourlySales));
    }
}
Store.storeLocations = [];

let seattle = new Store('Seattle', 23, 65, 6.3, [])
let tokyo = new Store('Tokyo', 3, 24, 1.2, [])
let dubai = new Store('Dubai', 11, 38, 3.7, [])
let paris = new Store('Paris', 20, 38, 2.3, [])
let lima = new Store('Lima', 2, 16, 4.6, [])

//loop through all stores
//calculate cookie sales in loop
//push sales to array
function getAllCookieSales()
{
  for(let i = 0; Store.storeLocations.length; i++){
    let currentLocation = Store.storeLocations[i];
    currentLocation.hourlyCookieSales();
  }
}
/* seattle.customersPerHour();
seattle.hourlyCookieSales();
tokyo.customersPerHour();
tokyo.hourlyCookieSales();
dubai.customersPerHour();
dubai.hourlyCookieSales();
paris.customersPerHour();
paris.hourlyCookieSales();
lima.customersPerHour();
lima.hourlyCookieSales(); */
//getAllCookieSales();

/* function _makeElement(tag, parent, text){
const element = document.createElement(tag);
parent.appendChild(element);
if(text){
  element.textContent = text;
}
return element;
} */
  /* const tableElem = document.createElement('table');
  storeDiv.appendChild(tableElem);

  const row1 = document.createElement('tr')
  tableElem.appendChild(row1);
  for(let i = 0; hours.length; i++){
    let currenthour = hours[i]
    const thElem = document.createElement('th')
    row1.appendChild(thElem)
    thElem.textContent = currenthour;
  }
  const row2 = document.createElement('tr')
  tableElem.appendChild(row2);
  for(let i = 0; seattle.hourlySalesArray.length; i++){
    let currenthourSales = hourlySalesArray[i];
    const tdElem = document.createElement('td')
    row2.appendChild(tdElem)
    tdElem.textContent = currenthourSales;
  }
  const row3 = document.createElement('tr')
  tableElem.appendChild(row3);
  for(let i = 0; tokyo.hourlySalesArray.length; i++){
    let currenthourSales = hourlySalesArray[i];
    const tdElem = document.createElement('td')
    row3.appendChild(tdElem)
    tdElem.textContent = currenthourSales;
  }
  const row4 = document.createElement('tr')
  tableElem.appendChild(row4);
  for(let i = 0; paris.hourlySalesArray.length; i++){
    let currenthourSales = hourlySalesArray[i];
    const tdElem = document.createElement('td')
    row4.appendChild(tdElem)
    tdElem.textContent = currenthourSales;
  }
  const row5 = document.createElement('tr')
  tableElem.appendChild(row5);
  for(let i = 0; dubai.hourlySalesArray.length; i++){
    let currenthourSales = hourlySalesArray[i];
    const tdElem = document.createElement('td')
    row5.appendChild(tdElem)
    tdElem.textContent = currenthourSales;
  }
  const row6 = document.createElement('tr')
  tableElem.appendChild(row6);
  for(let i = 0; lima.hourlySalesArray.length; i++){
    let currenthourSales = hourlySalesArray[i];
    const tdElem = document.createElement('td')
    row6.appendChild(tdElem)
    tdElem.textContent = currenthourSales;
  } */

// loop through all locations and call these functions
/* function renderAllLocations() {
  for (let i = 0; i < locationsArray.length; i++) {
    const currentLocation = locationsArray[i];
    currentLocation.createHourlySales()
    renderStore(currentLocation);
  }
} */

//renderAllLocations();