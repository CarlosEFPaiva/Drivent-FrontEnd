import EventApi from "../services/EventApi";
import UserApi from "../services/UserApi";
import AuthApi from "../services/auth";
import CepApi from "../services/CepApi";
import EnrollmentApi from "../services/EnrollmentApi";
import HotelApi from "../services/hotel";
import SaveRoom from "../services/RoomApi";
import PaymentApi from "../services/PaymentApi";
import TalksApi from "../services/TalksApi";

export default function useApi() {
  return {
    event: new EventApi(),
    user: new UserApi(),
    auth: new AuthApi(),
    cep: new CepApi(),
    enrollment: new EnrollmentApi(),
    hotel: new HotelApi(),
    saveRoom: new SaveRoom(),
    payment: new PaymentApi(),
    talks: new TalksApi()
  };
}
