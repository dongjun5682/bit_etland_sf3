package com.bit_etland.web.service;

import java.util.List;

import com.bit_etland.web.domain.CustomerDTO;
import com.bit_etland.web.domain.ImageDTO;
import com.bit_etland.web.proxy.Proxy;

public interface ImageService {
	public void addImage(ImageDTO img);
	public List<ImageDTO> imageList(Proxy pxy);
	public List<ImageDTO> selectImages(ImageDTO img);
	public ImageDTO searchImage(ImageDTO img);
	public ImageDTO searchImageSeq(ImageDTO img);
	public int countImage(ImageDTO img);
	public void modifyImage(ImageDTO img);
	public void removeImage(ImageDTO img);
}
