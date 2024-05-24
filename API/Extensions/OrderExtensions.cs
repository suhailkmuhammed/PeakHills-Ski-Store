using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities.OrderAggregates;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions;

public static class OrderExtensions
{
    public static IQueryable<OrderDto> ProjectOrderToOrderDto(this IQueryable<Order> query)
    {
        return query
        .Select(order => new OrderDto
        {
            Id = order.Id,
            BuyerId = order.BuyerId,
            ShippingAddress = order.ShippingAddress,
            OrderDate = order.OrderDate,
            SubTotal = order.SubTotal,
            DeliveryFee = order.DeliveryFee,
            Total = order.GetTotal(),
            OrderStatus = order.OrderStatus.ToString(),
            OrderItems = order.OrderItems.Select(item => new OrderItemDto
            {
                ProductId = item.ItemOrdered.ProductId,
                Name = item.ItemOrdered.Name,
                PictureUrl = item.ItemOrdered.PictureUrl,
                Price = item.Price,
                Quantity = item.Quantity
            }).ToList()
        }).AsNoTracking();
    }
}
