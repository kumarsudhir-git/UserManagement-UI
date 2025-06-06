import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { OrderService } from "../../services/order.service";

@Component({
  selector: 'app-order-details',
  template: `<div>Order Details</div>`,
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent {
    orderId: number | undefined;
    orderDetails: any;

    constructor(private route: ActivatedRoute, private orderService: OrderService) {
        this.route.params.subscribe(params => {
            this.orderId = +params['id'];
            this.fetchOrderDetails();
        });
    }

    fetchOrderDetails() {
        if (this.orderId !== undefined) {
            this.orderService.getOrderDetails(this.orderId).subscribe(details => {
                this.orderDetails = details;
            });
        }
    }
}