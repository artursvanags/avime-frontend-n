"use client"

import { Order } from "@medusajs/medusa"
import Help from "@/components/order/components/help"
import Items from "@/components/order/components/items"
import OrderDetails from "@/components/order/components/order-details"
import OrderSummary from "@/components/order/components/order-summary"
import ShippingDetails from "@/components/order/components/shipping-details"
import React from "react"

type OrderCompletedTemplateProps = {
  order: Order
}

const OrderCompletedTemplate: React.FC<OrderCompletedTemplateProps> = ({
  order,
}) => {
  return (
    <div className="bg-gray-50 py-6 min-h-[calc(100vh-64px)]">
      <div className="content-container flex justify-center">
        <div className="max-w-4xl h-full bg-white w-full">
          <OrderDetails order={order} />
          <Items
            items={order.items}
            region={order.region}
            cartId={order.cart_id}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-10 border-b border-gray-200">
            <ShippingDetails
              shippingMethods={order.shipping_methods}
              address={order.shipping_address}
            />
            <OrderSummary order={order} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-10">
            <Help />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderCompletedTemplate
