import React, { forwardRef } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ptBR } from "date-fns/locale/pt-BR";
import { FaCalendarAlt } from "react-icons/fa";

// Registrar a localidade em português
registerLocale("pt-BR", ptBR);

// Tipagem para o componente CustomInput
interface CustomInputProps {
  value?: string;
  onClick?: () => void;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(({ value, onClick }, ref) => (
  <div className="input-group" style={{ width: '100%' }}>
    <input
      type="text"
      className="form-control"
      onClick={onClick}
      ref={ref}
      value={value}
      readOnly
    />
    <div className="input-group-append">
      <span className="input-group-text" onClick={onClick} style={{ cursor: 'pointer' }}>
        <FaCalendarAlt />
      </span>
    </div>
  </div>
));

// Tipagem para o componente CustomDatePicker
interface CustomDatePickerProps extends Omit<React.ComponentProps<typeof DatePicker>, 'onChange'> {
  selected: Date | null;
  onChange: (date: Date | null) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ selected, onChange, minDate, maxDate, filterDate, filterTime }) => (
  <div className="custom-datepicker-container" style={{ width: '100%' }}>
    <DatePicker
      selected={selected}
      onChange={onChange}
      showTimeSelect
      minDate={minDate}
      maxDate={maxDate}
      filterDate={filterDate}
      filterTime={filterTime}
      dateFormat="Pp"
      timeIntervals={30}
      locale="pt-BR"
      required
      customInput={<CustomInput />}
      timeCaption="Hora"
    />
  </div>
);

export default CustomDatePicker;