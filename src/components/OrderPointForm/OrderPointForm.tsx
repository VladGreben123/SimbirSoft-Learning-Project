import { useState, useCallback, memo } from "react";
import styles from "./OrderPointForm.module.css";
import type { City, Point } from "../../types/index";
import formData from "./OrderPointFormData";
import Dropdown from "./Dropdown/Dropdown";
import OrderMap from "./OrderMap/OrderMap";
import "leaflet/dist/leaflet.css";

type Props = {
  onPointSelect: (point: Point) => void;
  onPointClear: () => void;
  initialPoint?: Point | null;
};

function OrderPointForm({ onPointSelect, onPointClear, initialPoint }: Props) {
  const [cityValue, setCityValue] = useState(() => {
    if (!initialPoint) return "";
    return (
      formData.find((c: City) =>
        c.points.some((p) => p.name === initialPoint.name),
      )?.name ?? ""
    );
  });
  const [pointValue, setPointValue] = useState(initialPoint?.name ?? "");
  const [mapPosition, setMapPosition] = useState(() => {
    if (!initialPoint) return [0, 0];
    return (
      formData.find((c: City) =>
        c.points.some((p) => p.name === initialPoint.name),
      )?.position ?? [0, 0]
    );
  });

  const cityOptions = formData.map((c: City) => c.name);
  const selectedCity = formData.find((c: City) => c.name === cityValue);
  const pointOptions = selectedCity
    ? selectedCity.points.map((p) => p.name)
    : [];

  const handleCityChange = useCallback(
    (val: string) => {
      setCityValue(val);
      setPointValue("");
      onPointClear();
    },
    [onPointClear],
  );

  const handleCitySelect = useCallback(
    (name: string) => {
      setCityValue(name);
      setPointValue("");
      onPointClear();
      const city = formData.find((c: City) => c.name === name);
      if (city) setMapPosition(city.position);
    },
    [onPointClear],
  );

  const handlePointChange = useCallback(
    (val: string) => {
      setPointValue(val);
      onPointClear();
    },
    [onPointClear],
  );

  const handlePointSelect = useCallback(
    (name: string) => {
      setPointValue(name);
      const city = formData.find((c: City) => c.name === cityValue);
      const point = city?.points.find((p) => p.name === name);
      if (point) onPointSelect(point);
    },
    [cityValue, onPointSelect],
  );

  return (
    <div className={styles.formContainer}>
      <div className={styles.formInputs}>
        <form>
          <Dropdown
            id="city"
            label="Город"
            labelClass={styles.cityLabel}
            value={cityValue}
            onChange={handleCityChange}
            onSelect={handleCitySelect}
            options={cityOptions}
            placeholder="Начните вводить город"
          />
        </form>
        <form>
          <Dropdown
            id="point"
            label="Пункт выдачи"
            labelClass={styles.pointLabel}
            value={pointValue}
            onChange={handlePointChange}
            onSelect={handlePointSelect}
            options={pointOptions}
            placeholder="Начните вводить пункт ..."
          />
        </form>
      </div>

      <p className={styles.mapTitle}>Выбрать на карте:</p>
      <div className={styles.map}>
        <OrderMap
          mapPosition={mapPosition}
          selectedCity={selectedCity}
          handlePointSelect={handlePointSelect}
        />
      </div>
    </div>
  );
}

export default memo(OrderPointForm);
