let usser = {
    name:'kim',
    active: true,
    cart: [],
    purchases: []
}

const item2 = {
    name: 'bread',
}
const item3 = {
    name: 'motorcycle',
}
const item4 = {
    name: 'keyboard'
}
const amazonHistory = []


const pipe = (f,g) => (...args) => g(f(...args));

purchaseItem(
    itemTocart,
    applyTaxToitem,
    buyItem,
    emptyCart
    ) (usser, {name: 'keyboard', price: 4000 })

function purchaseItem(...fns) {
    return fns.reduce(pipe)
}


function itemTocart(usser, item2){
    amazonHistory.push(usser)
    const updateCart = usser.cart.concat(item2)
    return Object.assign({}, usser, {cart: updateCart})
}

function applyTaxToitem(usser){
    amazonHistory.push(usser)
const {cart} = usser;
const taxRate = 1.3;
const updatedCart = cart.map(item2 => {
    return {
        name : item2.name,
        price: item2.price*taxRate
    }
})
return Object.assign({}, usser, {cart: updatedCart})
}

function buyItem(usser){
    amazonHistory.push(usser)
   return  Object.assign({}, usser, {purchased: usser.cart})
}

function emptyCart(usser){
    amazonHistory.push(usser)
    return Object.assign({}, usser, {cart: []})
}
amazonHistory
