import { useState } from "react";
import styles from "./OrdersFilters.module.css";
import Dropdown from "../../../assets/Icons/dropdown.svg?react";

const filterConfig = [
  {
    key: "period",
    options: ["За день", "За неделю", "За месяц"],
    defaultValue: "За неделю",
  },
  {
    key: "model",
    options: ["Elantra", "Creta", "i30 N", "Sonata"],
    defaultValue: "Elantra",
  },
  {
    key: "city",
    options: ["Ульяновск", "Москва", "Самара", "Казань", "Санкт-Петербург"],
    defaultValue: "Ульяновск",
  },
  {
    key: "status",
    options: ["В процессе", "Выполнено", "Отменено"],
    defaultValue: "В процессе",
  },
] as const;

export type OrdersFilterValues = Record<
  (typeof filterConfig)[number]["key"],
  string
>;

type Props = {
  onApply?: (values: OrdersFilterValues) => void;
};

const initialValues = filterConfig.reduce(
  (acc, filter) => ({ ...acc, [filter.key]: filter.defaultValue }),
  {} as OrdersFilterValues,
);

function OrdersFilters({ onApply }: Props) {
  const [values, setValues] = useState<OrdersFilterValues>(initialValues);

  const handleChange =
    (key: keyof OrdersFilterValues) =>
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setValues((prev) => ({ ...prev, [key]: e.target.value }));
    };

  return (
    <div className={styles.filters}>
      <div className={styles.filterContainer}>
        {filterConfig.map((filter) => (
          <div key={filter.key} className={styles.dropdown}>
            <select
              className={styles.dropdownSelect}
              value={values[filter.key]}
              onChange={handleChange(filter.key)}
            >
              {filter.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <Dropdown className={styles.dropdownIcon} />
          </div>
        ))}
      </div>
      <button
        type="button"
        className={styles.applyButton}
        onClick={() => onApply?.(values)}
      >
        Применить
      </button>
    </div>
  );
}

export default OrdersFilters;
