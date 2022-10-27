export {};
// Allow us to define a set of named constants. Er can give these constants numberic or string values.
// Numeric Enums
// enum Responses {
//   no, //1
//   yes, //2
//   maybe, //3
// }

// enum Responses {
//   no = 2, //2
//   yes, //3
//   maybe, //4
// }

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const status = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus): boolean {
  return status === OrderStatus.DELIVERED;
}

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}
