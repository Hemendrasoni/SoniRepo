export class AppConfig {
    endPoints = {
        getAllBookings: 'http://localhost:8090/bookingInfo/getAll',
        getBookingById: 'http://localhost:8090/bookingInfo/getOne/',//pass id
        saveOneBooking: 'http://localhost:8090/bookingInfo/saveOne',
        saveAllBookings: 'http://localhost:8090/bookingInfo/saveAll',
    }
}