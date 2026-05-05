import { useCallback, useEffect, useState } from "react";
import styles from "./OrderAdditionalForm.module.css";
import { useBooking } from "../../context/BookingContext";
import type { Extra, Rate } from "../../types";
import ExtraInfo, { RateInfo } from "./OrderAdditionalFormData";
import DateRangePicker from "../DateRangePicker/DateRangePicker";

function OrderAdditionalForm() {
  const { model, setAdditional } = useBooking();
  const [period, setPeriod] = useState("");
  const [color, setColor] = useState("");
  const [rate, setRate] = useState<Rate | null>(null);
  const [extra, setExtra] = useState<Extra[]>([]);
  const [dateFrom, setDateFrom] = useState<Date | null>(null);
  const [dateTo, setDateTo] = useState<Date | null>(null);
  const [total, setTotal] = useState(0);

  const handleDateFromChange = (date: Date | null) => {
    setDateFrom(date);
  };

  const handleDateToChange = (date: Date | null) => {
    setDateTo(date);
  };

  const handleColor = useCallback((item: string) => () => setColor(item), []);
  const handleRate = useCallback((item: Rate) => () => setRate(item), []);
  const handleExtra = useCallback(
    (item: Extra) => () =>
      setExtra((prev) =>
        prev.some((x) => x.name === item.name)
          ? prev.filter((x) => x.name !== item.name)
          : [...prev, item],
      ),
    [],
  );

  useEffect(() => {
    if (!dateFrom || !dateTo || dateTo <= dateFrom) {
      setPeriod("");
      return;
    }
    const diffMs = dateTo.getTime() - dateFrom.getTime();
    const totalMinutes = Math.floor(diffMs / 60000);
    const days = Math.floor(totalMinutes / (60 * 24));
    const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
    const minutes = totalMinutes % 60;

    const parts: string[] = [];
    if (days) parts.push(`${days}д`);
    if (hours) parts.push(`${hours}ч`);
    if (minutes) parts.push(`${minutes}мин`);
    setPeriod(parts.join(" ") || "0мин");
  }, [dateFrom, dateTo]);

  useEffect(() => {
    if (!rate || !dateFrom || !dateTo || dateTo <= dateFrom) {
      setTotal(0);
      return;
    }
    const totalMinutes = Math.floor(
      (dateTo.getTime() - dateFrom.getTime()) / 60000,
    );
    const rentPrice =
      rate.time === "мин"
        ? totalMinutes * rate.price
        : Math.ceil(totalMinutes / (60 * 24)) * rate.price;
    const extrasPrice = extra.reduce((sum, x) => sum + x.price, 0);
    setTotal(rentPrice + extrasPrice);
  }, [rate, dateFrom, dateTo, extra]);

  useEffect(() => {
    setAdditional({
      color,
      dateStart: dateFrom,
      dateRange: period,
      rate,
      extras: extra,
      total,
    });
  }, [color, period, rate, extra, total, dateFrom, setAdditional]);

  return (
    <div className={styles.orderAdditionalContainer}>
      <div className={styles.form}>
        <p className={styles.formName}>Цвет:</p>
        <div className={styles.additionalColorForm}>
          <div className={styles.additionalColor}>
            <input
              id="Любой"
              type="radio"
              name="additionalColor"
              checked={color === "Любой"}
              onChange={handleColor("Любой")}
              className={styles.input}
            />
            <label
              htmlFor="Любой"
              className={`${styles.formLabel} ${color === "Любой" ? styles.formLabelActive : ""}`}
            >
              Любой
            </label>
          </div>
          {model?.color.map((item) => (
            <div key={item} className={styles.additionalColor}>
              <input
                id={item}
                type="radio"
                name="additionalColor"
                checked={item === color}
                onChange={handleColor(item)}
                className={styles.input}
              />
              <label
                htmlFor={item}
                className={`${styles.formLabel} ${color === item ? styles.formLabelActive : ""}`}
              >
                {item}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.form}>
        <p className={styles.formName}>Дата аренды</p>
        <DateRangePicker
          dateFrom={dateFrom}
          dateTo={dateTo}
          onDateFromChange={handleDateFromChange}
          onDateToChange={handleDateToChange}
        />
      </div>
      <div className={styles.form}>
        <p className={styles.formName}>Тариф</p>
        <form className={styles.rateForm}>
          {RateInfo.map((item) => (
            <div>
              <input
                id={item.name}
                type="radio"
                name="rate"
                checked={rate?.name === item.name}
                onChange={handleRate(item)}
                className={styles.input}
              />
              <label
                htmlFor={item.name}
                className={`${styles.formLabel} ${rate?.name === item.name ? styles.formLabelActive : ""}`}
              >
                {`${item.name}, ${item.price}₽/${item.time}`}
              </label>
            </div>
          ))}
        </form>
      </div>
      <div className={styles.form}>
        <p className={styles.formName}>Доп услуги</p>
        <form className={styles.extraForm}>
          {ExtraInfo.map((item) => (
            <div>
              <input
                id={item.name}
                type="checkbox"
                onChange={handleExtra(item)}
                checked={extra.some((x) => x.name === item.name)}
                className={styles.input}
              />
              <label
                htmlFor={item.name}
                className={`${extra.some((x) => x.name === item.name) ? styles.formLabelActive : ""} ${styles.formLabel}`}
              >{`${item.name}, ${item.price}₽`}</label>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}

export default OrderAdditionalForm;
