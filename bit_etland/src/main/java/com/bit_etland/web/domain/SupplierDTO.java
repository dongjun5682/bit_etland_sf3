package com.bit_etland.web.domain;

import org.springframework.stereotype.Component;
import lombok.Data;

@Data @Component
public class SupplierDTO {
	private String supplierId,
					supplierName,
					contactName,
					address,
					city,
					postalCode,
					country,
					phone;	
}
