package com.bit_etland.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;
import com.bit_etland.web.domain.CategoryDTO;
import com.bit_etland.web.proxy.Proxy;

@Repository
public class CategoryMapperImpl implements CategoryMapper{

	@Override
	public void insertCategory(CategoryDTO cate) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<CategoryDTO> selectCategoryList(Proxy pxy) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<CategoryDTO> selectCategorys(Proxy pxy) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public CategoryDTO selectCategory(CategoryDTO cate) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int countCategorys(Proxy pxy) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public boolean existCategory(Proxy pxy) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void updateCategory(CategoryDTO cate) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteCategory(CategoryDTO cate) {
		// TODO Auto-generated method stub
		
	}

}
