import NotificationButton from "../NotificationButton";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import pt from "date-fns/locale/pt-BR";
registerLocale('pt', pt)

import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/request";
import { Sale } from "../../models/sale";

function SalesCard() {
  const [minDate, setMinDate] = useState(new Date(new Date().setDate(new Date().getDate() - 365)));
  const [maxDate, setMaxDate] = useState(new Date());
  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {

    const mind = minDate.toISOString().slice(0, 10);
    const maxd = maxDate.toISOString().slice(0, 10);

    axios.get(`${BASE_URL}/sales?minDate=${mind}&maxDate=${maxd}`).then(response => {setSales(response.data.content)});
  }, [minDate, maxDate]);

  return (
    <div className="main-card">
      <h2 className="main-sales-title">Vendas</h2>
      <div>
        <div className="main-form-control-container">
          <DatePicker selected={minDate} onChange={(date: Date) => setMinDate(date)} className="main-form-control" 
            dateFormat="dd/MM/yyyy" locale="pt" />
        </div>
        <div className="main-form-control-container">
          <DatePicker selected={maxDate} onChange={(date: Date) => setMaxDate(date)} className="main-form-control" 
            dateFormat="dd/MM/yyyy" locale="pt" />
        </div>
      </div>

      <div>
        <table className="main-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">Data</th>
              <th>Vendedor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            {
              sales.map(sale => {
                return(
                  <tr key={sale.id}>
                    <td className="show992">{sale.id}</td>
                    <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                    <td>{sale.sellerName}</td>
                    <td className="show992">{sale.visited}</td>
                    <td className="show992">{sale.deals}</td>
                    <td>R$ {sale.amount.toFixed(2)}</td>
                    <td>
                      <div className="main-red-btn-container">
                        <NotificationButton></NotificationButton>
                      </div>
                    </td>
                  </tr>
                )
              })
            }            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SalesCard