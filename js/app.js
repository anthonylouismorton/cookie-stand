'use strict';

const storeDiv = document.getElementById('locations');
const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
const seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSalePerCust: 6.3,
  hourlySalesArray: [],
  hourCustomers: function() {
    return Math.floor(Math.random()*(this.maxCust - this.minCust)+this.minCust);
  },
  createHourlySales: function(){
    for(let i = 0; i < hours.length; i++)
    {
      let hourlySales = this.hourCustomers()*this.avgSalePerCust;
      this.hourlySalesArray.push(Math.round(hourlySales));
    }
  }
}
const tokyo= {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgSalePerCust: 1.2,
  hourlySalesArray: [],
  hourCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  createHourlySales: function(){
    for(let i = 0; i < hours.length; i++)
    {
      let hourlySales = this.hourCustomers() * this.avgSalePerCust;
      this.hourlySalesArray.push(Math.ceil(hourlySales));
      
      
    }
  }
}
const dubai= {
  name: 'Duabi',
  minCust: 11,
  maxCust: 38,
  avgSalePerCust: 3.7,
  hourlySalesArray: [],
  hourCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  createHourlySales: function(){
    for(let i = 0; i < hours.length; i++)
    {
      let hourlySales = this.hourCustomers() * this.avgSalePerCust;
      this.hourlySalesArray.push(Math.ceil(hourlySales));
      
      
    }
  }
}
const paris= {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgSalePerCust: 2.3,
  hourlySalesArray: [],
  hourCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  createHourlySales: function(){
    for(let i = 0; i < hours.length; i++)
    {
      let hourlySales = this.hourCustomers() * this.avgSalePerCust;
      this.hourlySalesArray.push(Math.ceil(hourlySales));
    }
  }
}
const lima= {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgSalePerCust: 4.6,
  hourlySalesArray: [],
  hourCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  createHourlySales: function(){
    for(let i = 0; i < hours.length; i++)
    {
      let hourlySales = this.hourCustomers() * this.avgSalePerCust;
      this.hourlySalesArray.push(Math.ceil(hourlySales));
    }
  }
}

function _makeElement(tag, parent, text){
const element = document.createElement(tag);
parent.appendChild(element);
if(text){
  element.textContent = text;
}
return element;
}

function renderStore(location) {
  let total = 0;
  const articleElem = _makeElement('article', storeDiv, null);
  _makeElement('h3', articleElem, location.name);
  const ulElem = _makeElement('ul', articleElem, null);
  for (let i = 0; i < hours.length; i++) {
    const text = `${hours[i]}: ${location.hourlySalesArray[i]} cookies`;
    total += location.hourlySalesArray[i];
    _makeElement('li', ulElem, text);
  }
  let totalsString = `Total: ${total} cookies`;
  _makeElement('li', ulElem, totalsString);
}

const locationsArray = [seattle, tokyo, dubai, paris, lima];

// loop through all locations and call these functions
function renderAllLocations() {
  for (let i = 0; i < locationsArray.length; i++) {
    const currentLocation = locationsArray[i];
    currentLocation.createHourlySales()
    renderStore(currentLocation);
  }
}

renderAllLocations();