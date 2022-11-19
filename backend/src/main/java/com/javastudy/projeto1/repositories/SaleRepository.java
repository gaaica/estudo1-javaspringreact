package com.javastudy.projeto1.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.javastudy.projeto1.entities.*;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
