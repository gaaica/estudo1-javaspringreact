package com.javastudy.projeto1.services;


import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.javastudy.projeto1.entities.Sale;
import com.javastudy.projeto1.repositories.SaleRepository;

@Service
public class SaleService {

	@Autowired
	private SaleRepository repository;
	
	public Page<Sale> findSales(String minDate, String maxDate, Pageable pageable) {
		
		LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());
		
		LocalDate minLd = minDate.equals("") ? today.minusDays(365) : LocalDate.parse(minDate);
		LocalDate maxLd = maxDate.equals("") ? today : LocalDate.parse(maxDate);
		
		return repository.findSales(minLd, maxLd, pageable);
	}
}
