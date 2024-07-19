//Using closure in shoppingCart Module
const createShoppingCart = () => {
    let cart = [];
    let totalCost = 0;
  
    const addItem = (item, price) => {
      cart.push({ item, price });
      totalCost += price;
    };
  
    const removeItem = (itemName) => {
      const itemIndex = cart.findIndex(({ item }) => item === itemName);
      if (itemIndex !== -1) {
        totalCost -= cart[itemIndex].price;
        cart.splice(itemIndex, 1);
      }
    };
  
    const getTotalCost = () => totalCost;
  
    const getCartItems = () => [...cart];
  
    return {
      addItem,
      removeItem,
      getTotalCost,
      getCartItems,
    };
  };
  
  // Using the Shopping Cart Module
  const myCart = createShoppingCart();
  
  myCart.addItem('Laptop', 1000);
  myCart.addItem('Phone', 500);
  myCart.addItem('Watch', 3000)
  
  console.log(myCart.getCartItems());  
  console.log(myCart.getTotalCost());  
  
  myCart.removeItem('Phone');
  console.log(myCart.getCartItems());  
  console.log(myCart.getTotalCost());  
  