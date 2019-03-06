package com.bit_etland.web.mapper;

import java.util.List;

import org.springframework.stereotype.Component;

import com.bit_etland.web.domain.OrderDTO;

@Component
public interface OrderMapper {

	public void insertOrder(OrderDTO or);
	public List<OrderDTO> selectOrderList();
	public List<OrderDTO> selectOrders(String searchWord);
	public OrderDTO selectOrder(String searchWord);
	
	public int countOrders();
	public boolean existOrder(String searchWord);
	
	public void updateOrder(OrderDTO or);
	public void deleteOrder(OrderDTO or);
}