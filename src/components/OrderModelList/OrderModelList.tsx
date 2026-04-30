import { useCallback, useState } from "react";
import styles from "./OrderModelList.module.css";
import ModelData from "./OrderModelListData";
import type { Model } from "../../types/index";

const filterList = [
  { name: "Все модели" },
  { name: "Эконом" },
  { name: "Премиум" },
];

type Props = {
  onModelSelect: (model: Model) => void;
  activeModel: Model | null;
};

function OrderModelList({ onModelSelect, activeModel }: Props) {
  const [filter, setFilter] = useState("Все модели");

  const ModelFilter = useCallback(
    (model: Model) => {
      let style: string = styles.model;
      if (model.class !== filter && filter !== "Все модели") {
        style += ` ${styles.hiden}`;
      }
      if (model.id === activeModel?.id) {
        style += ` ${styles.activeModel}`;
      }
      return style;
    },
    [filter, activeModel],
  );

  const handleModelSelect = useCallback(
    (model: Model) => () => onModelSelect(model),
    [onModelSelect],
  );

  const handleFilterSelect = useCallback(
    (name: string) => () => setFilter(name),
    [],
  );

  const handleKeyDown = useCallback(
    (select: () => void) => (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter" || e.key === " ") select();
    },
    [],
  );

  return (
    <div className={styles.modelContainer}>
      <div className={styles.modelFilter}>
        <form className={styles.modelFilterForm}>
          {filterList.map((item) => (
            <div key={item.name} className={styles.modelFilterItem}>
              <input
                id={item.name}
                type="radio"
                name="modelFilter"
                checked={filter === item.name}
                onChange={handleFilterSelect(item.name)}
              />
              <label htmlFor={item.name}>{item.name}</label>
            </div>
          ))}
        </form>
      </div>
      <div className={styles.modelListContainer}>
        {ModelData.map((model) => {
          const select = handleModelSelect(model);
          return (
            <div
              key={model.id}
              role="button"
              tabIndex={0}
              className={ModelFilter(model)}
              onClick={select}
              onKeyDown={handleKeyDown(select)}
            >
              <h2 className={styles.modelName}>{model.name}</h2>
              <p className={styles.modelPrice}>
                {`${model.minPrice} - ${model.maxPrice} ₽`}
              </p>
              <img
                src={model.image}
                alt={model.name}
                className={styles.modelImage}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OrderModelList;
