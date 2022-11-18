import NotificationButton from "../NotificationButton";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import pt from "date-fns/locale/pt-BR";
registerLocale('pt', pt)

import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
import { useState } from "react";

function SalesCard() {
  const [minDate, setMinDate] = useState(new Date(new Date().setDate(new Date().getDate() - 365)));
  const [maxDate, setMaxDate] = useState(new Date());

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
            <tr>
              <td className="show992">#341</td>
              <td className="show576">08/07/2022</td>
              <td>Anakin</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="main-red-btn-container">
                  <NotificationButton></NotificationButton>
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#341</td>
              <td className="show576">08/07/2022</td>
              <td>Anakin</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="main-red-btn-container">
                  <NotificationButton></NotificationButton>
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#341</td>
              <td className="show576">08/07/2022</td>
              <td>Anakin</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="main-red-btn-container">
                  <NotificationButton></NotificationButton>
                </div>
              </td>
            </tr>
          </tbody>

        </table>
      </div>

    </div>
  )
}

export default SalesCard