package com.luxestay.LuxeStay.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.luxestay.LuxeStay.entity.Booking;

import java.util.Optional;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    Optional<Booking> findByBookingConfirmationCode(String confirmationCode);
}
