'use strict';

const storeDiv = document.getElementById('storeInformation');
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
const seattleStore = {
  location: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSale: 6.3,
  customerPerHour: function(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  totalCookieSales: function(){
  let hourlyCustomers = this.customerPerHour(this.minCustomer, this.maxCustomer);
  }
}

const tokyoStore = {
  location: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSale: 1.2,
  hourlyCookieSales: function(){
    for(let i = 0; i < this.storeHours.length; i++)
    {
    let cookieSales = Math.round(_randomCustomerHour(this.minCustomer,this.maxCustomer)*this.avgCookieSale)
    let currentstoreHours = this.storeHours[i];
    this.totalCookieSale = cookieSales,currentstoreHours;
    }
  }
}

const dubaiStore = {
  location: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSale: 3.7,
  hourlyCookieSales: function(){
    for(let i = 0; i < this.storeHours.length; i++)
    {
    let cookieSales = Math.round(_randomCustomerHour(this.minCustomer,this.maxCustomer)*this.avgCookieSale)
    let currentstoreHours = this.storeHours[i];
    this.totalCookieSale = cookieSales,currentstoreHours;
    }
  }
}

console.log(dubaiStore.eightAM);
const parisStore = {
  location: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSale: 2.3,
  hourlyCookieSales: function(){
    for(let i = 0; i < this.storeHours.length; i++)
    {
    let cookieSales = Math.round(_randomCustomerHour(this.minCustomer,this.maxCustomer)*this.avgCookieSale)
    let currentstoreHours = this.storeHours[i];
    this.totalCookieSale = cookieSales,currentstoreHours;
    }
  }

}

const limaStore = {
  location: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSale: 4.6,
  hourlyCookieSales: function(){
    for(let i = 0; i < this.storeHours.length; i++)
    {
    let cookieSales = Math.round(_randomCustomerHour(this.minCustomer,this.maxCustomer)*this.avgCookieSale)
    let currentstoreHours = this.storeHours[i];
    this.totalCookieSale = cookieSales,currentstoreHours;
    }
  }
}

function _randomCustomerHour(min, max){
  let customerPerHour = Math.floor(Math.random()* (max-min) + min);

  return customerPerHour;
}

const storeList = [seattleStore, tokyoStore, dubaiStore, parisStore, limaStore];

function getaAllStoreCookieSales()
{
  for(let i = 0; i < storeList.length; i++)
  {
    let currentStore = storeList[i];
    currentStore.hourlyCookieSales();
    console.log(currentStore.location, currentStore.totalCookieSale);
  }
}
getaAllStoreCookieSales();

//console.log(hourlyCookieSales(seattleStore.minCustomer, seattleStore.maxCustomer, seattleStore.avgCookieSale))

// function locationCookieSales(){
// let operatingHours = [7,8,9,10,11s,12,13,14,15,16,17,18,19];
// for(let i = 0; i < storeList.length; i++)
// {
//   let currentStore = storeList[i]
//   for(let i = 0; i < operatingHours.length; i++)
//   {
//     seattleStore.cookieSales();
//     let currentOperatingHours = operatingHours[i];
//     console.log(currentStore,currentOperatingHours, seattleStore.cookieSales());
//   }
// }
// }
//locationCookieSales();
function renderStore(store){
const ulElem = document.createElement('ul');
storeDiv.appendChild(ulElem);
}

// function renderStore(store){
//   const listElem = document.createElement('li');
//   storeDiv.appendChild
// }

// function renderAllStores(){
// for(let i = o; i < StoreList.length; i++)
// let currentSore = StoreList[i];
// }

