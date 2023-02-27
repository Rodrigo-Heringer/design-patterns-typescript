import { ShoppingOrder } from './shoppingOrder/ShoppingOrder';

const order = new ShoppingOrder(); // Pendente
order.approvePayment(); // Aprovado
order.waitPayment();
order.shipOrder();
order.rejectPayment(); // Daqui não altera mais o estado
order.approvePayment();
order.waitPayment();
order.approvePayment();
order.rejectPayment();
order.shipOrder();
