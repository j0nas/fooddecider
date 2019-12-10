export const getRestaurantDishes = (restaurantId, dishes = []) =>
  Number.isInteger(restaurantId) ? dishes.filter(dish => dish.restaurantId === restaurantId) : null;
