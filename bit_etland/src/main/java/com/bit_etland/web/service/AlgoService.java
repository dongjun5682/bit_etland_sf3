package com.bit_etland.web.service;

import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public interface AlgoService {
	public String ArithmeticSequence(Map<?,?>param);
	public String GeometricSequence(Map<?,?>param);
}
