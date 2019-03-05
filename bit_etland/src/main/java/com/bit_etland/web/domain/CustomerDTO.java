package com.bit_etland.web.domain;

import lombok.Data;

@Data
public class CustomerDTO {
	private String customerId,
					customerName,
					password,
					ssn,
					photo,
					phone,
					city,
					address,
					postalCode,
					rnum;
}
