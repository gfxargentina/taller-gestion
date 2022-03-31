import moment from "moment";

export const prepareDates = (clients = []) => {
  return clients.map((e) => ({
    ...e,
    fecha: moment(e.fecha).toDate(),
  }));
};
