package com.bit_etland.web.service;

import java.util.List;

import com.bit_etland.web.domain.OrderDTO;

public interface OrderService {

	public void registOrder(OrderDTO or);
	public List<OrderDTO> bringOrderList();
	public List<OrderDTO> retrieveOrders(String searchWord);
	public OrderDTO retrieveOrder(String searchWord);
	
	public int countOrders();
	public boolean existOrder(String searchWord);
	
	public void modifyOrder(OrderDTO or);
	public void removeOrder(OrderDTO or);
	
}
