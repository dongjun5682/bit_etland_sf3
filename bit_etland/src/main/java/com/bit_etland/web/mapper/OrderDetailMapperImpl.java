package com.bit_etland.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;
import com.bit_etland.web.domain.OrderDetailDTO;

@Repository
public class OrderDetailMapperImpl implements OrderDetailMapper {

	@Override
	public void insertOrderDetail(OrderDetailDTO ord) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<OrderDetailDTO> selectOrderDetailList() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<OrderDetailDTO> selectOrderDetails(String searchWord) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public OrderDetailDTO selectOrderDetail(String searchWord) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int countOrderDetail() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public boolean existOrderDetail(String searchWord) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void updateOrderDetail(OrderDetailDTO ord) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteOrderDetail(OrderDetailDTO ord) {
		// TODO Auto-generated method stub
		
	}

}
