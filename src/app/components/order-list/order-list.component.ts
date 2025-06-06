import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent {
  orderNumber: string = '';
  orderDetails: any = null;
orders: any;

  constructor(private orderService: OrderService) {}

  fetchOrderDetails() {
    if (!this.orderNumber) return;
    this.orderService.getOrderDetails(Number(this.orderNumber)).subscribe({
      next: (details) => this.orderDetails = details,
      error: () => this.orderDetails = null
    });
  }

  orderDetailKeys() {
    return this.orderDetails ? Object.keys(this.orderDetails) : [];
  }
}