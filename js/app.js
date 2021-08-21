'use strict';
const formElem = document.getElementById('addLocation');
const tableElem = document.getElementById('locations');
const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
function Store(name, minCust, maxCust, avgSalePerCust){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSalePerCust = avgSalePerCust;
  this.hourlySalesArray = [];
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

function handleSubmit(event)
{
  event.preventDefault()
  const location = event.target.location.value;
  const minCust = parseInt(event.target.minCust.value);
  const maxCust = parseInt(event.target.maxCust.value);
  const avgCust = parseInt(event.target.avgCust.value);
  this.hourlySalesArray = [];
  let newStore = new Store(location, minCust, maxCust, avgCust, this.hourlySalesArray);
  console.log(Store.storeLocations);
  let body = document.getElementById('tbody');
  getAllCookieSales();
  newStore.renderCity(body);
  footer();
  event.target.reset();
}


Store.storeLocations = [];

new Store('Seattle', 23, 65, 6.3, [])
new Store('Tokyo', 3, 24, 1.2, [])
new Store('Dubai', 11, 38, 3.7, [])
new Store('Paris', 20, 38, 2.3, [])
new Store('Lima', 2, 16, 4.6, [])

console.log(Store.storeLocations)
//loop through all stores
//calculate cookie sales in loop
//push sales to array
function getAllCookieSales()
{
  for(let i = 0; i < Store.storeLocations.length; i++){
    let currentLocation = Store.storeLocations[i];
    currentLocation.hourlyCookieSales();
  }
}
getAllCookieSales();

function _makeElement(tag, parent, text){
const element = document.createElement(tag);
parent.appendChild(element);
if(text){
  element.textContent = text;
}
return element;
}
  function getHours(){
  const rowElem = document.createElement('td')
  tableElem.appendChild(rowElem);
  for(let i = 0; i < hours.length; i++){
    let currenthour = hours[i]
    _makeElement('td', tableElem, currenthour)
  }
    _makeElement('th', tableElem, 'Store Daily Total')
  }
  getHours();
  Store.prototype.renderCity = function(body){
    let total = 0;
    const rowElem = document.createElement('tr')
    body.appendChild(rowElem);
    const thElem = _makeElement('th', rowElem, this.name)
    for(let i = 0; i < hours.length; i++)
    {
      let cookiesPerHour = this.hourlySalesArray[i];
      total += cookiesPerHour;
      _makeElement('td', rowElem, cookiesPerHour);
      
    }
    _makeElement('td', rowElem, total);
}
function renderAllCitites(){
  let tbodyElem = _makeElement('tbody', tableElem, null)
  tbodyElem.id='tbody'
  for(let i = 0; i < Store.storeLocations.length; i++){
    Store.storeLocations[i].renderCity(tbodyElem);
  }
}
function footer() {
  const tFootElem = _makeElement('tfoot', tableElem, null)
  console.log('the footer function is being called', Store.storeLocations);
  const rowElem = _makeElement('tr', tFootElem, null)
  _makeElement('th', rowElem, 'Hourly Total')
  let hourTotal = 0;
  let grandTotal = 0;
  for(let i = 0; i < hours.length; i++){
    for(let j = 0; j < Store.storeLocations.length; j++)
    {
      let currerntStore = Store.storeLocations[j];
      hourTotal += currerntStore.hourlySalesArray[i];
      
    }
    _makeElement('td', rowElem, hourTotal);
    grandTotal += hourTotal;
    hourTotal = 0;
  }
  _makeElement('td', rowElem, grandTotal)
}
footer();
renderAllCitites();

formElem.addEventListener('submit', handleSubmit);