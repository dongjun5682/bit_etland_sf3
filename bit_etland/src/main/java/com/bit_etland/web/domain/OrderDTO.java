package com.bit_etland.web.domain;

import lombok.Data;

@Data
public class OrderDTO {
	private String orderId,
					orderDate,
					customerId,
					shipperId,
					employeelId;

}

