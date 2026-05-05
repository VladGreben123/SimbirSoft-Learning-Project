import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DateRangePicker.module.css";
import EraseIcon from "../../assets/Icons/eraseForm.svg?react";

interface Props {
  dateFrom: Date | null;
  dateTo: Date | null;
  onDateFromChange: (date: Date | null) => void;
  onDateToChange: (date: Date | null) => void;
}

function DateRangePicker({
  dateFrom,
  dateTo,
  onDateFromChange,
  onDateToChange,
}: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.date}>
        <span className={styles.label}>C</span>
        <div className={styles.field}>
          <ReactDatePicker
            selected={dateFrom}
            onChange={onDateFromChange}
            selectsStart
            startDate={dateFrom}
            endDate={dateTo}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="Время"
            dateFormat="dd.MM.yyyy HH:mm"
            className={styles.input}
            popperPlacement="bottom-start"
            placeholderText="Введите дату и время"
          />
          {dateFrom && (
            <button
              type="button"
              className={styles.clearButton}
              onClick={() => onDateFromChange(null)}
            >
              <EraseIcon />
            </button>
          )}
        </div>
      </div>
      <div className={styles.date}>
        <span className={styles.label}>по</span>
        <div className={styles.field}>
          <ReactDatePicker
            selected={dateTo}
            onChange={onDateToChange}
            selectsEnd
            startDate={dateFrom}
            endDate={dateTo}
            minDate={dateFrom ?? undefined}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="Время"
            dateFormat="dd.MM.yyyy HH:mm"
            className={styles.input}
            popperPlacement="bottom-start"
            placeholderText="Введите дату и время"
          />
          {dateTo && (
            <button
              type="button"
              className={styles.clearButton}
              onClick={() => onDateToChange(null)}
            >
              <EraseIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DateRangePicker;
