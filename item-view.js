const baseItemsUrl = `https://api.guildwars2.com/v2/items`;
const baseListingsUrl = `https://api.guildwars2.com/v2/commerce/listings`;
const header = document.querySelector("th");
const itemType = document.querySelector("#item-type");
const rarity = document.querySelector("#rarity");
const value = document.querySelector("#value");
const tradingPost = document.querySelector("#trading-post");
const id = 36061;

async function getItemDetails(id) {
    const url = `${baseItemsUrl}/${id}`;
    const response = await fetch(url);
    const jsonID = response.json();
    return jsonID;
}

async function getListingDetails(id) {
    const url = `${baseListingsUrl}/${id}`;
    const response = await fetch(url);
    const jsonID = response.json();
    return jsonID;
}

function renderItem(item) {
    header.innerHTML = `<img src="${item.icon}" alt="item picture"><p><a href="item-view.html">${item.name}</a></p>`
    itemType.innerHTML = `Item Type: ${item.type}`
    rarity.innerHTML = `Rarity: ${item.rarity}`
    value.innerHTML = `Value: ${item.vendor_value}`
}
console.log(getListingDetails(id));

getItemDetails(id).then(renderItem);
getListingDetails(id).then(renderTP);


function renderTP(item) {
    tradingPost.innerHTML = `Trading Post: ${item.sells[0].unit_price}`
}


