import { useState, useCallback, memo } from "react";
import styles from "./OrderPointForm.module.css";
import type { City, Point } from "../../types/index";
import formData from "./OrderPointFormData";
import Dropdown from "./Dropdown/Dropdown";
import OrderMap from "./OrderMap/OrderMap";
import 'leaflet/dist/leaflet.css'

type Props = {
  onPointSelect: (point: Point) => void;
};

function OrderPointForm({ onPointSelect}: Props) {
  const [cityValue, setCityValue] = useState("");
  const [pointValue, setPointValue] = useState("");
  const [mapPosition, setMapPosition] = useState([0,0]);

  const cityOptions = formData.map((c: City) => c.name);
  const selectedCity = formData.find((c: City) => c.name === cityValue);
  const pointOptions = selectedCity
    ? selectedCity.points.map((p) => p.name)
    : [];

  const handleCityChange = useCallback((val: string) => {
    setCityValue(val);
    setPointValue("");
  }, []);

  const handleCitySelect = useCallback((name: string) => {
    setCityValue(name);
    setPointValue("");
    const city = formData.find((c: City) => c.name === name);
    if (city) setMapPosition(city.position);
  }, []);

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
            onChange={setPointValue}
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
          selectedCity = {selectedCity} 
          handlePointSelect = {handlePointSelect}
        />
      </div>
    </div>
  );
}

export default memo(OrderPointForm);
